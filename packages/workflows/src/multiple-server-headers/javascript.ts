/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {
  // resp1 - serverA => dedupekey - hostname, description contains server value
  // resp2 - serverB => check if dedupekey of hostname exists
  //       if it does not exist create dummy finding
  //       if dedupekey of hostname exists check if the server in the desciption matches if not not then we have a multiple serverheader scenario
  if (request && response) {
    const prefix = "ServerMulti_IgnoreThisFinding_";
    let host = request.getHost();
    let hostdedupekey = `server_multi_${host}`;
    let serverheaders = response.getHeader('server');
    if(!(await sdk.findings.exists(hostdedupekey))){
      await sdk.findings.create({
        title: "ServerIgnore",
        description: `${prefix}${serverheaders[0]}`,
        request: request,
        reporter: "ServerMulti_IgnoreThisFinding",
        dedupeKey: hostdedupekey
      });
      return;
    }

    let existingFinding = await sdk.findings.get(hostdedupekey);
    let seenServerValue = existingFinding.getDescription().substring(prefix.length);
    
    for(var server of serverheaders){
      if(server != seenServerValue){
        // Create finding for new server header
        await sdk.findings.create({
          title: `New Server Header: ${server}`,
          description: `Webserver ${host} returned a new server header: ${server}.`,
          request: request,
          reporter: "ServerMulti",
          dedupeKey: `server_multi_${host}_${server}`
        });

        // Create finding for old server header now that we have multiple
        if (seenServerValue != "undefined") {
          await sdk.findings.create({
            title: `New Server Header: ${seenServerValue}`,
            description: `Webserver ${host} returned a new server header: ${seenServerValue}.`,
            request: request,
            reporter: "ServerMulti",
            dedupeKey: `server_multi_${host}_${seenServerValue}`
          });
        }
      }
    }
  }
}
