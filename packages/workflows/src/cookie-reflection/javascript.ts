/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {
    if (request && response) {
      // get cookie header value
      // parse cookie header to get values
      // check response for the cookie value (if length of cookie is > 5)
      // create finding
      const cookie_header = request.getHeader('Cookie');
      if(cookie_header) {
        const split = cookie_header[0].split(";");
        for(let i = 0; i < split.length; i++){
          const split2 = split[i].split('=');
          const cookie_name = split2[0];
          const cookie_val = split2[1];
          if(cookie_val.length < 6){
            continue;
          }
          if(response.getBody().toText().indexOf(cookie_val) != -1){
            const description = `The request to ${request.getUrl()} has contains the value of cookie ${cookie_name}`;
            await sdk.findings.create({
              title: "Cookie Value Reflected In Response",
              description: description,
              request: request,
              reporter: "CookieValueReflectedInResponse",
              dedupeKey: description
            });
          }
        }
      }
    }
  }