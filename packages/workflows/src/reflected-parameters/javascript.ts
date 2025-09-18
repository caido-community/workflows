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

function urlDecode(str: string): string {
  try {
    return decodeURIComponent(str.replace(/\+/g, ' '));
  } catch {
    return str;
  }
}

export function run(sdk: SDK, context: Context): boolean {
  if (!context.response) {
    return false;
  }

  const request = context.request;
  const response = context.response;
  
  // Configuration
  const minimumParameterNameLength = 2;
  const minimumParameterValueLength = 3;
  const matchCaseSensitive = true;
  const excludedStrings = new Set(["true", "false", "null"]);
  const excludedParameterTypes = new Set(["cookie"]);
  
  const responseBody = new TextDecoder().decode(response.getBody());
  const reflectedItems: string[] = [];
  
  // Check query string (for parameters without values)
  const query = request.getQuery();
  if (query && query.length >= minimumParameterValueLength && !excludedStrings.has(query)) {
    const containsOriginal = matchCaseSensitive ? 
      responseBody.includes(query) : 
      responseBody.toLowerCase().includes(query.toLowerCase());
    const decodedQuery = urlDecode(query);
    const containsDecoded = matchCaseSensitive ? 
      responseBody.includes(decodedQuery) : 
      responseBody.toLowerCase().includes(decodedQuery.toLowerCase());
      
    if (containsOriginal || containsDecoded) {
      reflectedItems.push(`query: ${query}`);
    }
  }
  
  // Check parameters
  const parameters = request.getParameters();
  if (parameters) {
    for (const param of parameters) {
      if (excludedParameterTypes.has(param.type)) {
        continue;
      }
      
      // Check parameter name
      if (param.name.length >= minimumParameterNameLength && !excludedStrings.has(param.name)) {
        const containsOriginal = matchCaseSensitive ? 
          responseBody.includes(param.name) : 
          responseBody.toLowerCase().includes(param.name.toLowerCase());
        const decodedName = urlDecode(param.name);
        const containsDecoded = matchCaseSensitive ? 
          responseBody.includes(decodedName) : 
          responseBody.toLowerCase().includes(decodedName.toLowerCase());
          
        if (containsOriginal || containsDecoded) {
          reflectedItems.push(`parameter name: ${param.name}`);
        }
      }
      
      // Check parameter value
      if (param.value.length >= minimumParameterValueLength && !excludedStrings.has(param.value)) {
        const containsOriginal = matchCaseSensitive ? 
          responseBody.includes(param.value) : 
          responseBody.toLowerCase().includes(param.value.toLowerCase());
        const decodedValue = urlDecode(param.value);
        const containsDecoded = matchCaseSensitive ? 
          responseBody.includes(decodedValue) : 
          responseBody.toLowerCase().includes(decodedValue.toLowerCase());
          
        if (containsOriginal || containsDecoded) {
          reflectedItems.push(`parameter value: ${param.name}=${param.value}`);
        }
      }
    }
  }
  
  if (reflectedItems.length > 0) {
    sdk.findings.create({
      title: "Reflected Parameters Detected",
      description: `Found reflected parameters in response: ${reflectedItems.join(", ")}. This may indicate potential XSS, SSTI, header injection, or other injection vulnerabilities.`,
      reporter: "reflected-parameters",
      request: context.request,
      response: context.response,
    });
    return true;
  }
  
  return false;
}