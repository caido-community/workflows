## Workflow Description

This workflow enhances your security testing in Caido by leveraging AI to analyze HTTP requests for potential vulnerabilities. It sends the raw HTTP request to an AI model via the GroqCloud API, which then performs a thorough security analysis.

For each request you will find output in Findings tab.
If a request is out of scope, it will be flagged with RED color and analysis will not be performed.


## Setup Steps

- Get a GroqCloud API Key:
    - Sign up for a GroqCloud account at GroqCloud’s website to obtain an API key. This key is required to connect to the AI model.

- Configure Environment Variables in Caido:
    - Set the following variables in Caido’s settings to link the workflow to GroqCloud:
        - GroqCloud_API_key: Enter your GroqCloud API key here.
        - GroqCloud_model_for_AI_Mentor: Specify the AI model you want to use (e.g., a model suited for security analysis or natural language tasks). Check GroqCloud’s documentation for available models and pick one that fits your needs.

Run the Workflow:
Select an HTTP request in Caido and trigger the workflow. The AI Mentor’s suggestions will appear in Caido’s Findings.
