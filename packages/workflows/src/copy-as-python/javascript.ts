import { BytesInput, SDK } from "caido:workflow";
import type { Data } from "caido:workflow";

/**
 * @param {BytesInput} parsed
 * @param {SDK} sdk
 * @returns {MaybePromise<Data>}
 */
export function run(parsed: BytesInput, sdk: SDK): MaybePromise<Data> {
    const parsedString = sdk.asString(parsed);

    // Split the parsed string into lines, handling both \n and \r\n
    const lines = parsedString.split(/\r?\n/);

    // Extract the request type and path
    const [requestType, pathWithQuery] = lines[0]?.split(' ') ?? [];
    const [path, queryString] = pathWithQuery?.split('?') ?? [];

    // Extract the host from the Host header
    const hostHeaderLine = lines.find((line: string) => line.startsWith('Host:'));
    if (!hostHeaderLine) {
      sdk.console.error('Host header not found');
      return '';
    }
    const host = hostHeaderLine.split(' ')[1]?.trim() ?? '';

    // Extract all headers
    const headers: Record<string, string> = {};
    let contentStartIndex = -1;
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (line === '') {
        contentStartIndex = i + 1; // Headers end, content starts next line
        break;
      }
      const [key, ...valueParts] = line?.split(': ') ?? [];
      if (key) {
        headers[key] = valueParts.join(': ').trim();
      }
    }

    // Extract the request data
    const content = lines.slice(contentStartIndex).join('\n').trim();

    // Merge host header and path to form the base URL
    let completeURL = `https://${host}${path}`;

    // Append query parameters if present
    if (queryString) {
      completeURL += `?${queryString}`;
    }

    // Form the Python code string
    let pythonCode = `import requests\n\n`;
    pythonCode += `url = "${completeURL}"\n`;

    // Add headers to the Python code
    let headersStr = '';
    for (const [key, value] of Object.entries(headers)) {
      headersStr += `    '${key}': '${value.replace(/'/g, "\\'")}',\n`;
    }
    pythonCode += `headers = {\n${headersStr}}\n`;

    // Function to replace true/false with True/False
    function replaceBooleanStrings(input: string): string {
      return input.replace(/\btrue\b/g, 'True').replace(/\bfalse\b/g, 'False');
    }

    // Construct the request data
    let payload = '';
    let payloadKey = '';

    if (requestType !== 'GET') {
      // Determine the data type and format accordingly
      if (content.trim().startsWith('{') && content.trim().endsWith('}')) {
        // If JSON data
        try {
          let requestData = JSON.parse(content);
          payload = `${replaceBooleanStrings(JSON.stringify(requestData, null, 2))}\n`;
          payloadKey = 'json';
        } catch (error) {
          sdk.console.error('Error parsing JSON: ' + JSON.stringify(error));

          // If JSON parsing fails, try to handle it as plain text
          payload = `'''${content.replace(/'/g, "\\'")}'''\n`;
          payloadKey = 'data';
        }
      } else if (content.includes('=')) {
        // If form data (key=value pairs)
        let formData = parseFormData(content);
        payload = `${replaceBooleanStrings(JSON.stringify(formData, null, 2))}\n`;
        payloadKey = 'data';
      } else {
        // Other data types (plain text)
        payload = `'''${replaceBooleanStrings(content.replace(/'/g, "\\'"))}'''\n`;
        payloadKey = 'data';
      }
    }

    // Function to parse form data
    function parseFormData(formDataString: string): Record<string, string> {
      const formData: Record<string, string> = {};
      const formEntries = formDataString.split('&');
      for (const entry of formEntries) {
        const [key, value] = entry.split('=');
        if (key && value) {
          formData[decodeURIComponent(key)] = decodeURIComponent(value);
        }
      }
      return formData;
    }

    // Construct the request
    if (requestType === 'GET') {
      pythonCode += `response = requests.get(url, headers=headers)\n`;
    } else if (requestType === 'PUT' || requestType === 'DELETE') {
      if (payload) {
        pythonCode += `${payloadKey} = ${payload}\n`;
        pythonCode += `response = requests.${requestType.toLowerCase()}(url, headers=headers, ${payloadKey}=${payloadKey})\n`;
      } else {
        pythonCode += `response = requests.${requestType.toLowerCase()}(url, headers=headers)\n`;
      }
    } else {
      if (payload) {
        pythonCode += `${payloadKey} = ${payload}\n`;
        pythonCode += `response = requests.${requestType?.toLowerCase() ?? ''}(url, headers=headers, ${payloadKey}=${payloadKey})\n`;
      } else {
        pythonCode += `response = requests.${requestType?.toLowerCase() ?? ''}(url, headers=headers)\n`;
      }
    }

    return pythonCode;
  }
