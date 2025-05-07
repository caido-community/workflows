/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */

export async function run({ request, response }, sdk) {
    const param_names = new Set([
      // SSRF parameters
      "dest", "redirect", "uri", "continue", "url", "window", "data",
      "reference", "site", "html", "val", "validate", "domain", "callback", "return",
      "page", "feed", "host", "port", "to", "out", "dir",
      // SQL injection parameters
      "id", "select", "report", "search", "category", "file", "class", "news",
      "item", "menu", "ref", "title", "topic", "thread",
      "form", "main", "nav", "region",
      // XSS parameters
      "q", "s", "lang", "keyword", "keywords", "year", "email",
      "type", "name", "p", "month", "image", "list_type", "terms", "categoryid", "key",
      "l", "begindate", "enddate",
      // LFI parameters
      "cat", "action", "board", "date", "detail", "download", "path", "folder",
      "prefix", "include", "inc", "locate", "show", "doc", "view",
      "content", "document", "layout", "mod", "conf",
      // Open Redirect parameters
      "next", "target", "rurl", "destination", "redir", "redirect_uri",
      "redirect_url", "image_url", "go",
      "returnTo", "return_to", "checkout_url", "return_path",
      // RCE parameters
      "cmd", "exec", "command", "execute", "ping", "query", "jump", "code", "reg", "do",
      "func", "arg", "option", "load", "process", "step", "read", "feature", "exe",
      "module", "payload", "run", "print"  
    ]);
    
    if (request) {
      // query params
      const query_parts = request.getQuery().split('&');
      for (let i = 0; i < query_parts.length; i++) {
        const query_param = query_parts[i].split('=')[0];
        if(param_names.has(query_param)){
          const requestUrl = request.getUrl();
          const description = `The request to ${request.getHost()}${request.getPath()} has the query param ${query_param} which is in OWASP's top 25 vulnerable paramters`;
          await sdk.findings.create({
            title: "Request with OWASP top 25 vuln parameter",
            description: description,
            request: request,
            reporter: "OWASPTop25VulnerableParameters",
            dedupeKey: description
          });
        } 
      }
      //body params
      const body_params = [];
      try {
        const body = request.getBody().toJson();
        for (var key in body) {
          body_params.push(key);
        }
      } catch {
        const body = request.getBody().toText();
        const body_parts = body.split('&');
        for (let i = 0; i < body_parts.length; i++) {
          body_params.push(body_parts[i].split('=')[0]);
        }
      }
      for (let i = 0; i < body_params.length; i++) {
        const body_param = body_params[i];
        if(param_names.has(body_param)){
          const requestUrl = request.getUrl();
          const description = `The request to ${request.getHost()}${request.getPath()} has the body param ${body_param} which is in OWASP's top 25 vulnerable paramters`;
          await sdk.findings.create({
            title: "Request with OWASP top 25 vuln parameter",
            description: description,
            request: request,
            reporter: "OWASPTop25VulnerableParameters",
            dedupeKey: description
          });
        } 
      }
    }
  }
  