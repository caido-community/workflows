/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {
    // TODO: Might need to add a check for Access-Control-Allow-Credentials: true
    if (request && response){
        let payloads1 = {
            'null origin': 'null',
            'aribtrary https origin': 'https://evil.com',
            'aribtrary http origin': 'http://evil.com',
        };
        let foundWorking = false;
        for (const [k, v] of Object.entries(payloads1)) {
            let result = await test_origin(sdk, request, v);
            if(result){
                await createCorsFinding(sdk, result, v, `CORS Misconfig ${request.getHost()}${request.getPath()} - ${k}: ${v}`);
            }
        }
        if(foundWorking){
            sdk.console.log('CORS: Skipping further tests');
            return;
        }
        
        let reqOriginHeaders = request.getHeader('origin');
        let domain = request.getHost();
        // TODO: maybe we should test both host domain and origin domain (if they differ)
        if(reqOriginHeaders.length>0){
            let reqOrigin = reqOriginHeaders[0];
            domain = reqOrigin.split('://')[1];
        }
        
        let payloads2 = {
            'prefixed origin domain':'https://xyz'+extractDomain(domain),           // https://xyzexample.com
            'suffixed origin domain':'https://'+domain+'.evil.com',                 // https://example.com.evil.com
            'insecure origin protocol':'http://'+domain,                            // http://example.com
            'using localhost subdomain': 'https://localhost.evil.com',              // https://localhost.evil.com
            'using localhost subdomain http': 'http://localhost.evil.com',          // http://localhost.evil.com
            'using 127.0.0.1 subdomain': 'https://127.0.0.1.evil.com',              // https://127.0.0.1.evil.com
            'using 127.0.0.1 subdomain http': 'http://127.0.0.1.evil.com',          // http://127.0.0.1.evil.com
            'arbitrary subdomain': 'http://xyz.'+domain,                            // http://xyz.example.com    
            'substring match origin (drop last char)': 'https://'+domain.slice(0,-1), // https://example.co
            'unescaped regex': 'https://'+domain.replace(".","x"),                  // https://examplexcom (preferably smth like https://wwwxexample.com)
            // Source: https://corben.io/blog/18-6-16-advanced-cors-techniques
            'underscore separated origin':'https://'+domain+'_.evil.com',           // https://example.com _.evil.com     
            'plus separated origin':'https://'+domain+'.+.evil.com',                // https://example.com+.evil.com   
            'left curly brace separated origin':'https://'+domain+'.{.evil.com',    // https://example.com.{.evil.com
            'backtick separated origin':'https://'+domain+'`.evil.com',             // https://example.com`.evil.com
        }

        for (const [k, v] of Object.entries(payloads2)) {
            let result = await test_origin(sdk, request, v);
            if(result){
                await createCorsFinding(sdk, result, v, `CORS Misconfig ${request.getHost()}${request.getPath()} - ${k}: ${v}`);
            }
        }

        // idea from https://github.com/chenjj/CORScanner
        let unsafeOriginDomains = [
            "https://whatever.github.io",
            "https://jsbin.com",
            "https://codepen.io",
            "https://jsfiddle.net",
            "https://repl.it",
            "https://random.azurewebsites.net",
            "https://random.s3.amazonaws.com",
            "https://random.herokuapp.com"
        ];
        for(const unsafeOrigin of unsafeOriginDomains){
            let result = await test_origin(sdk, request, unsafeOrigin);
            if(result){
                await createCorsFinding(sdk, result, unsafeOrigin, `CORS Misconfig ${request.getHost()}${request.getPath()} - unsafe origin: ${unsafeOrigin}`);
            }
        }
    }
}
  
async function test_origin(sdk, req, new_origin){
    const newReq = toRequestSpec(req);
    newReq.setHeader('Origin', new_origin);
    let requestResponse = await sdk.requests.send(newReq)
    let resp = requestResponse.response;
    let respACAO = resp.getHeader('Access-Control-Allow-Origin')[0];
    sdk.console.log(`CORS test - Origin: ${new_origin} - Response ACAO: ${respACAO}`);
    if(respACAO){
        if(respACAO == 'null' || respACAO == '*' || respACAO.indexOf(new_origin)!=-1) {
            return requestResponse.request;
        }
    }
}

async function createCorsFinding(sdk, request, payload, description){
    const resourceLinks = [
        'https://portswigger.net/research/exploiting-cors-misconfigurations-for-bitcoins-and-bounties',
        'https://corben.io/blog/18-6-16-advanced-cors-techniques'
    ].join('\n');

    await sdk.findings.create({
        title: "CORS Misconfig - " + payload,
        description: description+'\n\n'+resourceLinks,
        request: request,
        reporter: "CORSMisconfig",
        dedupeKey: description
    });
}
  
function toRequestSpec(request) {
    const spec = new RequestSpec(request.getUrl());
    spec.setTls(request.getTls());
    spec.setHost(request.getHost());
    spec.setPort(request.getPort());
    spec.setMethod(request.getMethod());
    spec.setPath(request.getPath());

    if (request.getQuery()) {
        spec.setQuery(request.getQuery());
    }

    Object.entries(request.getHeaders()).forEach(([header, values]) => {
        values.forEach((value) => {
            spec.setHeader(header, value);
        });
    });

    if (request.getBody()) {
        spec.setBody(request.getBody());
    }

    return spec;
}
  
function extractDomain(hostname) {
    // skip localhost and IP addresses
    if (hostname === 'localhost' || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
        return hostname;
    }

    // Handle known TLDs and ccTLDs
    const parts = hostname.split('.');
    if (parts.length <= 2) return hostname;

    // Known second-level domains (like 'co.uk')
    const slds = ['co', 'com', 'org', 'net', 'gov', 'edu', 'ac', 'mil'];

    if (parts.length > 2 && slds.includes(parts[parts.length - 2])) {
        return parts.slice(-3).join('.');
    }

    return parts.slice(-2).join('.');
}