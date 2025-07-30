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
  const method = context.request.getMethod();
  const deprecatedMethods = new Set(["TRACE", "CONNECT"]);
  
  if (deprecatedMethods.has(method)) {
    sdk.findings.create({
      title: "Deprecated HTTP Method Detected",
      description: `Request uses deprecated/uncommon HTTP method: ${method}. This may indicate legacy endpoint configurations or potential security risks.`,
      reporter: "deprecated-http-methods",
      request: context.request,
      response: context.response,
    });
  }
}