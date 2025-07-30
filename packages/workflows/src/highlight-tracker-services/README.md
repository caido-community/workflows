# Highlight Tracker Services

## Author
- **Name:** [Ads Dawson](https://github.com/GangGreenTemperTatum)

## Description
This workflow identifies and highlights requests to known tracking services and analytics platforms, helping you understand what data is being collected during web browsing.

## Features

- Detects requests to known tracking hosts
- Identifies tracking-related URL paths
- Finds tracking parameters in requests
- Highlights tracking requests in red
- Comprehensive tracking service database

## Detected Tracking Services

### Analytics Platforms
- Google Analytics (`www.google-analytics.com`)
- Google Tag Manager (`www.googletagmanager.com`)
- HubSpot Analytics (`js-eu1.hs-analytics.net`)
- Hotjar (`static.hotjar.com`)

### Social Media Trackers
- Facebook (`static.xx.fbcdn.net`)
- GitHub Collector (`collector.github.com`)

### Advertising Networks
- Google DoubleClick (`stats.g.doubleclick.net`)
- Google Static (`www.gstatic.com`)

### Other Services
- Statsig (`events.statsigapi.net`)
- HubSpot Forms (`forms-eu1.hscollectedforms.net`)
- Various logging services

## Detection Methods

The workflow identifies tracking services through:

1. **Host-based Detection**: Known tracking domains
2. **Path-based Detection**: Common tracking endpoints (`/logging/v1`, `/track`)
3. **Parameter-based Detection**: Tracking-related parameters (`logs`, `log`)

## Usage

This passive workflow runs automatically on all HTTP traffic. When it detects requests to tracking services, it highlights them in red to help you:

- Understand data collection practices
- Identify privacy implications
- Analyze tracking behavior
- Filter out tracking noise during testing

## Privacy Implications

This workflow helps identify:
- What data is being collected
- Which third-party services receive data
- How extensive tracking is on websites
- Potential privacy concerns

## Author

Based on the original Bambda by Tur24Tur / BugBountyzip, converted to workflow format by Ads Dawson.