/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {
  // HEAD responses have no body but will have content-length header
  if(response && request.getMethod() != "HEAD"){
    let realLength = response.getBody().toRaw().length;
    let headers = response.getHeader('Content-Length');

    if (headers !== undefined && headers.length>0 && Number(headers[0]) !== realLength) {
      let description = `The Content-Length header is set to ${headers[0]} but the actual content length is ${realLength}`;
      await sdk.findings.create({
        title: "Content-Length header does not match actual content length",
        description: description,
        request: request,
        reporter: "Content-Length Mismatch Checker",
        dedupeKey: description
      });
    }
  }
}