/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {
  if (!request) return;

  const orig = request.getMethod();
  const spec = request.toSpec();
  spec.setMethod("OPTIONS");

  // Send the dynamic OPTIONS probe to the same host/path
  const probe = await sdk.requests.send(spec);

  if (probe.response) {
    const headers = probe.response.getHeaders();
    const allow = headers["allow"]?.[0] || "";
    const cors = headers["access-control-allow-methods"]?.[0] || "";
    const methods = (allow || cors).split(/\s*,\s*/);

    if (methods.length && !methods.includes(orig)) {
      const dedupeKey = `${request.getHost()}|${request.getPath()}|${orig}|${methods.join(",")}`;
      await sdk.findings.create({
        title: "Extraneous HTTP methods exposed",
        description: `OPTIONS listed methods [${methods.join(", ")}], original: ${orig}`,
        request,
        response: probe.response,
        dedupeKey
      });
    }
  }
}