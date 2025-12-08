# GAP "Sus" Parameters 🤘

Author: @xnl-h4ck3r

## Workflow Description

This workflow will check the request for potentially "sus" parameters (see Sources below). The following categories are checked and a Finding reported, one per request URL and category. 

These are the catregory of "sus" parameters that will be reported:
- `CMDI`: Command Injection
- `DEBUG`: Debug or Admin Parameters
- `FILEINC`: File Inclusion
- `IDOR`: Insecure Direct Object Reference (IDOR)
- `OPENREDIRECT`: Open Redirect
- `SQLI`: SQL Injection
- `SSRF`: Server-Side Request Forgery (SSRF)
- `SSTI`: Server-Side Template Injection (SSTI)
- `XSS`: Cross-Site Scripting (XSS)
- `MASSASSIGNMENT`: Mass Assignment / Overposting


## Sources

- The ["Sus" Params Project](https://github.com/g0ldencybersec/sus_params) from [@Jhaddix](https://x.com/Jhaddix) and [@G0LDEN_infosec](https://x.com/G0LDEN_infosec)
- Data gathered from Akamai WAF threat research team intel - thanks to [@ryancbarnett](https://x.com/ryancbarnett)