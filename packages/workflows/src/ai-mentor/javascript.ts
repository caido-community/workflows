/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {
  // Log the start of the function
  sdk.console.log("Starting HTTP request vulnerability analysis");

  // Get environment variables
  const model = sdk.env.getVar("GroqCloud_model_for_AI_Mentor");
  const apiKey = sdk.env.getVar("GroqCloud_API_key");

  // Validate environment variables
  if (!model) {
    sdk.console.error("Error: Missing model environment variable");
    return "Error: Environment variable 'GroqCloud_model_for_AI_Mentor' is not set";
  }
  if (!apiKey) {
    sdk.console.error("Error: Missing API key environment variable");
    return "Error: Environment variable 'GroqCloud_API_key' is not set";
  }
  sdk.console.log(`Using model: ${model}`);

  // Construct the prompt with the raw HTTP request
  let prompt = `As an experienced bug bounty hunter, your task is to analyze the following HTTP request for any potential security vulnerabilities. Consider all aspects of the request, including headers, payloads, methods, and anything else that stands out. Look for issues like authentication weaknesses, injection possibilities, session management problems, or any other vulnerabilities that could be exploited. Be creative and thorough—don’t limit yourself to specific categories, and include less obvious issues that make sense for this request.

Provide a detailed analysis, breaking down each potential vulnerability with:
- A clear description of the issue.
- Why it could be a security risk.
- Specific tests or checks to verify it.

Structure your response with headings or bullet points for clarity. Here’s the HTTP request to analyze: \n\`\`\`\n${request.getRaw().toText()}\n\`\`\``;

  // Create and configure the RequestSpec for GroqCloud API
  const spec = new RequestSpec("https://api.groq.com/openai/v1/chat/completions");
  spec.setMethod("POST");
  spec.setBody(JSON.stringify({
    "model": model,
    "messages": [{"role": "user", "content": prompt}],
    "stream": false
  }));
  spec.setHeader("Content-Type", "application/json");
  spec.setHeader("Authorization", "Bearer " + apiKey);

  // Log request details (avoid logging headers to protect API key)
  sdk.console.log(`Sending request to ${spec.getHost()}${spec.getPath()} with method ${spec.getMethod()}`);

  // Send the request and handle potential network errors
  try {
    const sentRequest = await sdk.requests.send(spec);
    
    if (!sentRequest.response) {
      sdk.console.error("No response received from API");
      return "No response received";
    }
    const statusCode = sentRequest.response.getCode();
    sdk.console.log(`Received response with status code ${statusCode}`);

    // Check if the request was successful
    if (statusCode !== 200) {
      sdk.console.error(`API request failed with status ${statusCode}`);
      return `Error: Received status code ${statusCode}`;
    }

    const responseBody = sentRequest.response.getBody();
    if (!responseBody) {
      sdk.console.error("Response body is empty");
      return "No response body";
    }

    // Parse and process the response
    try {
      const responseAsJson = responseBody.toJson();
      sdk.console.log("Response JSON keys: " + Object.keys(responseAsJson).join(", "));

      // Validate response structure
      if (!responseAsJson.choices || !Array.isArray(responseAsJson.choices) || responseAsJson.choices.length === 0) {
        sdk.console.error("Invalid response format from API");
        return "Error: Invalid response format";
      }

      const cleanResponse = responseAsJson.choices[0].message.content;
      sdk.console.log("Successfully extracted analysis from response");
      return cleanResponse;
    } catch (e) {
      sdk.console.error(`Error parsing JSON response: ${e.message}`);
      return `Error parsing JSON response: ${e.message}`;
    }
  } catch (e) {
    sdk.console.error(`Error sending request to API: ${e.message}`);
    return `Error sending request: ${e.message}`;
  }
}
