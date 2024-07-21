// SecretSniffer v1.0
// Author: deathflash / OsmSec
async function run(input, sdk) {
  const { request, response } = input;

  // Get response body as text
  const responseBody = response.getBody()?.toText();
  if (!responseBody) {
    sdk.console.log("Response body is empty");
    return [];
  }

  // Define regex patterns and corresponding finding titles
  const patterns = [
    {
      regex: /(A3T[A-Z0-9]{13}|AKIA[0-9A-Z]{16}|AGPA[0-9A-Z]{16}|AIDA[0-9A-Z]{16}|AROA[0-9A-Z]{16}|AIPA[0-9A-Z]{16}|ANPA[0-9A-Z]{16}|ANVA[0-9A-Z]{16}|ASIA[0-9A-Z]{16})/g,
      title: "AWS API Key",
    },
    {
      regex: /(xox[pborsa]-[0-9]{12}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32})/g,
      title: "Slack Token",
    },
    // Add more regex patterns as needed
  ];

  // Object to store findings
  const findings = {};

  // Iterate over each pattern
  patterns.forEach(({ regex, title }) => {
    // Match regex pattern against response body
    const matches = responseBody.match(regex);
    
    if (matches && matches.length > 0) {
      // Remove duplicates using Set
      const uniqueMatches = [...new Set(matches)];

      // Generate finding description
      const findingDescription = `Sniffed ${title}:\n\n${uniqueMatches.join('\n')}`;
      
      // Store finding in findings object
      findings[title] = {
        title,
        reporter: "SecretSniffer",
        request,
        description: findingDescription,
        severity: "high",
      };
    } else {
      sdk.console.log(`No matches found for ${title}`);
    }
  });

  // Create findings for each detected pattern
  for (const title in findings) {
    if (findings.hasOwnProperty(title)) {
      const finding = findings[title];
      await sdk.findings.create(finding);
    }
  }
}

export { run };
