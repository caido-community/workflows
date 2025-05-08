/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {
    let realLength = response.getBody().toRaw().length;
    let headers = response.getHeaders();
    if (headers['Content-Length'] !== undefined && Number(headers['Content-Length']) !== realLength) {
      let description = `The Content-Length header is set to ${headers['Content-Length']} but the actual content length is ${realLength}`;
      await sdk.findings.create({
        title: "Content-Length header does not match actual content length",
        description: description,
        request: request,
        reporter: "Content-Length Mismatch Checker",
        dedupeKey: description
      });
    }
  }
  