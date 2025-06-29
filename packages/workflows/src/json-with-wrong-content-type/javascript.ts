/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {
  if (response) {
    const body = response.getBody().toText().trimLeft();
    const contentTypeHeader = response.getHeader("Content-Type");

        if (body.startsWith('{') || body.startsWith('[')) {
            // Regex to ignore application/json application/manifest+json 
            if (!contentTypeHeader[0].match(/^application\/(\w*\+)?json/)) {
                if (!contentTypeHeader[0].match(/^text\/(javascript|css)/)) {
                    let description = `The content of response from ${request.getHost()}${request.getPath()} is probably JSON but the content type is not application/json`;
                    await sdk.findings.create({
                    title: "JSON Response Without JSON Content-Type",
                    description: description,
                    request: request,
                    reporter: "JSON Response Without JSON Content-Type",
                    dedupeKey: description
                    });
                }
            } 
        }
    }
  }
}
