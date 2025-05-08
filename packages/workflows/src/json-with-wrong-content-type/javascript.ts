/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {
    if(response) {
        let body = response.getBody().toText().trimLeft();
        let contentTypeHeader = response.getHeader('Content-Type');

        if (body.startsWith('{') || body.startsWith('[')) {
            if (!contentTypeHeader[0].startsWith('application/json')) {
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