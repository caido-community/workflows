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
  if (!context.response) {
    return;
  }

  // Check if response is JavaScript content
  const contentType = context.response.getHeader("Content-Type");
  if (!contentType || !contentType.toLowerCase().includes("application/javascript")) {
    return;
  }

  const responseBody = new TextDecoder().decode(context.response.getBody());
  const foundFunctions: string[] = [];

  // List of suspicious JavaScript functions to detect
  const suspiciousFunctions = [
    "eval\\(",                 // Executes a string as code
    "setTimeout\\(",           // Can execute strings as code if used improperly
    "setInterval\\(",          // Similar to setTimeout, can execute strings as code
    "document\\.write\\(",     // Can overwrite entire document
    "innerHTML",               // Can introduce XSS vulnerabilities if used with untrusted content
    "document\\.createElement\\(",  // Safe, but part of dynamic content generation which can be risky
    "document\\.execCommand\\(",   // Deprecated, was used to execute certain commands
    "document\\.domain",       // Altering the document.domain can be risky
    "window\\.location\\.href",    // Can be used for redirects which might be used in phishing
    "document\\.cookie",       // Accessing cookies can be sensitive
    "document\\.URL",          // Can be used to extract URL information
    "document\\.referrer",     // Can be used to check where the request came from
    "window\\.open\\(",        // Opening a new window or tab, potential for misuse
    "document\\.body\\.innerHTML", // Specific case of innerHTML, also risky
    "element\\.setAttribute\\(",   // If used improperly, can set risky attributes like 'onclick'
    "element\\.outerHTML",         // Similar risks to innerHTML
    "XMLHttpRequest\\(",           // Can be used for sending/receiving data, potential for misuse
    "fetch\\(",                    // Modern way to make network requests, potential for misuse
    "navigator\\.sendBeacon\\("    // Used to send analytics and tracking data
  ];

  // Check for each suspicious function
  for (const functionPattern of suspiciousFunctions) {
    const regex = new RegExp(functionPattern, "g");
    if (regex.test(responseBody)) {
      foundFunctions.push(functionPattern.replace(/\\\\/g, ""));
    }
  }

  // Create finding if suspicious functions were detected
  if (foundFunctions.length > 0) {
    sdk.findings.create({
      title: "Suspicious JavaScript Functions Detected",
      description: `Found potentially dangerous JavaScript functions: ${foundFunctions.join(", ")}",
      reporter: "detect-suspicious-js-functions",
      request: context.request,
      response: context.response,
    });
  }
}