/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {
    if (request && response) {
      const host = request.getHeader('Host')[0];
      if(response.getBody().toText().indexOf(host) != -1) {
        const description = `The response from the request to ${request.getHost()}${request.getPath()} has a the host header value reflected in the body. This may be useful for host header injection and web cache poisioning attacks.`;
        await sdk.findings.create({
          title: "Hostname in Response",
          description: description,
          request: request,
          reporter: "HostnameInResponse",
          dedupeKey: description
        });
      }
    }
  }