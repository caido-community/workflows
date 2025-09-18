# Annotate SOAP Requests

## Author
- **Name:** [Ads Dawson](https://github.com/GangGreenTemperTatum)

## Description
This workflow automatically annotates SOAP requests by extracting usernames from WS-Security headers and body elements, populating them in the Notes column.

## Features

- Detects SOAP requests by Content-Type header containing "soap+xml"
- Only processes in-scope requests
- Skips requests that already have notes
- Extracts usernames from WS-Security headers
- Extracts the first element after `<s:Body>` tags
- Populates extracted information in the Notes column

## Usage

This passive workflow runs automatically on all HTTP traffic. It will:

1. Check if the request is in scope and has a SOAP Content-Type
2. Look for `<s:Body>` tags in the request body
3. Extract usernames from `<Username>` tags (with optional namespace prefixes)
4. Extract the first element name after `<s:Body>` tags
5. Add the extracted information to the request's Notes

## Examples

For a SOAP request containing:
```xml
<s:Body>
  <GetUserInfo>
    <wsse:Username>admin</wsse:Username>
  </GetUserInfo>
</s:Body>
```

The workflow will annotate the request with: `admin GetUserInfo`

## Author

Based on the original Bambda by Nick Coblentz, converted to workflow format by Ads Dawson.