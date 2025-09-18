import type { SDK } from "caido:workflow";

type Context = {
  request: {
    getMethod(): string;
    getPath(): string;
    getQuery(): string;
    getHeader(name: string): string | undefined;
    getHeaders(): Record<string, string>;
    getBody(): Uint8Array;
    getParameters(): Array<{name: string, value: string, type: string}>;
  };
  response?: {
    getStatusCode(): number;
    getHeader(name: string): string | undefined;
    getHeaders(): Record<string, string>;
    getBody(): Uint8Array;
  };
};

export function run(sdk: SDK, context: Context): boolean {
  if (!context.response) {
    return false;
  }

  const request = context.request;
  const response = context.response;
  const parameters = request.getParameters();
  
  if (!parameters || parameters.length === 0) {
    return false;
  }

  const responseBody = new TextDecoder().decode(response.getBody()).trim();
  if (responseBody.length === 0) {
    return false;
  }

  // Regex to match valid callback parameter format (alphanumeric with dots/underscores, 5+ chars)
  const paramRegex = /^[a-zA-Z][.\w]{4,}$/;

  // Check URL parameters only
  for (const param of parameters) {
    if (param.type !== 'url') continue;
    
    const paramValue = param.value;
    if (!paramRegex.test(paramValue)) continue;
    
    // Create regex to find callback in response body
    // Look for pattern: (start of string or non-word/quote/dot char) + callback + optional whitespace + (
    const callbackRegex = new RegExp(
      `(?:^|[^\\w'".])${paramValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\(`,
      'g'
    );
    
    if (callbackRegex.test(responseBody)) {
      sdk.findings.create({
        title: "JSONP CSP Bypass Detected",
        description: `Found controllable JSONP callback parameter '${param.name}' with value '${paramValue}' reflected in response. This could be used to bypass CSP restrictions.`,
        reporter: "jsonp-csp-bypass",
        request: context.request,
        response: context.response,
      });
      return true;
    }
  }

  return false;
}