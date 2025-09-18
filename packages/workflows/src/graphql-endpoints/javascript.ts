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
  const request = context.request;
  const parameters = request.getParameters();
  
  if (!parameters || parameters.length === 0) {
    return false;
  }

  // Look for 'query' parameters in different types
  for (const param of parameters) {
    if (param.name !== 'query') continue;
    
    // Check for newlines in the parameter value
    if (param.type === 'json') {
      // In JSON, look for literal \n
      if (param.value.includes('\\n')) {
        sdk.findings.create({
          title: "GraphQL Endpoint Detected",
          description: `Found GraphQL query parameter with newlines in JSON format: ${param.value.substring(0, 100)}...`,
          reporter: "graphql-endpoints",
          request: context.request,
          response: context.response,
        });
        return true;
      }
    } else {
      // In URL or body parameters, look for URL-encoded newline
      if (param.value.toLowerCase().includes('%0a')) {
        sdk.findings.create({
          title: "GraphQL Endpoint Detected",
          description: `Found GraphQL query parameter with URL-encoded newlines: ${param.value.substring(0, 100)}...`,
          reporter: "graphql-endpoints",
          request: context.request,
          response: context.response,
        });
        return true;
      }
    }
  }

  return false;
}