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

export function run(sdk: SDK, context: Context): boolean {
  if (!context.response) {
    return false;
  }

  const responseBody = new TextDecoder().decode(context.response.getBody());
  const htmlCloseTagCount = (responseBody.match(/<\/html>/gi) || []).length;
  
  if (htmlCloseTagCount > 1) {
    sdk.findings.create({
      title: "Multiple HTML Closing Tags Detected",
      description: `Found ${htmlCloseTagCount} </html> closing tags in response. This may indicate HTML injection vulnerabilities or malformed HTML responses.`,
      reporter: "multiple-html-tags",
      request: context.request,
      response: context.response,
    });
    return true;
  }

  return false;
}