# Detect 101 Switching Protocols

## Author
- **Name:** [Ads Dawson](https://github.com/GangGreenTemperTatum)

## Description
This workflow identifies HTTP responses with the 101 Switching Protocols status code, which indicates the server is switching to a different protocol as requested by the client.

## Features

- Detects responses with HTTP status code 101
- Highlights matching requests in orange
- Useful for identifying WebSocket upgrades and other protocol switches

## Usage

This passive workflow runs automatically on all HTTP traffic. When it detects a 101 Switching Protocols response, it highlights the request in orange for easy identification.

## About 101 Switching Protocols

The HTTP 101 Switching Protocols response code indicates that the server understands and agrees to the client's request to switch protocols. This is commonly seen when:

- Upgrading HTTP connections to WebSocket
- Switching to HTTP/2 or other protocols
- Negotiating protocol changes during the connection

## Author

Based on the original Bambda by Tur24Tur / BugBountyzip, converted to workflow format by Ads Dawson.