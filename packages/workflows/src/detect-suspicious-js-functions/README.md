# Detect Suspicious JS Functions

## Author
- **Name:** [Ads Dawson](https://github.com/GangGreenTemperTatum)

## Description
This workflow detects suspicious JavaScript functions in HTTP responses that may indicate XSS vulnerabilities or unsafe coding practices. It identifies dangerous functions like `eval()`, `setTimeout()`, `innerHTML`, and other potentially risky JavaScript constructs.

## Features
- Scans JavaScript responses for dangerous functions
- Detects XSS vectors and unsafe JS practices
- Identifies functions commonly used in code injection attacks
- Creates findings with detailed function information
- Highlights responses containing suspicious patterns

## Detected Functions
The workflow identifies these categories of suspicious functions:
- **Code Execution**: `eval()`, `setTimeout()`, `setInterval()`
- **DOM Manipulation**: `innerHTML`, `outerHTML`, `document.write()`
- **Dynamic Content**: `document.createElement()`, `element.setAttribute()`
- **Network Requests**: `XMLHttpRequest()`, `fetch()`
- **Navigation**: `window.location.href`, `window.open()`
- **Data Access**: `document.cookie`, `document.URL`, `document.referrer`

## Usage
Import this workflow into Caido and run it as a passive workflow during your security testing. It automatically analyzes JavaScript responses and generates findings when suspicious functions are detected.

## Security Impact
Helps identify:
- Potential XSS attack vectors
- Unsafe JavaScript coding practices
- Code injection opportunities
- Dynamic content generation risks