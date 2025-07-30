import type { SDK } from "caido:workflow";

type Context = {
  request: {
    getMethod(): string;
    getPath(): string;
    getQuery(): string;
    getHeader(name: string): string | undefined;
    getHeaders(): Record<string, string>;
    getBody(): Uint8Array;
    getUrl(): string;
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

  // Set of file extensions to ignore
  const ignoredExtensions = new Set(["mp4", "mp3", "png", "gif", "jpg", "jpeg", "css", "pdf"]);
  const requestUrl = context.request.getUrl().toLowerCase();
  
  // Check if URL ends with ignored file extensions  
  for (const ext of ignoredExtensions) {
    if (requestUrl.endsWith(`.${ext}`)) {
      return false;
    }
  }

  const responseBody = new TextDecoder().decode(context.response.getBody()).trim();
  if (responseBody.length === 0) {
    return false;
  }

  // Email regex pattern that excludes image file extensions
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(?!jpeg|png|jpg|gif|webp)[A-Z|a-z]{2,7}\b/g;
  const emailMatches = responseBody.match(emailRegex);
  
  if (emailMatches && emailMatches.length > 0) {
    const uniqueEmails = [...new Set(emailMatches)]; // Remove duplicates
    
    sdk.findings.create({
      title: "Email Addresses Detected",
      description: `Found ${uniqueEmails.length} unique email address(es) in response: ${uniqueEmails.join(", ")}`,
      reporter: "email-highlighter",
      request: context.request,
      response: context.response,
    });
    return true;
  }

  return false;
}