# Filter Authenticated Non-Bearer Tokens

## Author
- **Name:** [Ads Dawson](https://github.com/GangGreenTemperTatum)

## Description
This workflow filters and highlights authenticated requests that contain Authorization headers but are not traditional JWT bearer tokens (those starting with 'ey'). This helps identify alternative authentication mechanisms and API keys.

## Features
- Detects Authorization headers in requests
- Excludes traditional JWT bearer tokens (starting with 'ey')
- Filters for successful 2xx responses only
- Optional scope filtering (in-scope requests only)
- Highlights non-bearer authenticated requests in blue
- Creates findings for alternative authentication methods

## Detection Logic
The workflow identifies requests with:
- Present Authorization header
- Non-empty Authorization header value
- Authorization that doesn't contain both 'bearer' and 'ey' (JWT pattern)
- Successful 2xx response status

## Usage
Import this workflow into Caido and run it as a passive workflow during your security testing. It automatically analyzes HTTP requests and generates findings for non-bearer token authentication.

## Security Impact
Helps identify:
- API keys in Authorization headers
- Custom authentication tokens
- Basic authentication usage
- Alternative authentication schemes
- Non-JWT bearer token implementations