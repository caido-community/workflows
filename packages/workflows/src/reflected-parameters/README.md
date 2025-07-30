# Reflected Parameters

## Author
- **Name:** [Ads Dawson](https://github.com/GangGreenTemperTatum)

## Description
This workflow detects when parameter names and values are reflected in HTTP responses. This is useful for identifying potential attack surfaces for XSS, SSTI (Server-Side Template Injection), header injection, open redirects, and similar vulnerabilities.

## Features
- Detects reflected parameter names and values in responses
- Supports configurable minimum parameter lengths
- Case-sensitive and case-insensitive matching options
- Excludes common false positives ("true", "false", "null")
- Excludes cookie parameters by default
- Handles URL-decoded parameter checking
- Creates findings for potential injection points

## Detection Logic
The workflow searches for:
- Parameter names (minimum 2 characters by default)
- Parameter values (minimum 3 characters by default) 
- Query strings reflected in responses
- Both original and URL-decoded parameter values
- Excludes cookie parameters to reduce noise

## Configuration Options
- Minimum parameter name length: 2 characters
- Minimum parameter value length: 3 characters
- Case-sensitive matching: enabled
- Excluded strings: "true", "false", "null"
- Excluded parameter types: cookies

## Usage
Import this workflow into Caido and run it as a passive workflow during your security testing. It automatically analyzes HTTP requests/responses and generates findings when parameter reflection is detected.

## Security Impact
Helps identify:
- XSS attack vectors through reflected parameters
- SSTI vulnerabilities via parameter reflection
- Header injection opportunities
- Open redirect potential
- General injection attack surfaces