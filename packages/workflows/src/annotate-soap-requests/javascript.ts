export function run(input: any): any {
  const { request } = input;
  
  // Skip if notes already present
  if (request.annotations?.notes) {
    return input;
  }
  
  const bodyString = request.body?.toText();
  if (!bodyString || !bodyString.includes("<s:Body")) {
    return input;
  }
  
  // Extract usernames from ws-security header and body elements
  const regex = /<(?:[a-zA-Z0-9]+:)?Username>([^<]+)<\/(?:[a-zA-Z0-9]+:)*Username>|<(?:[a-zA-Z0-9]+:)*Body[^>]*><([^ ]+)/gi;
  const matches = [...bodyString.matchAll(regex)];
  
  if (matches.length === 0) {
    return input;
  }
  
  const extractedElements: string[] = [];
  matches.forEach(match => {
    for (let i = 1; i < match.length; i++) {
      if (match[i]) {
        extractedElements.push(match[i]);
      }
    }
  });
  
  if (extractedElements.length > 0) {
    return {
      ...input,
      request: {
        ...request,
        annotations: {
          ...request.annotations,
          notes: extractedElements.join(" ")
        }
      }
    };
  }
  
  return input;
}