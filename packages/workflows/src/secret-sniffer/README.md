# SecretSniffer

Author: [deathflash](https://x.com/deathflash1411) / [OsmSec](https://github.com/osmsec)

SecretSniffer is a Caido workflow designed to detect Secrets and API Key leaks in HTTP responses, leveraging regex patterns as below:

```json
    {
      regex: /(A3T[A-Z0-9]{13}|AKIA[0-9A-Z]{16}|AGPA[0-9A-Z]{16}|AIDA[0-9A-Z]{16}|AROA[0-9A-Z]{16}|AIPA[0-9A-Z]{16}|ANPA[0-9A-Z]{16}|ANVA[0-9A-Z]{16}|ASIA[0-9A-Z]{16})/g,
      title: "AWS API Key",
    },
    {
      regex: /(xox[pborsa]-[0-9]{12}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32})/g,
      title: "Slack Token",
    }
```

Screenshot:

![Secret Sniffer](https://i.imgur.com/j1n3jAY.png)
