/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {
    if (request && response) {
      const location = response.getHeader('Location')
      if(location){
        sdk.console.log(`has location header`);
        const params = request.getQuery().split('&')
        for (let i = 0; i < params.length; i++) {
          const param_val = params[i].split('=')[1];
          if(param_val.startsWith('http')){
            const url = decodeURIComponent(param_val);
            const split = url.split('//')
            if(location[0].startsWith(split[0]+'//'+split[1])){
              const description = `The request to ${request.getUrl()} has redirect to same host as one of the GET params (open redirect)`;
              await sdk.findings.create({
                title: "Request Redirected to Parameter Value",
                description: description,
                request: request,
                reporter: "RedirectedToParameterValue",
                dedupeKey: description
              });
            }
          }
        }
      }
    }
  }
  