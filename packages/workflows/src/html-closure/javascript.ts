/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {
  if (response) {
    const body = response.getBody().toText();
    if (response.getHeader("Content-Type")[0].startsWith("text/html")) {
      const count = (body.match(/<\/html>/g) || []).length;
      if (count > 1) {
        const description = `Found ${count} </html> tags in the response body`;
        await sdk.findings.create({
          title: "More than one </html> tag",
          description: description,
          request: request,
          reporter: "HTML Closure",
          dedupeKey: description,
        });
      }
    }
  }
}
