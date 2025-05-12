/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {
    if (request && response) {
      const cookie_header = request.getHeader('Cookie');
      if(cookie_header) {
        const split = cookie_header[0].split(";");
        for(const cookie of split){
          const split2 = cookie.split('=');
          const cookie_name = split2[0];
          const cookie_val = split2[1];
          if(cookie_val.length < 6){
            // checking short cookie values like "false" would create many false positives
            continue;
          }
          if(response.getBody().toText().indexOf(cookie_val) != -1){
            await sdk.findings.create({
              title: `Value "${cookie_val}" from cookie "${cookie_name}" is reflected`,
              description: `The response from ${request.getUrl()} contains the value "${cookie_val}" which is also the value of the cookie "${cookie_name}"`,
              request: request,
              reporter: "CookieValueReflectedInResponse",
              dedupeKey: `cookie_reflect_${request.getUrl()}_${cookie_name}_${cookie_val}`
            });
          }
        }
      }
    }
  }