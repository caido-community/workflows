# JSONP CSP Bypass

## Author
- **Name:** [Ads Dawson](https://github.com/GangGreenTemperTatum)

## Description
This workflow identifies JSONP endpoints that could be used to bypass Content Security Policy (CSP) restrictions. It detects scripts where callback parameters are reflected in the response, allowing for potential CSP bypasses when the CSP allows "same site" script resources.

## Features
- Detects JSONP callback parameters in URL parameters
- Identifies when callback values are reflected in response bodies
- Validates callback parameter format (alphanumeric with dots/underscores, 5+ chars)
- Creates findings for potential CSP bypass opportunities
- Highlights suspicious JSONP endpoints

## Detection Logic
The workflow searches for:
- URL parameters with alphanumeric callback names (5+ characters)
- Response bodies that contain the callback parameter value
- Proper JSONP callback format patterns
- Function call patterns in the response

## Usage
Import this workflow into Caido and run it as a passive workflow during your security testing. It automatically analyzes HTTP requests/responses and generates findings when JSONP CSP bypass opportunities are detected.

## Security Impact
Helps identify:
- CSP bypass opportunities through JSONP
- Controllable script resources on same-origin
- Potential XSS vectors via JSONP callback manipulation
- Sites vulnerable to CSP policy circumvention