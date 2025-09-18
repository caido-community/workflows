# GraphQL Endpoints

## Author
- **Name:** [Ads Dawson](https://github.com/GangGreenTemperTatum)

## Description
This workflow identifies GraphQL endpoints by detecting requests with 'query' parameters containing newlines. This pattern is commonly found in GraphQL queries and can help identify potential GraphQL injection opportunities.

## Features
- Detects GraphQL endpoints through query parameter analysis
- Identifies newline characters in query parameters (both URL-encoded and JSON)
- Supports multiple parameter types: JSON, BODY, and URL parameters
- Creates findings for potential GraphQL injection testing targets

## Detection Logic
The workflow searches for:
- Parameters named 'query' in JSON, BODY, or URL contexts
- Newline characters (`\n` in JSON or `%0a` in URL-encoded parameters)
- GraphQL-specific patterns that indicate active GraphQL endpoints

## Usage
Import this workflow into Caido and run it as a passive workflow during your security testing. It automatically analyzes HTTP requests and generates findings when GraphQL endpoints are detected.

## Security Impact
Helps identify:
- GraphQL endpoints for security testing
- Potential GraphQL injection opportunities
- API endpoints that may accept complex queries
- Testing targets for GraphQL-specific vulnerabilities