/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {
    if(response) {
        const responseCode = response.getCode();
        const responseBodyLength = response.getBody().toRaw().length;

        if (responseCode <= 399 && responseCode >= 300 && responseBodyLength > 1000) {
            const requestUrl = request.getUrl();
            const description = `The response from the request to ${requestUrl} is a redirect response with a body larger than 1000 bytes. This may indicate a misconfiguration or a security issue.`;

            await sdk.findings.create({
            title: "Large Redirect Response Detected",
            description: description,
            request: request,
            reporter: "Large Redirect Response",
            dedupeKey: description
            });
        }
    }
}