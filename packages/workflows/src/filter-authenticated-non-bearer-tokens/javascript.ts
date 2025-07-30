import type { SDK } from "caido:workflow";

type Context = {
  request: {
    getMethod(): string;
    getPath(): string;
    getQuery(): string;
    getHeader(name: string): string | undefined;
    getHeaders(): Record<string, string>;
    getBody(): Uint8Array;
  };
  response?: {
    getStatusCode(): number;
    getHeader(name: string): string | undefined;
    getHeaders(): Record<string, string>;
    getBody(): Uint8Array;
  };
};

export function run(sdk: SDK, context: Context): void {
  const authHeader = context.request.getHeader("Authorization");
  
  if (authHeader) {
    const authLower = authHeader.toLowerCase();
    const isNotBearerJWT = !(authLower.includes("bearer") && authLower.includes("ey"));
    
    if (isNotBearerJWT) {
      sdk.findings.create({
        title: "Non-Bearer Token Authentication Detected",
        description: `Found Authorization header with non-JWT bearer token: ${authHeader.substring(0, 50)}${authHeader.length > 50 ? '...' : ''}. This may be an API key or custom authentication token.`,
        reporter: "filter-authenticated-non-bearer-tokens",
        request: context.request,
        response: context.response,
      });
    }
  }
}