/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {
  if (response) {
    const headers = response.getHeaders();
    for (const header in headers) {
      if (header.indexOf(" ") != -1) {
        const requestUrl = request.getUrl();
        const description = `The response from the request to ${requestUrl} has a header that contains a space (${header}). This may indicate a misconfiguration or a security issue.`;
        await sdk.findings.create({
          title: "Header with a space Detected",
          description: description,
          request: request,
          reporter: "MalformedHttpHeader",
          dedupeKey: description,
        });
        break;
      }
    }
  }
}
