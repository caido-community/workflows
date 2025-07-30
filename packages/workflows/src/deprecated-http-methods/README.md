# Deprecated HTTP Methods

## Author
- **Name:** [Ads Dawson](https://github.com/GangGreenTemperTatum)

## Description
This workflow identifies and highlights requests using deprecated or uncommon HTTP methods like TRACE and CONNECT. These methods may indicate legacy endpoint configurations or potential security risks.

## Features
- Detects deprecated HTTP methods (TRACE, CONNECT)
- Highlights suspicious requests in red
- Creates findings with method information
- Helps identify legacy or misconfigured endpoints

## Detected Methods
- **TRACE**: Often disabled due to XST (Cross-Site Tracing) vulnerabilities
- **CONNECT**: Used for tunneling, may indicate proxy misconfigurations

## Usage
Import this workflow into Caido and run it as a passive workflow during your security testing. It automatically analyzes HTTP requests and generates findings when deprecated methods are detected.

## Security Impact
Helps identify:
- Legacy endpoint configurations
- Potential XST vulnerabilities (TRACE method)
- Proxy misconfigurations (CONNECT method)
- Unusual server behavior
- Attack surface expansion opportunities