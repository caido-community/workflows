# Detect Server Names

## Author
- **Name:** [Ads Dawson](https://github.com/GangGreenTemperTatum)

## Description
This workflow identifies and highlights HTTP responses containing specific server names in the Server header, helping with reconnaissance and server identification.

## Features

- Detects over 80 different server types and technologies
- Highlights matching requests in red
- Adds server information to request notes
- Comprehensive server name database including web servers, CDNs, and application servers

## Detected Server Types

The workflow detects common servers including:

- **Web Servers**: Apache, Nginx, Microsoft-IIS, LiteSpeed, Caddy
- **Cloud Services**: AmazonS3, CloudFront, AkamaiGHost, Google Frontend
- **Application Servers**: Jetty, GlassFish, Tornado, Kestrel
- **CDNs & Proxies**: Varnish, Squid, awselb
- **Specialized Servers**: And many more...

## Usage

This passive workflow runs automatically on all HTTP traffic. When it detects a known server name in the Server response header, it:

1. Highlights the request in red
2. Adds a note with the detected server name
3. Helps identify the backend technology stack

## Server Detection

The workflow checks the exact Server header value against a comprehensive list of known server names. This helps in:

- Technology stack identification
- Security assessment planning
- Attack surface analysis
- Infrastructure reconnaissance

## Author

Based on the original Bambda by Tur24Tur / BugBountyzip, converted to workflow format by Ads Dawson.