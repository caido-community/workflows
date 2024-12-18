# Strip SAML Signature

Author: @lpha3ch0

## Usage

Highlight all of the POST data in a SAML request and use the URL Decode workflow to decode it. Then, select only the SAML data and use the Base64 decode workflow. Next, select the SAML data and use this workflow to strip the signature. Finally, Base64 encode the SAML data, URL encode the POST data, and send the request.
