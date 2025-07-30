# HTTP Method Checker

## Author
- **Name:** [Ads Dawson](https://github.com/GangGreenTemperTatum)

## Description
This workflow dynamically probes HTTP endpoints by sending an `OPTIONS` request to detect discrepancies between the HTTP methods advertised by the server and the method originally used. It helps identify misconfigured HTTP methods exposed on the target.

## Features
- Sends `OPTIONS` request to the same host and path as the original request.
- Parses `Allow` and `Access-Control-Allow-Methods` headers.
- Flags requests where the original HTTP method is not listed in the allowed methods.
- Creates findings with detailed metadata for easier triage.

## Usage
Import this workflow into Caido and run it during your HTTP request analysis. It automatically sends the probe and generates findings if discrepancies are found.
