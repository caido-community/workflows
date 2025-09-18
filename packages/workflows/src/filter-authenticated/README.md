# Filter Authenticated Requests

## Author
- **Name:** [Ads Dawson](https://github.com/GangGreenTemperTatum)

## Description
This workflow identifies authenticated HTTP requests that received successful 2XX responses, helping focus testing efforts on authenticated areas of applications.

## Features

- Detects requests with Authorization headers
- Identifies requests with Cookie headers (session cookies)
- Filters for successful 2XX responses only
- Highlights authenticated requests in blue
- Useful for focusing on authenticated application areas

## Detection Criteria

The workflow identifies requests as authenticated if they contain:

1. **Authorization Header**: Any request with an Authorization header
2. **Cookie Header**: Requests containing cookies (potential session cookies)

Combined with:
- **2XX Status Codes**: Only successful responses (200-299)

## Usage

This passive workflow runs automatically on all HTTP traffic. When it identifies authenticated requests with successful responses, it highlights them in blue to help you:

- Focus testing on authenticated areas
- Identify session-based authentication
- Track successful authenticated interactions
- Separate authenticated from unauthenticated traffic

## Configuration Notes

The original Bambda included additional filtering options for:
- Excluding static resources (JS, CSS, images)
- Scope-based filtering
- Custom session cookie validation

This workflow focuses on the core authentication detection logic while maintaining simplicity.

## Author

Based on the original Bambda by joe-ds, converted to workflow format by Ads Dawson.