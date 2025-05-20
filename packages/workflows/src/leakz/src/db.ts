import { Kind } from "./types";

export default {
  [Kind.secret]: [
    {
      pattern: {
        name: "AWS API Gateway",
        regex: "[0-9a-z]+.execute-api.[0-9a-z._-]+.amazonaws.com",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "AWS API Key",
        regex: "AKIA[0-9A-Z]{16}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "AWS ARN",
        regex: "arn:aws:[a-z0-9-]+:[a-z]{2}-[a-z]+-[0-9]+:[0-9]+:.+",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "AWS Access Key ID Value",
        regex: "(A3T[A-Z0-9]|AKIA|AGPA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "AWS AppSync GraphQL Key",
        regex: "da2-[a-z0-9]{26}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "AWS EC2 External",
        regex: "ec2-[0-9a-z._-]+.compute(-1)?.amazonaws.com",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "AWS EC2 Internal",
        regex: "[0-9a-z._-]+.compute(-1)?.internal",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "AWS ELB",
        regex: "[0-9a-z._-]+.elb.amazonaws.com",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "AWS ElasticCache",
        regex: "[0-9a-z._-]+.cache.amazonaws.com",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "AWS MWS ID",
        regex:
          "mzn\\.mws\\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "AWS MWS key",
        regex:
          "amzn\\.mws\\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "AWS RDS",
        regex: "[0-9a-z._-]+.rds.amazonaws.com",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "AWS S3 Bucket",
        regex: "s3://[0-9a-z._/-]+",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "AWS client ID",
        regex:
          "(A3T[A-Z0-9]|AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "AWS cred file info",
        regex: "(aws_access_key_id|aws_secret_access_key)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Abbysale",
        regex: "(?:abbysale).{0,40}\\b([a-z0-9A-Z]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Abstract",
        regex: "(?:abstract).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Abuseipdb",
        regex: "(?:abuseipdb).{0,40}\\b([a-z0-9]{80})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Accuweather",
        regex: "(?:accuweather).{0,40}([a-z0-9A-Z\\%]{35})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Adafruitio",
        regex: "\\b(aio\\_[a-zA-Z0-9]{28})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Adobeio - 1",
        regex: "(?:adobe).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Adzuna - 1",
        regex: "(?:adzuna).{0,40}\\b([a-z0-9]{8})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Adzuna - 2",
        regex: "(?:adzuna).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Aeroworkflow - 1",
        regex: "(?:aeroworkflow).{0,40}\\b([0-9]{1,})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Aeroworkflow - 2",
        regex: "(?:aeroworkflow).{0,40}\\b([a-zA-Z0-9^!]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Agora",
        regex: "(?:agora).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Airbrakeprojectkey - 1",
        regex: "(?:airbrake).{0,40}\\b([0-9]{6})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Airbrakeprojectkey - 2",
        regex: "(?:airbrake).{0,40}\\b([a-zA-Z-0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Airbrakeuserkey",
        regex: "(?:airbrake).{0,40}\\b([a-zA-Z-0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Airship",
        regex: "(?:airship).{0,40}\\b([0-9Aa-zA-Z]{91})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Airvisual",
        regex: "(?:airvisual).{0,40}\\b([a-z0-9-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Alconost",
        regex: "(?:alconost).{0,40}\\b([0-9Aa-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Alegra - 1",
        regex: "(?:alegra).{0,40}\\b([a-z0-9-]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Alegra - 2",
        regex: "(?:alegra).{0,40}\\b([a-zA-Z0-9.-@]{25,30})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Aletheiaapi",
        regex: "(?:aletheiaapi).{0,40}\\b([A-Z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Algoliaadminkey - 1",
        regex: "(?:algolia).{0,40}\\b([A-Z0-9]{10})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Algoliaadminkey - 2",
        regex: "(?:algolia).{0,40}\\b([a-zA-Z0-9]{32})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Alibaba - 2",
        regex: "\\b(LTAI[a-zA-Z0-9]{17,21})[\\\"' ;\\s]*",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Alienvault",
        regex: "(?:alienvault).{0,40}\\b([a-z0-9]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Allsports",
        regex: "(?:allsports).{0,40}\\b([0-9a-z]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Amadeus - 1",
        regex: "(?:amadeus).{0,40}\\b([0-9A-Za-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Amadeus - 2",
        regex: "(?:amadeus).{0,40}\\b([0-9A-Za-z]{16})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Amazon SNS Topic",
        regex: "arn:aws:sns:[a-z0-9\\-]+:[0-9]+:[A-Za-z0-9\\-_]+",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Ambee",
        regex: "(?:ambee).{0,40}\\b([0-9a-f]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Amplitudeapikey",
        regex: "(?:amplitude).{0,40}\\b([a-f0-9]{32})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Apacta",
        regex: "(?:apacta).{0,40}\\b([a-z0-9-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Api2cart",
        regex: "(?:api2cart).{0,40}\\b([0-9a-f]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Apideck - 1",
        regex: "\\b(sk_live_[a-z0-9A-Z-]{93})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Apideck - 2",
        regex: "(?:apideck).{0,40}\\b([a-z0-9A-Z]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Apiflash - 1",
        regex: "(?:apiflash).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Apiflash - 2",
        regex: "(?:apiflash).{0,40}\\b([a-zA-Z0-9\\S]{21,30})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Apifonica",
        regex:
          "(?:apifonica).{0,40}\\b([0-9a-z]{11}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Apify",
        regex: "\\b(apify\\_api\\_[a-zA-Z-0-9]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Apimatic - 1",
        regex: "(?:apimatic).{0,40}\\b([a-z0-9-\\S]{8,32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Apimatic - 2",
        regex:
          "(?:apimatic).{0,40}\\b([a-zA-Z0-9]{3,20}@[a-zA-Z0-9]{2,12}.[a-zA-Z0-9]{2,5})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Apiscience",
        regex: "(?:apiscience).{0,40}\\b([a-bA-Z0-9\\S]{22})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Apollo",
        regex: "(?:apollo).{0,40}\\b([a-zA-Z0-9]{22})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Appcues - 1",
        regex: "(?:appcues).{0,40}\\b([0-9]{5})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Appcues - 2",
        regex: "(?:appcues).{0,40}\\b([a-z0-9-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Appcues - 3",
        regex: "(?:appcues).{0,40}\\b([a-z0-9-]{39})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Appfollow",
        regex: "(?:appfollow).{0,40}\\b([0-9A-Za-z]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Appsynergy",
        regex: "(?:appsynergy).{0,40}\\b([a-z0-9]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Apptivo - 1",
        regex: "(?:apptivo).{0,40}\\b([a-z0-9-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Apptivo - 2",
        regex: "(?:apptivo).{0,40}\\b([a-zA-Z0-9-]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Artifactory - 2",
        regex:
          "\\b([A-Za-z0-9](?:[A-Za-z0-9\\-]{0,61}[A-Za-z0-9])\\.jfrog\\.io)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Artifactory API Token",
        regex: '(?:\\s|=|:|"|^)AKC[a-zA-Z0-9]{10,}',
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Artifactory Password",
        regex: '(?:\\s|=|:|"|^)AP[\\dABCDEF][a-zA-Z0-9]{8,}',
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Artsy - 1",
        regex: "(?:artsy).{0,40}\\b([0-9a-zA-Z]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Artsy - 2",
        regex: "(?:artsy).{0,40}\\b([0-9a-zA-Z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Asanaoauth",
        regex: "(?:asana).{0,40}\\b([a-z\\/:0-9]{51})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Asanapersonalaccesstoken",
        regex:
          "(?:asana).{0,40}\\b([0-9]{1,}\\/[0-9]{16,}:[A-Za-z0-9]{32,})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Assemblyai",
        regex: "(?:assemblyai).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Asymmetric Private Key",
        regex:
          "-----BEGIN ((EC|PGP|DSA|RSA|OPENSSH) )?PRIVATE KEY( BLOCK)?-----",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Audd",
        regex: "(?:audd).{0,40}\\b([a-z0-9-]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Auth0managementapitoken",
        regex: "(?:auth0).{0,40}\\b(ey[a-zA-Z0-9._-]+)\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Auth0oauth - 1",
        regex: "(?:auth0).{0,40}\\b([a-zA-Z0-9_-]{32,60})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Autodesk - 1",
        regex: "(?:autodesk).{0,40}\\b([0-9A-Za-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Autodesk - 2",
        regex: "(?:autodesk).{0,40}\\b([0-9A-Za-z]{16})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Autoklose",
        regex: "(?:autoklose).{0,40}\\b([a-zA-Z0-9-]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Autopilot",
        regex: "(?:autopilot).{0,40}\\b([0-9a-f]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Avazapersonalaccesstoken",
        regex: "(?:avaza).{0,40}\\b([0-9]+-[0-9a-f]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Aviationstack",
        regex: "(?:aviationstack).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Aws - 1",
        regex: "\\b((?:AKIA|ABIA|ACCA|ASIA)[0-9A-Z]{16})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Axonaut",
        regex: "(?:axonaut).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Aylien - 1",
        regex: "(?:aylien).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Aylien - 2",
        regex: "(?:aylien).{0,40}\\b([a-z0-9]{8})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Ayrshare",
        regex:
          "(?:ayrshare).{0,40}\\b([A-Z]{7}-[A-Z0-9]{7}-[A-Z0-9]{7}-[A-Z0-9]{7})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Bannerbear",
        regex: "(?:bannerbear).{0,40}\\b([0-9a-zA-Z]{22}tt)\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Baremetrics",
        regex: "(?:baremetrics).{0,40}\\b([a-zA-Z0-9_]{25})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Baseapiio",
        regex:
          "(?:baseapi|base-api).{0,40}\\b([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Beamer",
        regex: "(?:beamer).{0,40}\\b([a-zA-Z0-9_+/]{45}=)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Bearer token",
        regex: "(bearer).+",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Beebole",
        regex: "(?:beebole).{0,40}\\b([0-9a-z]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Besttime",
        regex: "(?:besttime).{0,40}\\b([0-9A-Za-z_]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Billomat - 1",
        regex: "(?:billomat).{0,40}\\b([0-9a-z]{1,})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Billomat - 2",
        regex: "(?:billomat).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Bitbar",
        regex: "(?:bitbar).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Bitcoinaverage",
        regex: "(?:bitcoinaverage).{0,40}\\b([a-zA-Z0-9]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Bitfinex",
        regex: "(?:bitfinex).{0,40}\\b([A-Za-z0-9_-]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Bitly Secret Key",
        regex: "R_[0-9a-f]{32}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Bitlyaccesstoken",
        regex: "(?:bitly).{0,40}\\b([a-zA-Z-0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Bitmex - 1",
        regex:
          "(?:bitmex).{0,40}([ \\r\\n]{1}[0-9a-zA-Z\\-\\_]{24}[ \\r\\n]{1})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Bitmex - 2",
        regex:
          "(?:bitmex).{0,40}([ \\r\\n]{1}[0-9a-zA-Z\\-\\_]{48}[ \\r\\n]{1})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Blablabus",
        regex: "(?:blablabus).{0,40}\\b([0-9A-Za-z]{22})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Blazemeter",
        regex:
          "(?:blazemeter|runscope).{0,40}\\b([0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Blitapp",
        regex: "(?:blitapp).{0,40}\\b([a-zA-Z0-9_-]{39})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Blogger",
        regex: "(?:blogger).{0,40}\\b([0-9A-Za-z-]{39})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Bombbomb",
        regex: "(?:bombbomb).{0,40}\\b([a-zA-Z0-9-._]{704})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Boostnote",
        regex: "(?:boostnote).{0,40}\\b([0-9a-f]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Borgbase",
        regex: "(?:borgbase).{0,40}\\b([a-zA-Z0-9/_.-]{148,152})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Braintree API Key",
        regex: "access_token$production$[0-9a-z]{16}$[0-9a-f]{32}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Brandfetch",
        regex: "(?:brandfetch).{0,40}\\b([0-9A-Za-z]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Browshot",
        regex: "(?:browshot).{0,40}\\b([a-zA-Z-0-9]{28})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Buddyns",
        regex: "(?:buddyns).{0,40}\\b([0-9a-z]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Bugherd",
        regex: "(?:bugherd).{0,40}\\b([0-9a-z]{22})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Bugsnag",
        regex:
          "(?:bugsnag).{0,40}\\b([0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Buildkite",
        regex: "(?:buildkite).{0,40}\\b([a-z0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Bulbul",
        regex: "(?:bulbul).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Buttercms",
        regex: "(?:buttercms).{0,40}\\b([a-z0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Caflou",
        regex: "(?:caflou).{0,40}\\b([a-bA-Z0-9\\S]{155})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Calendarific",
        regex: "(?:calendarific).{0,40}\\b([a-z0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Calendlyapikey",
        regex:
          "(?:calendly).{0,40}\\b([a-zA-Z-0-9]{20}.[a-zA-Z-0-9]{171}.[a-zA-Z-0-9_]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Calorieninja",
        regex: "(?:calorieninja).{0,40}\\b([0-9A-Za-z]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Campayn",
        regex: "(?:campayn).{0,40}\\b([a-z0-9]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Cannyio",
        regex:
          "(?:canny).{0,40}\\b([a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[0-9]{4}-[a-z0-9]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Capsulecrm",
        regex: "(?:capsulecrm).{0,40}\\b([a-zA-Z0-9-._+=]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Captaindata - 1",
        regex:
          "(?:captaindata).{0,40}\\b([0-9a-f]{8}\\-[0-9a-f]{4}\\-[0-9a-f]{4}\\-[0-9a-f]{4}\\-[0-9a-f]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Captaindata - 2",
        regex: "(?:captaindata).{0,40}\\b([0-9a-f]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Carboninterface",
        regex: "(?:carboninterface).{0,40}\\b([a-zA-Z0-9]{21})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Cashboard - 1",
        regex:
          "(?:cashboard).{0,40}\\b([0-9A-Z]{3}-[0-9A-Z]{3}-[0-9A-Z]{3}-[0-9A-Z]{3})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Cashboard - 2",
        regex: "(?:cashboard).{0,40}\\b([0-9a-z]{1,})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Caspio - 1",
        regex: "(?:caspio).{0,40}\\b([a-z0-9]{8})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Caspio - 2",
        regex: "(?:caspio).{0,40}\\b([a-z0-9]{50})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Censys - 1",
        regex: "(?:censys).{0,40}\\b([a-zA-Z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Censys - 2",
        regex: "(?:censys).{0,40}\\b([a-z0-9-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Centralstationcrm",
        regex: "(?:centralstation).{0,40}\\b([a-z0-9]{30})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Cexio - 1",
        regex: "(?:cexio|cex.io).{0,40}\\b([a-z]{2}[0-9]{9})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Cexio - 2",
        regex: "(?:cexio|cex.io).{0,40}\\b([0-9A-Za-z]{24,27})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Chatbot",
        regex: "(?:chatbot).{0,40}\\b([a-zA-Z0-9_]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Chatfule",
        regex: "(?:chatfuel).{0,40}\\b([a-zA-Z0-9]{128})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Checio",
        regex: "(?:checio).{0,40}\\b(pk_[a-z0-9]{45})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Checklyhq",
        regex: "(?:checklyhq).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Checkout - 1",
        regex:
          "(?:checkout).{0,40}\\b((sk_|sk_test_)[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Checkout - 2",
        regex: "(?:checkout).{0,40}\\b(cus_[0-9a-zA-Z]{26})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Checkvist - 1",
        regex:
          "(?:checkvist).{0,40}\\b([\\w\\.-]+@[\\w-]+\\.[\\w\\.-]{2,5})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Checkvist - 2",
        regex: "(?:checkvist).{0,40}\\b([0-9a-zA-Z]{14})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Cicero",
        regex: "(?:cicero).{0,40}\\b([0-9a-z]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Circleci",
        regex: "(?:circle).{0,40}([a-fA-F0-9]{40})",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Clearbit",
        regex: "(?:clearbit).{0,40}\\b([0-9a-z_]{35})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Clickhelp - 1",
        regex: "\\b([0-9A-Za-z]{3,20}.try.clickhelp.co)\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Clickhelp - 2",
        regex: "(?:clickhelp).{0,40}\\b([0-9A-Za-z]{24})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Clicksendsms - 2",
        regex:
          "(?:sms).{0,40}\\b([a-zA-Z0-9]{3,20}@[a-zA-Z0-9]{2,12}.[a-zA-Z0-9]{2,5})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Clickuppersonaltoken",
        regex: "(?:clickup).{0,40}\\b(pk_[0-9]{8}_[0-9A-Z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Cliengo",
        regex:
          "(?:cliengo).{0,40}\\b([0-9a-f]{8}\\-[0-9a-f]{4}\\-[0-9a-f]{4}\\-[0-9a-f]{4}\\-[0-9a-f]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Clinchpad",
        regex: "(?:clinchpad).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Clockify",
        regex: "(?:clockify).{0,40}\\b([a-zA-Z0-9]{48})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Clockworksms - 1",
        regex: "(?:clockwork|textanywhere).{0,40}\\b([0-9a-zA-Z]{24})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Clockworksms - 2",
        regex: "(?:clockwork|textanywhere).{0,40}\\b([0-9]{5})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Closecrm",
        regex: "\\b(api_[a-z0-9A-Z.]{45})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Cloudelements - 1",
        regex: "(?:cloudelements).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Cloudelements - 2",
        regex: "(?:cloudelements).{0,40}\\b([a-zA-Z0-9]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Cloudflareapitoken",
        regex: "(?:cloudflare).{0,40}\\b([A-Za-z0-9_-]{40})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Cloudflarecakey",
        regex: "(?:cloudflare).{0,40}\\b(v[A-Za-z0-9._-]{173,})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Cloudimage",
        regex: "(?:cloudimage).{0,40}\\b([a-z0-9_]{30})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Cloudinary Credentials",
        regex: "cloudinary://[0-9]+:[A-Za-z0-9\\-_\\.]+@[A-Za-z0-9\\-_\\.]+",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Cloudmersive",
        regex: "(?:cloudmersive).{0,40}\\b([a-z0-9-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Cloudplan",
        regex: "(?:cloudplan).{0,40}\\b([A-Z0-9-]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Cloverly",
        regex: "(?:cloverly).{0,40}\\b([a-z0-9:_]{28})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Cloze - 1",
        regex: "(?:cloze).{0,40}\\b([0-9a-f]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Cloze - 2",
        regex: "(?:cloze).{0,40}\\b([\\w\\.-]+@[\\w-]+\\.[\\w\\.-]{2,5})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Clustdoc",
        regex: "(?:clustdoc).{0,40}\\b([0-9a-zA-Z]{60})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Codacy",
        regex: "(?:codacy).{0,40}\\b([0-9A-Za-z]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Coinapi",
        regex: "(?:coinapi).{0,40}\\b([A-Z0-9-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Coinbase",
        regex: "(?:coinbase).{0,40}\\b([a-zA-Z-0-9]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Coinlayer",
        regex: "(?:coinlayer).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Coinlib",
        regex: "(?:coinlib).{0,40}\\b([a-z0-9]{16})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Column",
        regex: "(?:column).{0,40}\\b((?:test|live)_[a-zA-Z0-9]{27})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Commercejs",
        regex: "(?:commercejs).{0,40}\\b([a-z0-9_]{48})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Commodities",
        regex: "(?:commodities).{0,40}\\b([a-zA-Z0-9]{60})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Companyhub - 1",
        regex: "(?:companyhub).{0,40}\\b([0-9a-zA-Z]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Companyhub - 2",
        regex: "(?:companyhub).{0,40}\\b([a-zA-Z0-9$%^=-]{4,32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Confluent - 1",
        regex: "(?:confluent).{0,40}\\b([a-zA-Z-0-9]{16})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Confluent - 2",
        regex: "(?:confluent).{0,40}\\b([a-zA-Z-0-9]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Convertkit",
        regex: "(?:convertkit).{0,40}\\b([a-z0-9A-Z_]{22})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Convier",
        regex: "(?:convier).{0,40}\\b([0-9]{2}\\|[a-zA-Z0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Copper - 2",
        regex: "(?:copper).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Countrylayer",
        regex: "(?:countrylayer).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Courier",
        regex:
          "(?:courier).{0,40}\\b(pk\\_[a-zA-Z0-9]{1,}\\_[a-zA-Z0-9]{28})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Coveralls",
        regex: "(?:coveralls).{0,40}\\b([a-zA-Z0-9-]{37})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Crowdin",
        regex: "(?:crowdin).{0,40}\\b([0-9A-Za-z]{80})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Cryptocompare",
        regex: "(?:cryptocompare).{0,40}\\b([a-z-0-9]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Currencycloud - 1",
        regex: "(?:currencycloud).{0,40}\\b([0-9a-z]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Currencyfreaks",
        regex: "(?:currencyfreaks).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Currencylayer",
        regex: "(?:currencylayer).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Currencyscoop",
        regex: "(?:currencyscoop).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Currentsapi",
        regex: "(?:currentsapi).{0,40}\\b([a-zA-Z0-9\\S]{48})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Customerguru - 1",
        regex: "(?:guru).{0,40}\\b([a-z0-9A-Z]{50})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Customerguru - 2",
        regex: "(?:guru).{0,40}\\b([a-z0-9A-Z]{30})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Customerio",
        regex: "(?:customer).{0,40}\\b([a-z0-9A-Z]{20})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "D7network",
        regex: "(?:d7network).{0,40}\\b([a-zA-Z0-9\\W\\S]{23}\\=)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Dailyco",
        regex: "(?:daily).{0,40}\\b([0-9a-f]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Dandelion",
        regex: "(?:dandelion).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Databricks",
        regex: "dapi[a-f0-9]{32}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Datadogtoken - 1",
        regex: "(?:datadog).{0,40}\\b([a-zA-Z-0-9]{32})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Datadogtoken - 2",
        regex: "(?:datadog).{0,40}\\b([a-zA-Z-0-9]{40})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Datafire",
        regex: "(?:datafire).{0,40}\\b([a-z0-9\\S]{175,190})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Datagov",
        regex: "(?:data.gov).{0,40}\\b([a-zA-Z0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Debounce",
        regex: "(?:debounce).{0,40}\\b([a-zA-Z0-9]{13})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Deepai",
        regex: "(?:deepai).{0,40}\\b([a-z0-9-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Deepgram",
        regex: "(?:deepgram).{0,40}\\b([0-9a-z]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Delighted",
        regex: "(?:delighted).{0,40}\\b([a-z0-9A-Z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Deputy - 1",
        regex: "\\b([0-9a-z]{1,}.as.deputy.com)\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Deputy - 2",
        regex: "(?:deputy).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Detectlanguage",
        regex: "(?:detectlanguage).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Dfuse",
        regex: "\\b(web\\_[0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Diffbot",
        regex: "(?:diffbot).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Digitaloceantoken",
        regex: "(?:digitalocean).{0,40}\\b([A-Za-z0-9_-]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Discord Webhook",
        regex: "https://discordapp\\.com/api/webhooks/[0-9]+/[A-Za-z0-9\\-]+",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Discordbottoken - 1",
        regex:
          "(?:discord).{0,40}\\b([A-Za-z0-9_-]{24}\\.[A-Za-z0-9_-]{6}\\.[A-Za-z0-9_-]{27})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Discordbottoken - 2",
        regex: "(?:discord).{0,40}\\b([0-9]{17})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Discordwebhook",
        regex:
          "(https:\\/\\/discord.com\\/api\\/webhooks\\/[0-9]{18}\\/[0-9a-zA-Z-]{68})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Ditto",
        regex:
          "(?:ditto).{0,40}\\b([a-z0-9]{8}\\-[a-z0-9]{4}\\-[a-z0-9]{4}\\-[a-z0-9]{4}\\-[a-z0-9]{12}\\.[a-z0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Dnscheck - 1",
        regex: "(?:dnscheck).{0,40}\\b([a-z0-9A-Z-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Dnscheck - 2",
        regex: "(?:dnscheck).{0,40}\\b([a-z0-9A-Z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Documo",
        regex: "\\b(ey[a-zA-Z0-9]{34}.ey[a-zA-Z0-9]{154}.[a-zA-Z0-9_-]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Doppler",
        regex: "\\b(dp\\.pt\\.[a-zA-Z0-9]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Dotmailer - 1",
        regex:
          "(?:dotmailer).{0,40}\\b(apiuser-[a-z0-9]{12}@apiconnector.com)\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Dotmailer - 2",
        regex: "(?:dotmailer).{0,40}\\b([a-zA-Z0-9\\S]{8,24})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Dovico",
        regex: "(?:dovico).{0,40}\\b([0-9a-z]{32}\\.[0-9a-z]{1,}\\b)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Dronahq",
        regex: "(?:dronahq).{0,40}\\b([a-z0-9]{50})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Droneci",
        regex: "(?:droneci).{0,40}\\b([a-zA-Z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Dropbox",
        regex: "\\b(sl\\.[A-Za-z0-9\\-\\_]{130,140})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Dwolla",
        regex: "(?:dwolla).{0,40}\\b([a-zA-Z-0-9]{50})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Dynalist",
        regex: "(?:dynalist).{0,40}\\b([a-zA-Z0-9-_]{128})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Dynatrace token",
        regex: "dt0[a-zA-Z]{1}[0-9]{2}\\.[A-Z0-9]{24}\\.[A-Z0-9]{64}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Dyspatch",
        regex: "(?:dyspatch).{0,40}\\b([A-Z0-9]{52})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "EC",
        regex: "-----BEGIN EC PRIVATE KEY-----",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Eagleeyenetworks - 1",
        regex:
          "(?:eagleeyenetworks).{0,40}\\b([a-zA-Z0-9]{3,20}@[a-zA-Z0-9]{2,12}.[a-zA-Z0-9]{2,5})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Eagleeyenetworks - 2",
        regex: "(?:eagleeyenetworks).{0,40}\\b([a-zA-Z0-9]{15})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Easyinsight - 1",
        regex: "(?:easyinsight|easy-insight).{0,40}\\b([a-zA-Z0-9]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Easyinsight - 2",
        regex: "(?:easyinsight|easy-insight).{0,40}\\b([0-9Aa-zA-Z]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Edamam - 1",
        regex: "(?:edamam).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Edamam - 2",
        regex: "(?:edamam).{0,40}\\b([0-9a-z]{8})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Edenai",
        regex:
          "(?:edenai).{0,40}\\b([a-zA-Z0-9]{36}.[a-zA-Z0-9]{92}.[a-zA-Z0-9_]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Eightxeight - 1",
        regex: "(?:8x8).{0,40}\\b([a-zA-Z0-9_]{18,30})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Eightxeight - 2",
        regex: "(?:8x8).{0,40}\\b([a-zA-Z0-9]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Elasticemail",
        regex: "(?:elastic).{0,40}\\b([A-Za-z0-9_-]{96})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Enablex - 1",
        regex: "(?:enablex).{0,40}\\b([a-zA-Z0-9]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Enablex - 2",
        regex: "(?:enablex).{0,40}\\b([a-z0-9]{24})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Enigma",
        regex: "(?:enigma).{0,40}\\b([a-zA-Z0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Ethplorer",
        regex: "(?:ethplorer).{0,40}\\b([a-z0-9A-Z-]{22})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Etsyapikey",
        regex: "(?:etsy).{0,40}\\b([a-zA-Z-0-9]{24})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Everhour",
        regex:
          "(?:everhour).{0,40}\\b([0-9Aa-f]{4}-[0-9a-f]{4}-[0-9a-f]{6}-[0-9a-f]{6}-[0-9a-f]{8})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Exchangerateapi",
        regex: "(?:exchangerate).{0,40}\\b([a-z0-9]{24})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Exchangeratesapi",
        regex: "(?:exchangerates).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "FCM Server Key",
        regex: "AAAA[a-zA-Z0-9_-]{7}:[a-zA-Z0-9_-]{140}",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "FCM_server_key",
        regex: "(AAAA[a-zA-Z0-9_-]{7}:[a-zA-Z0-9_-]{140})",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Facebook Access Token",
        regex: "EAACEdEose0cBA[0-9A-Za-z]+",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Facebook OAuth",
        regex: "[fF][aA][cC][eE][bB][oO][oO][kK].*['|\"][0-9a-f]{32}['|\"]",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Facebookoauth",
        regex: "(?:facebook).{0,40}\\b([A-Za-z0-9]{32})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Faceplusplus",
        regex: "(?:faceplusplus).{0,40}\\b([0-9a-zA-Z_-]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Fakejson",
        regex: "(?:fakejson).{0,40}\\b([a-zA-Z0-9]{22})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Fastforex",
        regex: "(?:fastforex).{0,40}\\b([a-z0-9-]{28})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Fastlypersonaltoken",
        regex: "(?:fastly).{0,40}\\b([A-Za-z0-9_-]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Feedier",
        regex: "(?:feedier).{0,40}\\b([a-z0-9A-Z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Fetchrss",
        regex: "(?:fetchrss).{0,40}\\b([0-9A-Za-z.]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Figmapersonalaccesstoken",
        regex:
          "(?:figma).{0,40}\\b([0-9]{6}-[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Fileio",
        regex: "(?:fileio).{0,40}\\b([A-Z0-9.-]{39})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Finage",
        regex: "\\b(API_KEY[0-9A-Z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Financialmodelingprep",
        regex: "(?:financialmodelingprep).{0,40}\\b([a-zA-Z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Findl",
        regex:
          "(?:findl).{0,40}\\b([a-z0-9]{8}\\-[a-z0-9]{4}\\-[a-z0-9]{4}\\-[a-z0-9]{4}\\-[a-z0-9]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Finnhub",
        regex: "(?:finnhub).{0,40}\\b([0-9a-z]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Firebase Database Detect - 1",
        regex: "[a-z0-9.-]+\\.firebaseio\\.com",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Firebase Database Detect - 2",
        regex: "[a-z0-9.-]+\\.firebaseapp\\.com",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Fixerio",
        regex: "(?:fixer).{0,40}\\b([A-Za-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Flatio",
        regex: "(?:flat).{0,40}\\b([0-9a-z]{128})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Fleetbase",
        regex: "\\b(flb_live_[0-9a-zA-Z]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Flickr",
        regex: "(?:flickr).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Flightapi",
        regex: "(?:flightapi).{0,40}\\b([a-z0-9]{24})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Flightstats - 1",
        regex: "(?:flightstats).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Flightstats - 2",
        regex: "(?:flightstats).{0,40}\\b([0-9a-z]{8})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Float",
        regex: "(?:float).{0,40}\\b([a-zA-Z0-9-._+=]{59,60})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Flowflu - 2",
        regex: "(?:flowflu).{0,40}\\b([a-zA-Z0-9]{51})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Flutterwave",
        regex: "\\b(FLWSECK-[0-9a-z]{32}-X)\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Fmfw - 1",
        regex: "(?:fmfw).{0,40}\\b([a-zA-Z0-9-]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Fmfw - 2",
        regex: "(?:fmfw).{0,40}\\b([a-zA-Z0-9_-]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Formbucket",
        regex:
          "(?:formbucket).{0,40}\\b([0-9A-Za-z]{1,}.[0-9A-Za-z]{1,}\\.[0-9A-Z-a-z\\-_]{1,})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Formio",
        regex:
          "(?:formio).{0,40}\\b(eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\\.[0-9A-Za-z]{310}\\.[0-9A-Z-a-z\\-_]{43}[ \\r\\n]{1})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Foursquare",
        regex: "(?:foursquare).{0,40}\\b([0-9A-Z]{48})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Frameio",
        regex: "\\b(fio-u-[0-9a-zA-Z_-]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Freshbooks - 1",
        regex: "(?:freshbooks).{0,40}\\b([0-9a-z]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Freshbooks - 2",
        regex: "(?:freshbooks).{0,40}\\b(https://www.[0-9A-Za-z_-]{1,}.com)\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Freshdesk - 1",
        regex: "(?:freshdesk).{0,40}\\b([0-9A-Za-z]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Freshdesk - 2",
        regex: "\\b([0-9a-z-]{1,}.freshdesk.com)\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Front",
        regex:
          "(?:front).{0,40}\\b([0-9a-zA-Z]{36}.[0-9a-zA-Z\\.\\-\\_]{188,244})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Fulcrum",
        regex: "(?:fulcrum).{0,40}\\b([a-z0-9]{80})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Fullstory",
        regex: "(?:fullstory).{0,40}\\b([a-zA-Z-0-9/+]{88})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Fusebill",
        regex: "(?:fusebill).{0,40}\\b([a-zA-Z0-9]{88})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Fxmarket",
        regex: "(?:fxmarket).{0,40}\\b([0-9Aa-zA-Z-_=]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Gcp",
        regex: "\\{[^{]+auth_provider_x509_cert_url[^}]+\\}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Geckoboard",
        regex: "(?:geckoboard).{0,40}\\b([a-zA-Z0-9]{44})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1376",
        regex: "jdbc:mysql(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1688",
        regex:
          "TOKEN[\\\\-|_|A-Z0-9]*(\\'|\\\")?(:|=)(\\'|\\\")?[\\\\-|_|A-Z0-9]{10}",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Generic - 1689",
        regex:
          "API[\\\\-|_|A-Z0-9]*(\\'|\\\")?(:|=)(\\'|\\\")?[\\\\-|_|A-Z0-9]{10}",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Generic - 1691",
        regex:
          "SECRET[\\\\-|_|A-Z0-9]*(\\'|\\\")?(:|=)(\\'|\\\")?[\\\\-|_|A-Z0-9]{10}",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Generic - 1692",
        regex:
          "AUTHORIZATION[\\\\-|_|A-Z0-9]*(\\'|\\\")?(:|=)(\\'|\\\")?[\\\\-|_|A-Z0-9]{10}",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Generic - 1693",
        regex:
          "PASSWORD[\\\\-|_|A-Z0-9]*(\\'|\\\")?(:|=)(\\'|\\\")?[\\\\-|_|A-Z0-9]{10}",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Generic - 1695",
        regex:
          "(A|a)(P|p)(Ii)[\\-|_|A-Za-z0-9]*(\\''|\")?( )*(:|=)( )*(\\''|\")?[0-9A-Za-z\\-_]+(\\''|\")?",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Generic - 1700",
        regex: "BEGIN OPENSSH PRIVATE KEY",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1701",
        regex: "BEGIN PRIVATE KEY",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1702",
        regex: "BEGIN RSA PRIVATE KEY",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1703",
        regex: "BEGIN DSA PRIVATE KEY",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1704",
        regex: "BEGIN EC PRIVATE KEY",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1705",
        regex: "BEGIN PGP PRIVATE KEY BLOCK",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1707",
        regex: "[a-z0-9.-]+\\.s3-[a-z0-9-]\\.amazonaws\\.com",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Generic - 1708",
        regex: "[a-z0-9.-]+\\.s3-website[.-](eu|ap|us|ca|sa|cn)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Generic - 1710",
        regex: "algolia_api_key",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1711",
        regex: "asana_access_token",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1713",
        regex: "azure_tenant",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1714",
        regex: "bitly_access_token",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1715",
        regex: "branchio_secret",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Generic - 1716",
        regex: "browserstack_access_key",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1717",
        regex: "buildkite_access_token",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1718",
        regex: "comcast_access_token",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1719",
        regex: "datadog_api_key",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1720",
        regex: "deviantart_secret",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1721",
        regex: "deviantart_access_token",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1722",
        regex: "dropbox_api_token",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1723",
        regex: "facebook_appsecret",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1724",
        regex: "facebook_access_token",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1725",
        regex: "firebase_custom_token",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1726",
        regex: "firebase_id_token",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1727",
        regex: "github_client",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1728",
        regex: "github_ssh_key",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1730",
        regex: "gitlab_private_token",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1731",
        regex: "google_cm",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Generic - 1732",
        regex: "google_maps_key",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Generic - 1733",
        regex: "heroku_api_key",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1734",
        regex: "instagram_access_token",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1735",
        regex: "mailchimp_api_key",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1736",
        regex: "mailgun_api_key",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1737",
        regex: "mailjet",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Generic - 1738",
        regex: "mapbox_access_token",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Generic - 1739",
        regex: "pagerduty_api_token",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1740",
        regex: "paypal_key_sb",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1741",
        regex: "paypal_key_live",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1742",
        regex: "paypal_token_sb",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1743",
        regex: "paypal_token_live",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1744",
        regex: "pendo_integration_key",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1745",
        regex: "salesforce_access_token",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1746",
        regex: "saucelabs_ukey",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1747",
        regex: "sendgrid_api_key",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1748",
        regex: "slack_api_token",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1749",
        regex: "slack_webhook",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Generic - 1750",
        regex: "square_secret",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Generic - 1751",
        regex: "square_auth_token",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1752",
        regex: "travisci_api_token",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1753",
        regex: "twilio_sid_token",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Generic - 1754",
        regex: "twitter_api_secret",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1755",
        regex: "twitter_bearer_token",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1756",
        regex: "spotify_access_token",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1757",
        regex: "stripe_key_live",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1758",
        regex: "wakatime_api_key",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1759",
        regex: "wompi_auth_bearer_sb",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1760",
        regex: "wompi_auth_bearer_live",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1761",
        regex: "wpengine_api_key",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1762",
        regex: "zapier_webhook",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Generic - 1763",
        regex: "zendesk_access_token",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1764",
        regex: "ssh-rsa",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Generic - 1765",
        regex: "s3-[a-z0-9-]+\\.amazonaws\\.com/[a-z0-9._-]+",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Generic Secret",
        regex: "[sS][eE][cC][rR][eE][tT].*['|\"][0-9a-zA-Z]{32,45}['|\"]",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Generic webhook secret",
        regex: "(webhook).+(secret|token|key).+",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Gengo",
        regex:
          "(?:gengo).{0,40}([ ]{0,1}[0-9a-zA-Z\\[\\]\\-\\(\\)\\{\\}|_^@$=~]{64}[ \\r\\n]{1})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Geoapify",
        regex: "(?:geoapify).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Geocode",
        regex: "(?:geocode).{0,40}\\b([a-z0-9]{28})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Geocodify",
        regex: "(?:geocodify).{0,40}\\b([0-9a-z]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Geocodio - 2",
        regex: "(?:geocod).{0,40}\\b([a-z0-9]{39})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Geoipifi",
        regex: "(?:ipifi).{0,40}\\b([a-z0-9A-Z_]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Getemail",
        regex: "(?:getemail).{0,40}\\b([a-zA-Z0-9-]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Getemails - 1",
        regex: "(?:getemails).{0,40}\\b([a-z0-9-]{26})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Getemails - 2",
        regex: "(?:getemails).{0,40}\\b([a-z0-9-]{18})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Getgeoapi",
        regex: "(?:getgeoapi).{0,40}\\b([0-9a-z]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Getgist",
        regex: "(?:getgist).{0,40}\\b([a-z0-9A-Z+=]{68})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Getsandbox - 1",
        regex: "(?:getsandbox).{0,40}\\b([a-z0-9-]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Getsandbox - 2",
        regex: "(?:getsandbox).{0,40}\\b([a-z0-9-]{15,30})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "GitHub",
        regex: "[gG][iI][tT][hH][uU][bB].*['|\"][0-9a-zA-Z]{35,40}['|\"]",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Github - 2",
        regex: "\\b((?:ghp|gho|ghu|ghs|ghr)_[a-zA-Z0-9]{36,255}\\b)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Github App Token",
        regex: "(ghu|ghs)_[0-9a-zA-Z]{36}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Github OAuth Access Token",
        regex: "gho_[0-9a-zA-Z]{36}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Github Personal Access Token",
        regex: "ghp_[0-9a-zA-Z]{36}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Github Refresh Token",
        regex: "ghr_[0-9a-zA-Z]{76}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Github_old",
        regex: "(?:github)[^\\.].{0,40}[ =:'\"]+([a-f0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Githubapp - 1",
        regex: "(?:github).{0,40}\\b([0-9]{6})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Githubapp - 2",
        regex:
          "(?:github).{0,40}(-----BEGIN RSA PRIVATE KEY-----\\s[A-Za-z0-9+\\/\\s]*\\s-----END RSA PRIVATE KEY-----)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Gitlab",
        regex: "(?:gitlab).{0,40}\\b([a-zA-Z0-9\\-=_]{20,22})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Gitlabv2",
        regex: "\\b(glpat-[a-zA-Z0-9\\-=_]{20,22})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Gitter",
        regex: "(?:gitter).{0,40}\\b([a-z0-9-]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Glassnode",
        regex: "(?:glassnode).{0,40}\\b([0-9A-Za-z]{27})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Gocanvas - 1",
        regex: "(?:gocanvas).{0,40}\\b([0-9A-Za-z/+]{43}=[ \\r\\n]{1})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Gocanvas - 2",
        regex: "(?:gocanvas).{0,40}\\b([\\w\\.-]+@[\\w-]+\\.[\\w\\.-]{2,5})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Gocardless",
        regex: "\\b(live_[0-9A-Za-z\\_\\-]{40}[ \"'\\r\\n]{1})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Goodday",
        regex: "(?:goodday).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Google (GCP) Service Account",
        regex: '"type": "service_account"',
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Google API Key",
        regex: "AIza[0-9a-z-_]{35}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Google Calendar URI",
        regex:
          "https://www\\.google\\.com/calendar/embed\\?src=[A-Za-z0-9%@&;=\\-_\\./]+",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Google OAuth Access Token",
        regex: "ya29\\.[0-9A-Za-z\\-_]+",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Graphcms - 1",
        regex: "(?:graph).{0,40}\\b([a-z0-9]{25})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Graphcms - 2",
        regex:
          "\\b(ey[a-zA-Z0-9]{73}.ey[a-zA-Z0-9]{365}.[a-zA-Z0-9_-]{683})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Graphhopper",
        regex: "(?:graphhopper).{0,40}\\b([a-z0-9-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Groovehq",
        regex: "(?:groove).{0,40}\\b([a-z0-9A-Z]{64})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Guru - 1",
        regex:
          "(?:guru).{0,40}\\b([a-zA-Z0-9]{3,20}@[a-zA-Z0-9]{2,12}.[a-zA-Z0-9]{2,5})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Guru - 2",
        regex:
          "(?:guru).{0,40}\\b([a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Gyazo",
        regex: "(?:gyazo).{0,40}\\b([0-9A-Za-z-]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Happi",
        regex: "(?:happi).{0,40}\\b([a-zA-Z0-9]{56})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Happyscribe",
        regex: "(?:happyscribe).{0,40}\\b([0-9a-zA-Z]{24})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Harvest - 1",
        regex: "(?:harvest).{0,40}\\b([a-z0-9A-Z._]{97})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Harvest - 2",
        regex: "(?:harvest).{0,40}\\b([0-9]{4,9})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Hellosign",
        regex: "(?:hellosign).{0,40}\\b([a-zA-Z-0-9/+]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Helpcrunch",
        regex: "(?:helpcrunch).{0,40}\\b([a-zA-Z-0-9+/=]{328})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Helpscout",
        regex: "(?:helpscout).{0,40}\\b([A-Za-z0-9]{56})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Hereapi",
        regex: "(?:hereapi).{0,40}\\b([a-zA-Z0-9\\S]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Heroku",
        regex:
          "(?:heroku).{0,40}\\b([0-9Aa-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Hive - 1",
        regex: "(?:hive).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Hive - 2",
        regex: "(?:hive).{0,40}\\b([0-9A-Za-z]{17})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Hiveage",
        regex: "(?:hiveage).{0,40}\\b([0-9A-Za-z\\_\\-]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Holidayapi",
        regex: "(?:holidayapi).{0,40}\\b([a-z0-9-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Host",
        regex: "(?:host).{0,40}\\b([a-z0-9]{14})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Html2pdf",
        regex: "(?:html2pdf).{0,40}\\b([a-zA-Z0-9]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Hubspotapikey",
        regex:
          "(?:hubspot).{0,40}\\b([A-Za-z0-9]{8}\\-[A-Za-z0-9]{4}\\-[A-Za-z0-9]{4}\\-[A-Za-z0-9]{4}\\-[A-Za-z0-9]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Humanity",
        regex: "(?:humanity).{0,40}\\b([0-9a-z]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Hunter",
        regex: "(?:hunter).{0,40}\\b([a-z0-9_-]{40})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Hypertrack - 1",
        regex: "(?:hypertrack).{0,40}\\b([0-9a-zA-Z\\_\\-]{54})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Hypertrack - 2",
        regex: "(?:hypertrack).{0,40}\\b([0-9a-zA-Z\\_\\-]{27})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Ibmclouduserkey",
        regex: "(?:ibm).{0,40}\\b([A-Za-z0-9_-]{44})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Iconfinder",
        regex: "(?:iconfinder).{0,40}\\b([a-zA-Z0-9]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Iexcloud",
        regex: "(?:iexcloud).{0,40}\\b([a-z0-9_]{35})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Imagekit",
        regex: "(?:imagekit).{0,40}\\b([a-zA-Z0-9_=]{36})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Imagga",
        regex: "(?:imagga).{0,40}\\b([a-z0-9A-Z=]{72})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Impala",
        regex: "(?:impala).{0,40}\\b([0-9A-Za-z_]{46})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Insightly",
        regex: "(?:insightly).{0,40}\\b([a-z0-9-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Integromat",
        regex: "(?:integromat).{0,40}\\b([a-z0-9-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Intercom",
        regex: "(?:intercom).{0,40}\\b([a-zA-Z0-9\\W\\S]{59}\\=)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Intrinio",
        regex: "(?:intrinio).{0,40}\\b([a-zA-Z0-9]{44})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Invoiceocean - 1",
        regex: "(?:invoiceocean).{0,40}\\b([0-9A-Za-z]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Invoiceocean - 2",
        regex: "\\b([0-9a-z]{1,}.invoiceocean.com)\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Ipapi",
        regex: "(?:ipapi).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Ipgeolocation",
        regex: "(?:ipgeolocation).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Ipify",
        regex: "(?:ipify).{0,40}\\b([a-zA-Z0-9_-]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Ipinfodb",
        regex: "(?:ipinfodb).{0,40}\\b([a-z0-9]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Ipquality",
        regex: "(?:ipquality).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Ipstack",
        regex: "(?:ipstack).{0,40}\\b([a-fA-f0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "JDBC Connection String",
        regex: "jdbc:[a-z:]+://[A-Za-z0-9\\.\\-_:;=/@?,&]+",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Jiratoken - 1",
        regex: "(?:jira).{0,40}\\b([a-zA-Z-0-9]{24})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Jiratoken - 2",
        regex:
          "(?:jira).{0,40}\\b([a-zA-Z-0-9]{5,24}\\@[a-zA-Z-0-9]{3,16}\\.com)\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Jiratoken - 3",
        regex:
          "(?:jira).{0,40}\\b([a-zA-Z-0-9]{5,24}\\.[a-zA-Z-0-9]{3,16}\\.[a-zA-Z-0-9]{3,16})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Jotform",
        regex: "(?:jotform).{0,40}\\b([0-9Aa-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Jumpcloud",
        regex: "(?:jumpcloud).{0,40}\\b([a-zA-Z0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Juro",
        regex: "(?:juro).{0,40}\\b([a-zA-Z0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Kanban - 1",
        regex: "(?:kanban).{0,40}\\b([0-9A-Z]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Kanban - 2",
        regex: "\\b([0-9a-z]{1,}.kanbantool.com)\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Karmacrm",
        regex: "(?:karma).{0,40}\\b([a-zA-Z0-9]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Keenio - 1",
        regex: "(?:keen).{0,40}\\b([0-9a-z]{24})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Keenio - 2",
        regex: "(?:keen).{0,40}\\b([0-9A-Z]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Kickbox",
        regex: "(?:kickbox).{0,40}\\b([a-zA-Z0-9_]+[a-zA-Z0-9]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Klipfolio",
        regex: "(?:klipfolio).{0,40}\\b([0-9a-f]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Kontent",
        regex: "(?:kontent).{0,40}\\b([a-z0-9-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Kraken - 1",
        regex: "(?:kraken).{0,40}\\b([0-9A-Za-z\\/\\+=]{56}[ \"'\\r\\n]{1})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Kraken - 2",
        regex: "(?:kraken).{0,40}\\b([0-9A-Za-z\\/\\+=]{86,88}[ \"'\\r\\n]{1})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Kucoin - 1",
        regex: "(?:kucoin).{0,40}([ \\r\\n]{1}[!-~]{7,32}[ \\r\\n]{1})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Kucoin - 2",
        regex:
          "(?:kucoin).{0,40}\\b([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Kucoin - 3",
        regex: "(?:kucoin).{0,40}\\b([0-9a-f]{24})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Kylas",
        regex: "(?:kylas).{0,40}\\b([a-z0-9-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Languagelayer",
        regex: "(?:languagelayer).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Lastfm",
        regex: "(?:lastfm).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Launchdarkly",
        regex: "(?:launchdarkly).{0,40}\\b([a-z0-9-]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Leadfeeder",
        regex: "(?:leadfeeder).{0,40}\\b([a-zA-Z0-9-]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Lendflow",
        regex:
          "(?:lendflow).{0,40}\\b([a-zA-Z0-9]{36}\\.[a-zA-Z0-9]{235}\\.[a-zA-Z0-9]{32}\\-[a-zA-Z0-9]{47}\\-[a-zA-Z0-9_]{162}\\-[a-zA-Z0-9]{42}\\-[a-zA-Z0-9_]{40}\\-[a-zA-Z0-9_]{66}\\-[a-zA-Z0-9_]{59}\\-[a-zA-Z0-9]{7}\\-[a-zA-Z0-9_]{220})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Lessannoyingcrm",
        regex: "(?:less).{0,40}\\b([a-zA-Z0-9-]{57})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Lexigram",
        regex: "(?:lexigram).{0,40}\\b([a-zA-Z0-9\\S]{301})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Linearapi",
        regex: "\\b(lin_api_[0-9A-Za-z]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Linemessaging",
        regex: "(?:line).{0,40}\\b([A-Za-z0-9+/]{171,172})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Linenotify",
        regex: "(?:linenotify).{0,40}\\b([0-9A-Za-z]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Linkpreview",
        regex: "(?:linkpreview).{0,40}\\b([a-zA-Z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Liveagent",
        regex: "(?:liveagent).{0,40}\\b([a-zA-Z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Livestorm",
        regex:
          "(?:livestorm).{0,40}\\b(eyJhbGciOiJIUzI1NiJ9\\.eyJhdWQiOiJhcGkubGl2ZXN0b3JtLmNvIiwianRpIjoi[0-9A-Z-a-z]{134}\\.[0-9A-Za-z\\-\\_]{43}[ \\r\\n]{1})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Locationiq",
        regex: "\\b(pk\\.[a-zA-Z-0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Loginradius",
        regex:
          "(?:loginradius).{0,40}\\b([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Lokalisetoken",
        regex: "(?:lokalise).{0,40}\\b([a-z0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Loyverse",
        regex: "(?:loyverse).{0,40}\\b([0-9-a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Luno - 1",
        regex: "(?:luno).{0,40}\\b([a-z0-9]{13})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Luno - 2",
        regex: "(?:luno).{0,40}\\b([a-zA-Z0-9_-]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "M3o",
        regex: "(?:m3o).{0,40}\\b([0-9A-Za-z]{48})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Macaddress",
        regex: "(?:macaddress).{0,40}\\b([a-zA-Z0-9_]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Madkudu",
        regex: "(?:madkudu).{0,40}\\b([0-9a-f]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Magnetic",
        regex:
          "(?:magnetic).{0,40}\\b([0-9Aa-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "MailChimp API Key",
        regex: "[0-9a-f]{32}-us[0-9]{1,2}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mailboxlayer",
        regex: "(?:mailboxlayer).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mailerlite",
        regex: "(?:mailerlite).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mailgun - 2",
        regex: "(?:mailgun).{0,40}\\b([a-zA-Z-0-9]{72})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mailgun API Key - 1",
        regex: "key-[0-9a-zA-Z]{32}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mailgun API key - 2",
        regex: "(mailgun|mg)[0-9a-z]{32}",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Mailjetbasicauth",
        regex: "(?:mailjet).{0,40}\\b([A-Za-z0-9]{87}\\=)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mailjetsms",
        regex: "(?:mailjet).{0,40}\\b([A-Za-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mailmodo",
        regex:
          "(?:mailmodo).{0,40}\\b([A-Z0-9]{7}-[A-Z0-9]{7}-[A-Z0-9]{7}-[A-Z0-9]{7})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mailsac",
        regex: "(?:mailsac).{0,40}\\b(k_[0-9A-Za-z]{36,})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mandrill",
        regex: "(?:mandrill).{0,40}\\b([A-Za-z0-9_-]{22})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Manifest",
        regex: "(?:manifest).{0,40}\\b([a-zA-z0-9]{32})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Mapbox - 2",
        regex: "\\b(sk\\.[a-zA-Z-0-9\\.]{80,240})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mapquest",
        regex: "(?:mapquest).{0,40}\\b([0-9A-Za-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Marketstack",
        regex: "(?:marketstack).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mattermostpersonaltoken - 1",
        regex:
          "(?:mattermost).{0,40}\\b([A-Za-z0-9-_]{1,}.cloud.mattermost.com)\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mattermostpersonaltoken - 2",
        regex: "(?:mattermost).{0,40}\\b([a-z0-9]{26})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mavenlink",
        regex: "(?:mavenlink).{0,40}\\b([0-9a-z]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Maxmindlicense - 1",
        regex: "(?:maxmind|geoip).{0,40}\\b([0-9A-Za-z]{16})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Maxmindlicense - 2",
        regex: "(?:maxmind|geoip).{0,40}\\b([0-9]{2,7})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Meaningcloud",
        regex: "(?:meaningcloud).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mediastack",
        regex: "(?:mediastack).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Meistertask",
        regex: "(?:meistertask).{0,40}\\b([a-zA-Z0-9]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mesibo",
        regex: "(?:mesibo).{0,40}\\b([0-9A-Za-z]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Messagebird",
        regex: "(?:messagebird).{0,40}\\b([A-Za-z0-9_-]{25})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Metaapi - 1",
        regex: "(?:metaapi|meta-api).{0,40}\\b([0-9a-f]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Metaapi - 2",
        regex: "(?:metaapi|meta-api).{0,40}\\b([0-9a-f]{24})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Metrilo",
        regex: "(?:metrilo).{0,40}\\b([a-z0-9]{16})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Microsoft Teams Webhook",
        regex:
          "https://outlook\\.office\\.com/webhook/[A-Za-z0-9\\-@]+/IncomingWebhook/[A-Za-z0-9\\-]+/[A-Za-z0-9\\-]+",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Microsoftteamswebhook",
        regex:
          "(https:\\/\\/[a-zA-Z-0-9]+\\.webhook\\.office\\.com\\/webhookb2\\/[a-zA-Z-0-9]{8}-[a-zA-Z-0-9]{4}-[a-zA-Z-0-9]{4}-[a-zA-Z-0-9]{4}-[a-zA-Z-0-9]{12}\\@[a-zA-Z-0-9]{8}-[a-zA-Z-0-9]{4}-[a-zA-Z-0-9]{4}-[a-zA-Z-0-9]{4}-[a-zA-Z-0-9]{12}\\/IncomingWebhook\\/[a-zA-Z-0-9]{32}\\/[a-zA-Z-0-9]{8}-[a-zA-Z-0-9]{4}-[a-zA-Z-0-9]{4}-[a-zA-Z-0-9]{4}-[a-zA-Z-0-9]{12})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Midise",
        regex: "midi-662b69edd2[a-zA-Z0-9]{54}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mindmeister",
        regex: "(?:mindmeister).{0,40}\\b([a-zA-Z0-9]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mite - 1",
        regex: "(?:mite).{0,40}\\b([0-9a-z]{16})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mite - 2",
        regex: "\\b([0-9a-z-]{1,}.mite.yo.lk)\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mixmax",
        regex: "(?:mixmax).{0,40}\\b([a-zA-Z0-9_-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mixpanel - 1",
        regex: "(?:mixpanel).{0,40}\\b([a-zA-Z0-9.-]{30,40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mixpanel - 2",
        regex: "(?:mixpanel).{0,40}\\b([a-zA-Z0-9-]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Moderation",
        regex:
          "(?:moderation).{0,40}\\b([a-zA-Z0-9]{36}\\.[a-zA-Z0-9]{115}\\.[a-zA-Z0-9_]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Monday",
        regex: "(?:monday).{0,40}\\b(ey[a-zA-Z0-9_.]{210,225})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Moonclerck",
        regex: "(?:moonclerck).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Moonclerk",
        regex: "(?:moonclerk).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Moosend",
        regex:
          "(?:moosend).{0,40}\\b([0-9Aa-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Mrticktock - 1",
        regex: "(?:mrticktock).{0,40}\\b([a-zA-Z0-9!=@#$%()_^]{1,50})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Myfreshworks - 2",
        regex: "(?:freshworks).{0,40}\\b([a-z0-9A-Z-]{22})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Myintervals",
        regex: "(?:myintervals).{0,40}\\b([0-9a-z]{11})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Nasdaqdatalink",
        regex: "(?:nasdaq).{0,40}\\b([a-zA-Z0-9_-]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Nethunt - 1",
        regex: "(?:nethunt).{0,40}\\b([a-zA-Z0-9.-@]{25,30})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Nethunt - 2",
        regex: "(?:nethunt).{0,40}\\b([a-z0-9-\\S]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Netlify",
        regex: "(?:netlify).{0,40}\\b([A-Za-z0-9_-]{43,45})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Neutrinoapi - 1",
        regex: "(?:neutrinoapi).{0,40}\\b([a-zA-Z0-9]{48})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Neutrinoapi - 2",
        regex: "(?:neutrinoapi).{0,40}\\b([a-zA-Z0-9]{6,24})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Newrelic Admin API Key",
        regex: "NRAA-[a-f0-9]{27}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Newrelic Insights API Key",
        regex: "NRI(?:I|Q)-[A-Za-z0-9\\-_]{32}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Newrelic REST API Key",
        regex: "NRRA-[a-f0-9]{42}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Newrelic Synthetics Location Key",
        regex: "NRSP-[a-z]{2}[0-9]{2}[a-f0-9]{31}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Newrelicpersonalapikey",
        regex:
          "(?:newrelic).{0,40}\\b([A-Za-z0-9_\\.]{4}-[A-Za-z0-9_\\.]{42})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Newsapi",
        regex: "(?:newsapi).{0,40}\\b([a-z0-9]{32})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Newscatcher",
        regex: "(?:newscatcher).{0,40}\\b([0-9A-Za-z_]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Nexmoapikey - 1",
        regex: "(?:nexmo).{0,40}\\b([A-Za-z0-9_-]{8})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Nexmoapikey - 2",
        regex: "(?:nexmo).{0,40}\\b([A-Za-z0-9_-]{16})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Nftport",
        regex:
          "(?:nftport).{0,40}\\b([a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Nicereply",
        regex: "(?:nicereply).{0,40}\\b([0-9a-f]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Nimble",
        regex: "(?:nimble).{0,40}\\b([a-zA-Z0-9]{30})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Nitro",
        regex: "(?:nitro).{0,40}\\b([0-9a-f]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Noticeable",
        regex: "(?:noticeable).{0,40}\\b([0-9a-zA-Z]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Notion",
        regex: "\\b(secret_[A-Za-z0-9]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Nozbeteams",
        regex:
          "(?:nozbe|nozbeteams).{0,40}\\b([0-9A-Za-z]{16}_[0-9A-Za-z\\-_]{64}[ \\r\\n]{1})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Numverify",
        regex: "(?:numverify).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Nutritionix - 1",
        regex: "(?:nutritionix).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Nutritionix - 2",
        regex: "(?:nutritionix).{0,40}\\b([a-z0-9]{8})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Nylas",
        regex: "(?:nylas).{0,40}\\b([0-9A-Za-z]{30})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Nytimes",
        regex: "(?:nytimes).{0,40}\\b([a-z0-9A-Z-]{32})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Oanda",
        regex: "(?:oanda).{0,40}\\b([a-zA-Z0-9]{24})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Omnisend",
        regex: "(?:omnisend).{0,40}\\b([a-z0-9A-Z-]{75})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Onedesk - 1",
        regex: "(?:onedesk).{0,40}\\b([a-zA-Z0-9!=@#$%^]{8,64})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Onelogin - 2",
        regex: "secret[a-zA-Z0-9_' \"=]{0,20}([a-z0-9]{64})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Onepagecrm - 1",
        regex: "(?:onepagecrm).{0,40}\\b([a-zA-Z0-9=]{44})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Onepagecrm - 2",
        regex: "(?:onepagecrm).{0,40}\\b([a-z0-9]{24})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Onwaterio",
        regex: "(?:onwater).{0,40}\\b([a-zA-Z0-9_-]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Oopspam",
        regex: "(?:oopspam).{0,40}\\b([a-zA-Z0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Opencagedata",
        regex: "(?:opencagedata).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Opengraphr",
        regex: "(?:opengraphr).{0,40}\\b([0-9Aa-zA-Z]{80})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Openuv",
        regex: "(?:openuv).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Openweather",
        regex: "(?:openweather).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Optimizely",
        regex: "(?:optimizely).{0,40}\\b([0-9A-Za-z-:]{54})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Owlbot",
        regex: "(?:owlbot).{0,40}\\b([a-z0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "PGP private key block",
        regex: "-----BEGIN PGP PRIVATE KEY BLOCK-----",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Pagerdutyapikey",
        regex:
          "(?:pagerduty).{0,40}\\b([a-z]{1}\\+[a-zA-Z]{9}\\-[a-z]{2}\\-[a-z0-9]{5})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Pandadoc",
        regex: "(?:pandadoc).{0,40}\\b([a-zA-Z0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Pandascore",
        regex:
          "(?:pandascore).{0,40}([ \\r\\n]{0,1}[0-9A-Za-z\\-\\_]{51}[ \\r\\n]{1})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Paralleldots",
        regex: "(?:paralleldots).{0,40}\\b([0-9A-Za-z]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Partnerstack",
        regex: "(?:partnerstack).{0,40}\\b([0-9A-Za-z]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Passbase",
        regex: "(?:passbase).{0,40}\\b([a-zA-Z0-9]{128})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Password in URL",
        regex:
          "[a-zA-Z]{3,10}://[^/\\s:@]{3,20}:[^/\\s:@]{3,20}@.{1,100}[\"'\\s]",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Pastebin",
        regex: "(?:pastebin).{0,40}\\b([a-zA-Z0-9_]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "PayPal Braintree access token",
        regex: "access_token\\$production\\$[0-9a-z]{16}\\$[0-9a-f]{32}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Paymoapp",
        regex: "(?:paymoapp).{0,40}\\b([a-zA-Z0-9]{44})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Paymongo",
        regex: "(?:paymongo).{0,40}\\b([a-zA-Z0-9_]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Paypaloauth - 1",
        regex: "\\b([A-Za-z0-9_\\.]{7}-[A-Za-z0-9_\\.]{72})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Paypaloauth - 2",
        regex: "\\b([A-Za-z0-9_\\.]{69}-[A-Za-z0-9_\\.]{10})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Paystack",
        regex: "\\b(sk\\_[a-z]{1,}\\_[A-Za-z0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Pdflayer",
        regex: "(?:pdflayer).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Pdfshift",
        regex: "(?:pdfshift).{0,40}\\b([0-9a-f]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Peopledatalabs",
        regex: "(?:peopledatalabs).{0,40}\\b([a-z0-9]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Pepipost",
        regex: "(?:pepipost|netcore).{0,40}\\b([a-zA-Z-0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Picatic API key",
        regex: "sk_live_[0-9a-z]{32}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Pipedream",
        regex: "(?:pipedream).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Pipedrive",
        regex: "(?:pipedrive).{0,40}\\b([a-zA-Z0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Pivotaltracker",
        regex: "(?:pivotal).{0,40}([a-z0-9]{32})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Pixabay",
        regex: "(?:pixabay).{0,40}\\b([a-z0-9-]{34})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Plaidkey - 1",
        regex: "(?:plaid).{0,40}\\b([a-z0-9]{24})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Plaidkey - 2",
        regex: "(?:plaid).{0,40}\\b([a-z0-9]{30})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Planviewleankit - 1",
        regex: "(?:planviewleankit|planview).{0,40}\\b([0-9a-f]{128})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Planviewleankit - 2",
        regex:
          "(?:planviewleankit|planview).{0,40}(?:subdomain).\\b([a-zA-Z][a-zA-Z0-9.-]{1,23}[a-zA-Z0-9])\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Planyo",
        regex: "(?:planyo).{0,40}\\b([0-9a-z]{62})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Plivo - 1",
        regex: "(?:plivo).{0,40}\\b([A-Za-z0-9_-]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Plivo - 2",
        regex: "(?:plivo).{0,40}\\b([A-Z]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Poloniex - 1",
        regex: "(?:poloniex).{0,40}\\b([0-9a-f]{128})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Poloniex - 2",
        regex:
          "(?:poloniex).{0,40}\\b([0-9A-Z]{8}-[0-9A-Z]{8}-[0-9A-Z]{8}-[0-9A-Z]{8})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Polygon",
        regex: "(?:polygon).{0,40}\\b([a-z0-9A-Z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Positionstack",
        regex: "(?:positionstack).{0,40}\\b([a-zA-Z0-9_]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Postageapp",
        regex: "(?:postageapp).{0,40}\\b([0-9A-Za-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Posthog",
        regex: "\\b(phc_[a-zA-Z0-9_]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Postman",
        regex: "\\b(PMAK-[a-zA-Z-0-9]{59})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Postmark",
        regex:
          "(?:postmark).{0,40}\\b([0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Powrbot",
        regex: "(?:powrbot).{0,40}\\b([a-z0-9A-Z]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Privatekey",
        regex:
          "-----\\s*?BEGIN[ A-Z0-9_-]*?PRIVATE KEY\\s*?-----[\\s\\S]*?----\\s*?END[ A-Z0-9_-]*? PRIVATE KEY\\s*?-----",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Prospectcrm",
        regex: "(?:prospect).{0,40}\\b([a-z0-9-]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Prospectio",
        regex: "(?:prospect).{0,40}\\b([a-z0-9A-Z-]{50})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Protocolsio",
        regex: "(?:protocols).{0,40}\\b([a-z0-9]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Proxycrawl",
        regex: "(?:proxycrawl).{0,40}\\b([a-zA-Z0-9_]{22})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Pubnubpublishkey - 1",
        regex:
          "\\b(sub-c-[0-9a-z]{8}-[a-z]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Pubnubpublishkey - 2",
        regex:
          "\\b(pub-c-[0-9a-z]{8}-[0-9a-z]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Purestake",
        regex: "(?:purestake).{0,40}\\b([a-zA-Z0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Pushbulletapikey",
        regex: "(?:pushbullet).{0,40}\\b([A-Za-z0-9_\\.]{34})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Pusherchannelkey - 1",
        regex: "(?:key).{0,40}\\b([a-z0-9]{20})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Pusherchannelkey - 2",
        regex: "(?:pusher).{0,40}\\b([a-z0-9]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Pusherchannelkey - 3",
        regex: "(?:pusher).{0,40}\\b([0-9]{7})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "PyPI upload token",
        regex: "pypi-AgEIcHlwaS5vcmc[A-Za-z0-9-_]{50,1000}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Qualaroo",
        regex: "(?:qualaroo).{0,40}\\b([a-z0-9A-Z=]{64})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Qubole",
        regex: "(?:qubole).{0,40}\\b([0-9a-z]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Quickmetrics",
        regex: "(?:quickmetrics).{0,40}\\b([a-zA-Z0-9_-]{22})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "REDIS_URL",
        regex: "(REDIS_URL).+",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "RKCS8",
        regex: "-----BEGIN PRIVATE KEY-----",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "RSA private key",
        regex: "-----BEGIN RSA PRIVATE KEY-----",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Rapidapi",
        regex: "(?:rapidapi).{0,40}\\b([A-Za-z0-9_-]{50})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Raven",
        regex: "(?:raven).{0,40}\\b([A-Z0-9-]{16})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Rawg",
        regex: "(?:rawg).{0,40}\\b([0-9Aa-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Razorpay - 1",
        regex: "\\brzp_\\w{2,6}_\\w{10,20}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Readme",
        regex: "(?:readme).{0,40}\\b([a-zA-Z0-9_]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Reallysimplesystems",
        regex: "\\b(ey[a-zA-Z0-9-._]{153}.ey[a-zA-Z0-9-._]{916,1000})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Rebrandly",
        regex: "(?:rebrandly).{0,40}\\b([a-zA-Z0-9_]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Refiner",
        regex:
          "(?:refiner).{0,40}\\b([0-9Aa-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Repairshopr - 1",
        regex: "(?:repairshopr).{0,40}\\b([a-zA-Z0-9_.!+$#^*]{3,32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Repairshopr - 2",
        regex: "(?:repairshopr).{0,40}\\b([a-zA-Z0-9-]{51})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Restpack",
        regex: "(?:restpack).{0,40}\\b([a-zA-Z0-9]{48})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Restpackhtmltopdfapi",
        regex: "(?:restpack).{0,40}\\b([0-9A-Za-z]{48})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Rev - 1",
        regex: "(?:rev).{0,40}\\b([0-9a-zA-Z\\/\\+]{27}\\=[ \\r\\n]{1})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Rev - 2",
        regex: "(?:rev).{0,40}\\b([0-9a-zA-Z\\-]{27}[ \\r\\n]{1})",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Revampcrm - 1",
        regex: "(?:revamp).{0,40}\\b([a-zA-Z0-9]{40}\\b)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Revampcrm - 2",
        regex: "(?:revamp).{0,40}\\b([a-zA-Z0-9.-@]{25,30})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Ringcentral - 1",
        regex:
          "(?:ringcentral).{0,40}\\b(https://www.[0-9A-Za-z_-]{1,}.com)\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Ringcentral - 2",
        regex: "(?:ringcentral).{0,40}\\b([0-9A-Za-z_-]{22})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Ritekit",
        regex: "(?:ritekit).{0,40}\\b([0-9a-f]{44})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Roaring",
        regex: "(?:roaring).{0,40}\\b([0-9A-Za-z_-]{28})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Rocketreach",
        regex: "(?:rocketreach).{0,40}\\b([a-z0-9-]{39})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Roninapp - 1",
        regex: "(?:ronin).{0,40}\\b([0-9Aa-zA-Z]{3,32})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Roninapp - 2",
        regex: "(?:ronin).{0,40}\\b([0-9a-zA-Z]{26})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Route4me",
        regex: "(?:route4me).{0,40}\\b([0-9A-Z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Rownd - 1",
        regex:
          "(?:rownd).{0,40}\\b([a-z0-9]{8}\\-[a-z0-9]{4}\\-[a-z0-9]{4}\\-[a-z0-9]{4}\\-[a-z0-9]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Rownd - 2",
        regex: "(?:rownd).{0,40}\\b([a-z0-9]{48})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Rownd - 3",
        regex: "(?:rownd).{0,40}\\b([0-9]{18})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Rubygems",
        regex: "\\b(rubygems_[a-zA0-9]{48})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Runrunit - 1",
        regex: "(?:runrunit).{0,40}\\b([0-9a-f]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Runrunit - 2",
        regex: "(?:runrunit).{0,40}\\b([0-9A-Za-z]{18,20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "SSH",
        regex: "-----BEGIN OPENSSH PRIVATE KEY-----",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "SSH (DSA) private key",
        regex: "-----BEGIN DSA PRIVATE KEY-----",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Salesblink",
        regex: "(?:salesblink).{0,40}\\b([a-zA-Z]{16})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Salescookie",
        regex: "(?:salescookie).{0,40}\\b([a-zA-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Salesflare",
        regex: "(?:salesflare).{0,40}\\b([a-zA-Z0-9_]{45})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Satismeterprojectkey - 1",
        regex:
          "(?:satismeter).{0,40}\\b([a-zA-Z0-9]{4,20}@[a-zA-Z0-9]{2,12}.[a-zA-Z0-9]{2,12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Satismeterprojectkey - 2",
        regex: "(?:satismeter).{0,40}\\b([a-zA-Z0-9]{24})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Satismeterprojectkey - 3",
        regex: "(?:satismeter).{0,40}\\b([a-zA-Z0-9!=@#$%^]{6,32})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Satismeterwritekey",
        regex: "(?:satismeter).{0,40}\\b([a-z0-9A-Z]{16})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Saucelabs - 1",
        regex: "\\b(oauth\\-[a-z0-9]{8,}\\-[a-z0-9]{5})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Saucelabs - 2",
        regex:
          "(?:saucelabs).{0,40}\\b([a-z0-9]{8}\\-[a-z0-9]{4}\\-[a-z0-9]{4}\\-[a-z0-9]{4}\\-[a-z0-9]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Scalewaykey",
        regex:
          "(?:scaleway).{0,40}\\b([0-9a-z]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[0-9a-z]{4}-[0-9a-z]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Scrapeowl",
        regex: "(?:scrapeowl).{0,40}\\b([0-9a-z]{30})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Scraperapi",
        regex: "(?:scraperapi).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Scraperbox",
        regex: "(?:scraperbox).{0,40}\\b([A-Z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Scrapersite",
        regex: "(?:scrapersite).{0,40}\\b([a-zA-Z0-9]{45})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Scrapestack",
        regex: "(?:scrapestack).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Scrapfly",
        regex: "(?:scrapfly).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Scrapingant",
        regex: "(?:scrapingant).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Scrapingbee",
        regex: "(?:scrapingbee).{0,40}\\b([A-Z0-9]{80})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Screenshotapi",
        regex:
          "(?:screenshotapi).{0,40}\\b([0-9A-Z]{7}\\-[0-9A-Z]{7}\\-[0-9A-Z]{7}\\-[0-9A-Z]{7})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Screenshotlayer",
        regex: "(?:screenshotlayer).{0,40}\\b([a-zA-Z0-9_]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Securitytrails",
        regex: "(?:securitytrails).{0,40}\\b([a-zA-Z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Segmentapikey",
        regex:
          "(?:segment).{0,40}\\b([A-Za-z0-9_\\-a-zA-Z]{43}\\.[A-Za-z0-9_\\-a-zA-Z]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Selectpdf",
        regex: "(?:selectpdf).{0,40}\\b([a-z0-9-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Semaphore",
        regex: "(?:semaphore).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "SendGrid API Key",
        regex: "SG\\.[\\w_]{16,32}\\.[\\w_]{16,64}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sendbird - 1",
        regex: "(?:sendbird).{0,40}\\b([0-9a-f]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sendbird - 2",
        regex:
          "(?:sendbird).{0,40}\\b([0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sendbirdorganizationapi",
        regex: "(?:sendbird).{0,40}\\b([0-9a-f]{24})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sendgrid",
        regex:
          "(?:sendgrid).{0,40}(SG\\.[\\w\\-_]{20,24}\\.[\\w\\-_]{39,50})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sendinbluev2",
        regex: "\\b(xkeysib\\-[A-Za-z0-9_-]{81})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sentiment - 1",
        regex: "(?:sentiment).{0,40}\\b([0-9]{17})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sentiment - 2",
        regex: "(?:sentiment).{0,40}\\b([a-zA-Z0-9]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sentrytoken",
        regex: "(?:sentry).{0,40}\\b([a-f0-9]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Serphouse",
        regex: "(?:serphouse).{0,40}\\b([0-9A-Za-z]{60})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Serpstack",
        regex: "(?:serpstack).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sheety - 1",
        regex: "(?:sheety).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sheety - 2",
        regex: "(?:sheety).{0,40}\\b([0-9a-z]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sherpadesk",
        regex: "(?:sherpadesk).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Shipday",
        regex: "(?:shipday).{0,40}\\b([a-zA-Z0-9.]{11}[a-zA-Z0-9]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Shodankey",
        regex: "(?:shodan).{0,40}\\b([a-zA-Z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Shopify access token",
        regex: "shpat_[a-fA-F0-9]{32}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Shopify custom app access token",
        regex: "shpca_[a-fA-F0-9]{32}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Shopify private app access token",
        regex: "shppa_[a-fA-F0-9]{32}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Shopify shared secret",
        regex: "shpss_[a-fA-F0-9]{32}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Shoppable Service Auth",
        regex: "data-shoppable-auth-token.+",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Shortcut",
        regex: "(?:shortcut).{0,40}\\b([0-9a-f-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Shotstack",
        regex: "(?:shotstack).{0,40}\\b([a-zA-Z0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Shutterstock - 1",
        regex: "(?:shutterstock).{0,40}\\b([0-9a-zA-Z]{32})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Shutterstock - 2",
        regex: "(?:shutterstock).{0,40}\\b([0-9a-zA-Z]{16})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Shutterstockoauth",
        regex: "(?:shutterstock).{0,40}\\b(v2/[0-9A-Za-z]{388})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Signalwire - 1",
        regex: "\\b([0-9a-z-]{3,64}.signalwire.com)\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Signalwire - 2",
        regex:
          "(?:signalwire).{0,40}\\b([0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Signalwire - 3",
        regex: "(?:signalwire).{0,40}\\b([0-9A-Za-z]{50})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Signaturit",
        regex: "(?:signaturit).{0,40}\\b([0-9A-Za-z]{86})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Signupgenius",
        regex: "(?:signupgenius).{0,40}\\b([0-9A-Za-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sigopt",
        regex: "(?:sigopt).{0,40}\\b([A-Z0-9]{48})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Simplesat",
        regex: "(?:simplesat).{0,40}\\b([a-z0-9]{40})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Simplynoted",
        regex: "(?:simplynoted).{0,40}\\b([a-zA-Z0-9\\S]{340,360})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Simvoly",
        regex: "(?:simvoly).{0,40}\\b([a-z0-9]{33})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sinchmessage",
        regex: "(?:sinch).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sirv - 1",
        regex: "(?:sirv).{0,40}\\b([a-zA-Z0-9\\S]{88})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sirv - 2",
        regex: "(?:sirv).{0,40}\\b([a-zA-Z0-9]{26})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Siteleaf",
        regex: "(?:siteleaf).{0,40}\\b([0-9Aa-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Skrappio",
        regex: "(?:skrapp).{0,40}\\b([a-z0-9A-Z]{42})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Skybiometry",
        regex: "(?:skybiometry).{0,40}\\b([0-9a-z]{25,26})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Slack",
        regex: "xox[baprs]-[0-9a-zA-Z]{10,48}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Slack Token",
        regex: "(xox[pborsa]-[0-9]{12}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Slack User token",
        regex: "xoxp-[0-9A-Za-z\\-]{72}",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Slack Webhook",
        regex:
          "https://hooks.slack.com/services/T[a-zA-Z0-9_]{8,10}/B[a-zA-Z0-9_]{8,12}/[a-zA-Z0-9_]{23,24}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Slack access token",
        regex: "xoxb-[0-9A-Za-z\\-]{51}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Slackwebhook",
        regex:
          "(https:\\/\\/hooks.slack.com\\/services\\/[A-Za-z0-9+\\/]{44,46})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Smartsheets",
        regex: "(?:smartsheets).{0,40}\\b([a-zA-Z0-9]{37})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Smartystreets - 1",
        regex: "(?:smartystreets).{0,40}\\b([a-zA-Z0-9]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Smartystreets - 2",
        regex: "(?:smartystreets).{0,40}\\b([a-z0-9-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Smooch - 1",
        regex: "(?:smooch).{0,40}\\b(act_[0-9a-z]{24})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Smooch - 2",
        regex: "(?:smooch).{0,40}\\b([0-9a-zA-Z_-]{86})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Snipcart",
        regex: "(?:snipcart).{0,40}\\b([0-9A-Za-z_]{75})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Snykkey",
        regex:
          "(?:snyk).{0,40}\\b([0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "SonarQube Token",
        regex: "sonar.{0,50}(?:\"|'|`)?[0-9a-f]{40}(?:\"|'|`)?",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Splunkobservabilitytoken",
        regex: "(?:splunk).{0,40}\\b([a-z0-9A-Z]{22})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Spoonacular",
        regex: "(?:spoonacular).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sportsmonk",
        regex: "(?:sportsmonk).{0,40}\\b([0-9a-zA-Z]{60})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Square",
        regex: "(?:square).{0,40}(EAAA[a-zA-Z0-9\\-\\+\\=]{60})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Square API Key",
        regex: "sq0(atp|csp)-[0-9a-z-_]{22,43}",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Square OAuth Secret",
        regex: "sq0csp-[0-9A-Za-z\\-_]{43}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Square access token",
        regex: "sq0atp-[0-9A-Za-z\\-_]{22}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Squareapp - 1",
        regex: "[\\w\\-]*sq0i[a-z]{2}-[0-9A-Za-z\\-_]{22,43}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Squareapp - 2",
        regex: "[\\w\\-]*sq0c[a-z]{2}-[0-9A-Za-z\\-_]{40,50}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Squarespace",
        regex:
          "(?:squarespace).{0,40}\\b([0-9Aa-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Squareup",
        regex: "\\b(sq0idp-[0-9A-Za-z]{22})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sslmate",
        regex: "(?:sslmate).{0,40}\\b([a-zA-Z0-9]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Stitchdata",
        regex: "(?:stitchdata).{0,40}\\b([0-9a-z_]{35})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Stockdata",
        regex: "(?:stockdata).{0,40}\\b([0-9A-Za-z]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Storecove",
        regex: "(?:storecove).{0,40}\\b([a-zA-Z0-9_-]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Stormglass",
        regex: "(?:stormglass).{0,40}\\b([0-9Aa-z-]{73})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Storyblok",
        regex: "(?:storyblok).{0,40}\\b([0-9A-Za-z]{22}t{2})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Storychief",
        regex: "(?:storychief).{0,40}\\b([a-zA-Z0-9_\\-.]{940,1000})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Strava - 1",
        regex: "(?:strava).{0,40}\\b([0-9]{5})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Strava - 2",
        regex: "(?:strava).{0,40}\\b([0-9a-z]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Streak",
        regex: "(?:streak).{0,40}\\b([0-9Aa-f]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Stripe",
        regex: "[rs]k_live_[a-zA-Z0-9]{20,30}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Stripe API Key - 1",
        regex: "sk_live_[0-9a-zA-Z]{24}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Stripe API key - 2",
        regex: "stripe[sr]k_live_[0-9a-zA-Z]{24}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Stripe API key - 3",
        regex: "stripe[sk|rk]_live_[0-9a-zA-Z]{24}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Stripe Public Live Key",
        regex: "pk_live_[0-9a-z]{24}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Stripe Public Test Key",
        regex: "pk_test_[0-9a-z]{24}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Stripe Restriced Key",
        regex: "rk_(?:live|test)_[0-9a-zA-Z]{24}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Stripe Restricted API Key",
        regex: "rk_live_[0-9a-zA-Z]{24}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Stripe Secret Key",
        regex: "sk_(?:live|test)_[0-9a-zA-Z]{24}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Stripe Secret Live Key",
        regex: "(sk|rk)_live_[0-9a-z]{24}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Stripe Secret Test Key",
        regex: "(sk|rk)_test_[0-9a-z]{24}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Stytch - 1",
        regex: "(?:stytch).{0,40}\\b([a-zA-Z0-9-_]{47}=)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Stytch - 2",
        regex: "(?:stytch).{0,40}\\b([a-z0-9-]{49})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sugester - 1",
        regex: "(?:sugester).{0,40}\\b([a-zA-Z0-9_.!+$#^*%]{3,32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sugester - 2",
        regex: "(?:sugester).{0,40}\\b([a-zA-Z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sumologickey - 1",
        regex: "(?:sumo).{0,40}\\b([A-Za-z0-9]{14})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sumologickey - 2",
        regex: "(?:sumo).{0,40}\\b([A-Za-z0-9]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Supernotesapi",
        regex:
          "(?:supernotes).{0,40}([ \\r\\n]{0,1}[0-9A-Za-z\\-_]{43}[ \\r\\n]{1})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Surveyanyplace - 1",
        regex: "(?:survey).{0,40}\\b([a-z0-9A-Z-]{36})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Surveyanyplace - 2",
        regex: "(?:survey).{0,40}\\b([a-z0-9A-Z]{32})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Surveybot",
        regex: "(?:surveybot).{0,40}\\b([A-Za-z0-9-]{80})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Surveysparrow",
        regex: "(?:surveysparrow).{0,40}\\b([a-zA-Z0-9-_]{88})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Survicate",
        regex: "(?:survicate).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Swell - 1",
        regex: "(?:swell).{0,40}\\b([a-zA-Z0-9]{6,24})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Swell - 2",
        regex: "(?:swell).{0,40}\\b([a-zA-Z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Swiftype",
        regex:
          "(?:swiftype).{0,40}\\b([a-zA-z-0-9]{6}\\_[a-zA-z-0-9]{6}\\-[a-zA-z-0-9]{6})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Tallyfy",
        regex:
          "(?:tallyfy).{0,40}\\b([0-9A-Za-z]{36}\\.[0-9A-Za-z]{264}\\.[0-9A-Za-z\\-\\_]{683})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Tatumio",
        regex: "(?:tatum).{0,40}\\b([0-9a-z-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Taxjar",
        regex: "(?:taxjar).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Teamgate - 1",
        regex: "(?:teamgate).{0,40}\\b([a-z0-9]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Teamgate - 2",
        regex: "(?:teamgate).{0,40}\\b([a-zA-Z0-9]{80})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Teamworkcrm",
        regex:
          "(?:teamwork|teamworkcrm).{0,40}\\b(tkn\\.v1_[0-9A-Za-z]{71}=[ \\r\\n]{1})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Teamworkdesk",
        regex:
          "(?:teamwork|teamworkdesk).{0,40}\\b(tkn\\.v1_[0-9A-Za-z]{71}=[ \\r\\n]{1})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Teamworkspaces",
        regex:
          "(?:teamwork|teamworkspaces).{0,40}\\b(tkn\\.v1_[0-9A-Za-z]{71}=[ \\r\\n]{1})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Technicalanalysisapi",
        regex: "(?:technicalanalysisapi).{0,40}\\b([A-Z0-9]{48})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Telegram Bot API Key",
        regex: "[0-9]+:AA[0-9A-Za-z\\-_]{33}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Telegram Secret",
        regex: "d{5,}:A[0-9a-z_-]{34,34}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Telegrambottoken",
        regex: "(?:telegram).{0,40}\\b([0-9]{8,10}:[a-zA-Z0-9_-]{35})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Telnyx",
        regex: "(?:telnyx).{0,40}\\b(KEY[0-9A-Za-z_-]{55})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Terraformcloudpersonaltoken",
        regex: "\\b([A-Za-z0-9]{14}.atlasv1.[A-Za-z0-9]{67})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Text2data",
        regex:
          "(?:text2data).{0,40}\\b([0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Textmagic - 1",
        regex: "(?:textmagic).{0,40}\\b([0-9A-Za-z]{30})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Textmagic - 2",
        regex: "(?:textmagic).{0,40}\\b([0-9A-Za-z]{1,25})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Theoddsapi",
        regex: "(?:theoddsapi|the-odds-api).{0,40}\\b([0-9a-f]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Thinkific - 1",
        regex: "(?:thinkific).{0,40}\\b([0-9a-f]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Thinkific - 2",
        regex: "(?:thinkific).{0,40}\\b([0-9A-Za-z]{4,40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Thousandeyes - 1",
        regex: "(?:thousandeyes).{0,40}\\b([a-zA-Z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Thousandeyes - 2",
        regex:
          "(?:thousandeyes).{0,40}\\b([a-zA-Z0-9]{3,20}@[a-zA-Z0-9]{2,12}.[a-zA-Z0-9]{2,5})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Ticketmaster",
        regex: "(?:ticketmaster).{0,40}\\b([a-zA-Z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Tiingo",
        regex: "(?:tiingo).{0,40}\\b([0-9a-z]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Timezoneapi",
        regex: "(?:timezoneapi).{0,40}\\b([a-zA-Z0-9]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Tly",
        regex: "(?:tly).{0,40}\\b([0-9A-Za-z]{60})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Tmetric",
        regex: "(?:tmetric).{0,40}\\b([0-9A-Z]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Todoist",
        regex: "(?:todoist).{0,40}\\b([0-9a-z]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Toggltrack",
        regex: "(?:toggl).{0,40}\\b([0-9Aa-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Tomorrowio",
        regex: "(?:tomorrow).{0,40}\\b([a-zA-Z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Tomtom",
        regex: "(?:tomtom).{0,40}\\b([0-9Aa-zA-Z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Tradier",
        regex: "(?:tradier).{0,40}\\b([a-zA-Z0-9]{28})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Travelpayouts",
        regex: "(?:travelpayouts).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Travisci",
        regex: "(?:travis).{0,40}\\b([a-zA-Z0-9A-Z_]{22})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Trello URL",
        regex: "https://trello.com/b/[0-9a-z]/[0-9a-z_-]+",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Trelloapikey - 2",
        regex: "(?:trello).{0,40}\\b([a-zA-Z-0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Twelvedata",
        regex: "(?:twelvedata).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Twilio - 1",
        regex: "\\bAC[0-9a-f]{32}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Twilio API Key",
        regex: "SK[0-9a-fA-F]{32}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Twitter Access Token",
        regex: "[tT][wW][iI][tT][tT][eE][rR].*[1-9][0-9]+-[0-9a-zA-Z]{40}",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Twitter Client ID",
        regex: "twitter[0-9a-z]{18,25}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Twitter OAuth",
        regex: "[tT][wW][iI][tT][tT][eE][rR].*['|\"][0-9a-zA-Z]{35,44}['|\"]",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Twitter Secret Key",
        regex: "twitter[0-9a-z]{35,44}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Tyntec",
        regex: "(?:tyntec).{0,40}\\b([a-zA-Z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Typeform",
        regex: "(?:typeform).{0,40}\\b([0-9A-Za-z]{44})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Ubidots",
        regex: "\\b(BBFF-[0-9a-zA-Z]{30})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Unifyid",
        regex: "(?:unify).{0,40}\\b([0-9A-Za-z_=-]{44})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Unplugg",
        regex: "(?:unplu).{0,40}\\b([a-z0-9]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Unsplash",
        regex: "(?:unsplash).{0,40}\\b([0-9A-Za-z_]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Upcdatabase",
        regex: "(?:upcdatabase).{0,40}\\b([A-Z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Uplead",
        regex: "(?:uplead).{0,40}\\b([a-z0-9-]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Uploadcare",
        regex: "(?:uploadcare).{0,40}\\b([a-z0-9]{20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Upwave",
        regex: "(?:upwave).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Uri",
        regex:
          "\\b[a-zA-Z]{1,10}:?\\/\\/[-.%\\w{}]{1,50}:([-.%\\S]{3,50})@[-.%\\w\\/:]+\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Urlscan",
        regex: "(?:urlscan).{0,40}\\b([a-z0-9-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Userstack",
        regex: "(?:userstack).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Vatlayer",
        regex: "(?:vatlayer).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Vercel",
        regex: "(?:vercel).{0,40}\\b([a-zA-Z0-9]{24})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Verifier - 1",
        regex:
          "(?:verifier).{0,40}\\b([a-zA-Z-0-9-]{5,16}\\@[a-zA-Z-0-9]{4,16}\\.[a-zA-Z-0-9]{3,6})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Verifier - 2",
        regex: "(?:verifier).{0,40}\\b([a-z0-9]{96})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Verimail",
        regex: "(?:verimail).{0,40}\\b([A-Z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Veriphone",
        regex: "(?:veriphone).{0,40}\\b([0-9A-Z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Versioneye",
        regex: "(?:versioneye).{0,40}\\b([a-zA-Z0-9-]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Viewneo",
        regex:
          "(?:viewneo).{0,40}\\b([a-z0-9A-Z]{120,300}.[a-z0-9A-Z]{150,300}.[a-z0-9A-Z-_]{600,800})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Virustotal",
        regex: "(?:virustotal).{0,40}\\b([a-f0-9]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Visualcrossing",
        regex: "(?:visualcrossing).{0,40}\\b([0-9A-Z]{25})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Voicegain",
        regex:
          "(?:voicegain).{0,40}\\b(ey[0-9a-zA-Z_-]{34}.ey[0-9a-zA-Z_-]{108}.[0-9a-zA-Z_-]{43})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Vouchery - 1",
        regex: "(?:vouchery).{0,40}\\b([a-z0-9-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Vouchery - 2",
        regex: "(?:vouchery).{0,40}\\b([a-zA-Z0-9-\\S]{2,20})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Vpnapi",
        regex: "(?:vpnapi).{0,40}\\b([a-z0-9A-Z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Vultrapikey",
        regex: "(?:vultr).{0,40} \\b([A-Z0-9]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Vyte",
        regex: "(?:vyte).{0,40}\\b([0-9a-z]{50})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Walkscore",
        regex: "(?:walkscore).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Weatherbit",
        regex: "(?:weatherbit).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Weatherstack",
        regex: "(?:weatherstack).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Webex - 1",
        regex: "(?:error).{0,40}(redirect_uri_mismatch)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Webex - 2",
        regex: "(?:webex).{0,40}\\b([A-Za-z0-9_-]{65})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Webex - 3",
        regex: "(?:webex).{0,40}\\b([A-Za-z0-9_-]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Webflow",
        regex: "(?:webflow).{0,40}\\b([a-zA0-9]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Webscraper",
        regex: "(?:webscraper).{0,40}\\b([a-zA-Z0-9]{60})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Webscraping",
        regex: "(?:webscraping).{0,40}\\b([0-9A-Za-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Wepay - 2",
        regex: "(?:wepay).{0,40}\\b([a-zA-Z0-9_?]{62})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Whoxy",
        regex: "(?:whoxy).{0,40}\\b([0-9a-z]{33})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Worksnaps",
        regex: "(?:worksnaps).{0,40}\\b([0-9A-Za-z]{40})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Workstack",
        regex: "(?:workstack).{0,40}\\b([0-9Aa-zA-Z]{60})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Worldcoinindex",
        regex: "(?:worldcoinindex).{0,40}\\b([a-zA-Z0-9]{35})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Worldweather",
        regex: "(?:worldweather).{0,40}\\b([0-9a-z]{31})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Wrike",
        regex: "(?:wrike).{0,40}\\b(ey[a-zA-Z0-9-._]{333})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Yandex",
        regex: "(?:yandex).{0,40}\\b([a-z0-9A-Z.]{83})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Youneedabudget",
        regex: "(?:youneedabudget).{0,40}\\b([0-9a-f]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Yousign",
        regex: "(?:yousign).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Youtubeapikey - 1",
        regex: "(?:youtube).{0,40}\\b([a-zA-Z-0-9_]{39})\\b",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Zapier Webhook",
        regex:
          "https://(?:www.)?hooks\\.zapier\\.com/hooks/catch/[A-Za-z0-9]+/[A-Za-z0-9]+/",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Zapierwebhook",
        regex:
          "(https:\\/\\/hooks.zapier.com\\/hooks\\/catch\\/[A-Za-z0-9\\/]{16})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Zendeskapi - 3",
        regex: "(?:zendesk).{0,40}([A-Za-z0-9_-]{40})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Zenkitapi",
        regex: "(?:zenkit).{0,40}\\b([0-9a-z]{8}\\-[0-9A-Za-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Zenscrape",
        regex:
          "(?:zenscrape).{0,40}\\b([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Zenserp",
        regex: "(?:zenserp).{0,40}\\b([0-9a-z-]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Zeplin",
        regex: "(?:zeplin).{0,40}\\b([a-zA-Z0-9-.]{350,400})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Zerobounce",
        regex: "(?:zerobounce).{0,40}\\b([a-z0-9]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Zipapi - 1",
        regex: "(?:zipapi).{0,40}\\b([a-zA-Z0-9!=@#$%^]{7,})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Zipapi - 3",
        regex: "(?:zipapi).{0,40}\\b([0-9a-z]{32})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Zipcodeapi",
        regex: "(?:zipcodeapi).{0,40}\\b([a-zA-Z0-9]{64})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Zoho Webhook",
        regex:
          "https://creator\\.zoho\\.com/api/[A-Za-z0-9/\\-_\\.]+\\?authtoken=[A-Za-z0-9]+",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "Zonkafeedback",
        regex: "(?:zonka).{0,40}\\b([A-Za-z0-9]{36})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "access_key_secret",
        regex: "access[_-]?key[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "access_secret",
        regex: "access[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "access_token",
        regex: "access[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "account_sid",
        regex: "account[_-]?sid(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "admin_email",
        regex: "admin[_-]?email(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "adzerk_api_key",
        regex: "adzerk[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "algolia_admin_key_1",
        regex: "algolia[_-]?admin[_-]?key[_-]?1(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "algolia_admin_key_2",
        regex: "algolia[_-]?admin[_-]?key[_-]?2(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "algolia_admin_key_mcm",
        regex: "algolia[_-]?admin[_-]?key[_-]?mcm(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "algolia_api_key",
        regex: "algolia[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "algolia_api_key_mcm",
        regex: "algolia[_-]?api[_-]?key[_-]?mcm(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "algolia_api_key_search",
        regex: "algolia[_-]?api[_-]?key[_-]?search(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "algolia_search_api_key",
        regex: "algolia[_-]?search[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "algolia_search_key",
        regex: "algolia[_-]?search[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "algolia_search_key_1",
        regex: "algolia[_-]?search[_-]?key[_-]?1(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "alias_pass",
        regex: "alias[_-]?pass(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "alicloud_access_key",
        regex: "alicloud[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "alicloud_secret_key",
        regex: "alicloud[_-]?secret[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "amazon_bucket_name",
        regex: "amazon[_-]?bucket[_-]?name(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "amazon_secret_access_key",
        regex: "amazon[_-]?secret[_-]?access[_-]?key(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "anaconda_token",
        regex: "anaconda[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "android_docs_deploy_token",
        regex: "android[_-]?docs[_-]?deploy[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ansible_vault_password",
        regex: "ansible[_-]?vault[_-]?password(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "aos_key",
        regex: "aos[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "aos_sec",
        regex: "aos[_-]?sec(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "api_key",
        regex: "api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "api_key_secret",
        regex: "api[_-]?key[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "api_key_sid",
        regex: "api[_-]?key[_-]?sid(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "api_secret",
        regex: "api[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "apiary_api_key",
        regex: "apiary[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "apigw_access_token",
        regex: "apigw[_-]?access[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "apikey_patterns",
        regex: "apikey[:](?:['\"]?[a-zA-Z0-9-_|]+['\"]?)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "app_bucket_perm",
        regex: "app[_-]?bucket[_-]?perm(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "app_report_token_key",
        regex: "app[_-]?report[_-]?token[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "app_secrete",
        regex: "app[_-]?secrete(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "app_token",
        regex: "app[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "appclientsecret",
        regex: "appclientsecret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "apple_id_password",
        regex: "apple[_-]?id[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "argos_token",
        regex: "argos[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "artifactory",
        regex: "(artifactory.{0,50}(\"|')?[a-zA-Z0-9=]{112}(\"|')?)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "artifactory_key",
        regex: "artifactory[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "artifacts_aws_access_key_id",
        regex: "artifacts[_-]?aws[_-]?access[_-]?key[_-]?id(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "artifacts_aws_secret_access_key",
        regex: "artifacts[_-]?aws[_-]?secret[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "artifacts_bucket",
        regex: "artifacts[_-]?bucket(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "artifacts_key",
        regex: "artifacts[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "artifacts_secret",
        regex: "artifacts[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "assistant_iam_apikey",
        regex: "assistant[_-]?iam[_-]?apikey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "auth0_api_clientsecret",
        regex: "auth0[_-]?api[_-]?clientsecret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "auth0_client_secret",
        regex: "auth0[_-]?client[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "auth_token",
        regex: "auth[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "author_email_addr",
        regex: "author[_-]?email[_-]?addr(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "author_npm_api_key",
        regex: "author[_-]?npm[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "aws_access",
        regex: "aws[_-]?access(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "aws_access_key",
        regex: "aws[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "aws_access_key_id - 1",
        regex: "aws[_-]?access[_-]?key[_-]?id(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "aws_config_accesskeyid",
        regex: "aws[_-]?config[_-]?accesskeyid(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "aws_config_secretaccesskey",
        regex: "aws[_-]?config[_-]?secretaccesskey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "aws_key",
        regex: "aws[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "aws_patterns",
        regex:
          "(?:accesskeyid|secretaccesskey|aws_access_key_id|aws_secret_access_key)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "aws_secret",
        regex: "aws[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "aws_secret_access_key",
        regex: "aws[_-]?secret[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "aws_secret_key",
        regex: "aws[_-]?secret[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "aws_secrets",
        regex: "aws[_-]?secrets(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "aws_ses_access_key_id",
        regex: "aws[_-]?ses[_-]?access[_-]?key[_-]?id(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "aws_ses_secret_access_key",
        regex: "aws[_-]?ses[_-]?secret[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "awsaccesskeyid",
        regex: "awsaccesskeyid(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "awscn_access_key_id",
        regex: "awscn[_-]?access[_-]?key[_-]?id(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "awscn_secret_access_key",
        regex: "awscn[_-]?secret[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "awssecretkey",
        regex: "awssecretkey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "b2_app_key",
        regex: "b2[_-]?app[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "b2_bucket",
        regex: "b2[_-]?bucket(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "bintray_api_key",
        regex: "bintray[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "bintray_apikey",
        regex: "bintray[_-]?apikey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "bintray_gpg_password",
        regex: "bintray[_-]?gpg[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "bintray_key",
        regex: "bintray[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "bintray_token",
        regex: "bintray[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "bintraykey",
        regex: "bintraykey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "bluemix_api_key",
        regex: "bluemix[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "bluemix_auth",
        regex: "bluemix[_-]?auth(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "bluemix_pass",
        regex: "bluemix[_-]?pass(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "bluemix_pass_prod",
        regex: "bluemix[_-]?pass[_-]?prod(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "bluemix_password",
        regex: "bluemix[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "bluemix_pwd",
        regex: "bluemix[_-]?pwd(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "bluemix_username",
        regex: "bluemix[_-]?username(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "brackets_repo_oauth_token",
        regex: "brackets[_-]?repo[_-]?oauth[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "browser_stack_access_key",
        regex: "browser[_-]?stack[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "browserstack_access_key",
        regex: "browserstack[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "bucketeer_aws_access_key_id",
        regex: "bucketeer[_-]?aws[_-]?access[_-]?key[_-]?id(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "bucketeer_aws_secret_access_key",
        regex: "bucketeer[_-]?aws[_-]?secret[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "built_branch_deploy_key",
        regex: "built[_-]?branch[_-]?deploy[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "bundlesize_github_token",
        regex: "bundlesize[_-]?github[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "bx_password",
        regex: "bx[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "bx_username",
        regex: "bx[_-]?username(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cache_s3_secret_key",
        regex: "cache[_-]?s3[_-]?secret[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cargo_token",
        regex: "cargo[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cattle_access_key",
        regex: "cattle[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cattle_agent_instance_auth",
        regex: "cattle[_-]?agent[_-]?instance[_-]?auth(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cattle_secret_key",
        regex: "cattle[_-]?secret[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "censys_secret",
        regex: "censys[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "certificate_password",
        regex: "certificate[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cf_password",
        regex: "cf[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cheverny_token",
        regex: "cheverny[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "chrome_client_secret",
        regex: "chrome[_-]?client[_-]?secret(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "chrome_refresh_token",
        regex: "chrome[_-]?refresh[_-]?token(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "ci_deploy_password",
        regex: "ci[_-]?deploy[_-]?password(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "ci_project_url",
        regex: "ci[_-]?project[_-]?url(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "ci_registry_user",
        regex: "ci[_-]?registry[_-]?user(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "ci_server_name",
        regex: "ci[_-]?server[_-]?name(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "ci_user_token",
        regex: "ci[_-]?user[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "claimr_database",
        regex: "claimr[_-]?database(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "claimr_db",
        regex: "claimr[_-]?db(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "claimr_superuser",
        regex: "claimr[_-]?superuser(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "claimr_token",
        regex: "claimr[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cli_e2e_cma_token",
        regex: "cli[_-]?e2e[_-]?cma[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "client_secret",
        regex: "client[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "clojars_password",
        regex: "clojars[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cloud_api_key",
        regex: "cloud[_-]?api[_-]?key(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "cloudant_archived_database",
        regex: "cloudant[_-]?archived[_-]?database(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cloudant_audited_database",
        regex: "cloudant[_-]?audited[_-]?database(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cloudant_database",
        regex: "cloudant[_-]?database(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cloudant_instance",
        regex: "cloudant[_-]?instance(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cloudant_order_database",
        regex: "cloudant[_-]?order[_-]?database(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cloudant_parsed_database",
        regex: "cloudant[_-]?parsed[_-]?database(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cloudant_password",
        regex: "cloudant[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cloudant_processed_database",
        regex: "cloudant[_-]?processed[_-]?database(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cloudant_service_database",
        regex: "cloudant[_-]?service[_-]?database(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cloudflare_api_key",
        regex: "cloudflare[_-]?api[_-]?key(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "cloudflare_auth_email",
        regex: "cloudflare[_-]?auth[_-]?email(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "cloudflare_auth_key",
        regex: "cloudflare[_-]?auth[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cloudflare_email",
        regex: "cloudflare[_-]?email(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cloudinary_url",
        regex: "cloudinary[_-]?url(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cloudinary_url_staging",
        regex: "cloudinary[_-]?url[_-]?staging(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "clu_repo_url",
        regex: "clu[_-]?repo[_-]?url(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "clu_ssh_private_key_base64",
        regex: "clu[_-]?ssh[_-]?private[_-]?key[_-]?base64(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cn_access_key_id",
        regex: "cn[_-]?access[_-]?key[_-]?id(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cn_secret_access_key",
        regex: "cn[_-]?secret[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cocoapods_trunk_email",
        regex: "cocoapods[_-]?trunk[_-]?email(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cocoapods_trunk_token",
        regex: "cocoapods[_-]?trunk[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "codacy_project_token",
        regex: "codacy[_-]?project[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "codeclimate",
        regex: "(codeclima.{0,50}(\"|')?[0-9a-f]{64}(\"|')?)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "codeclimate_repo_token",
        regex: "codeclimate[_-]?repo[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "codecov_token",
        regex: "codecov[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "coding_token",
        regex: "coding[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "conekta_apikey",
        regex: "conekta[_-]?apikey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "consumer_key",
        regex: "consumer[_-]?key(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "consumerkey",
        regex: "consumerkey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "contentful_access_token",
        regex: "contentful[_-]?access[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "contentful_cma_test_token",
        regex: "contentful[_-]?cma[_-]?test[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "contentful_integration_management_token",
        regex: "contentful[_-]?integration[_-]?management[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "contentful_php_management_test_token",
        regex:
          "contentful[_-]?php[_-]?management[_-]?test[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "contentful_test_org_cma_token",
        regex: "contentful[_-]?test[_-]?org[_-]?cma[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "contentful_v2_access_token",
        regex: "contentful[_-]?v2[_-]?access[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "conversation_password",
        regex: "conversation[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "conversation_username",
        regex: "conversation[_-]?username(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cos_secrets",
        regex: "cos[_-]?secrets(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "coveralls_api_token",
        regex: "coveralls[_-]?api[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "coveralls_repo_token",
        regex: "coveralls[_-]?repo[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "coveralls_token",
        regex: "coveralls[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "coverity_scan_token",
        regex: "coverity[_-]?scan[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "cypress_record_key",
        regex: "cypress[_-]?record[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "danger_github_api_token",
        regex: "danger[_-]?github[_-]?api[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "database_host",
        regex: "database[_-]?host(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "database_name",
        regex: "database[_-]?name(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "database_password",
        regex: "database[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "database_port",
        regex: "database[_-]?port(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "database_user",
        regex: "database[_-]?user(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "database_username",
        regex: "database[_-]?username(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "datadog_api_key",
        regex: "datadog[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "datadog_app_key",
        regex: "datadog[_-]?app[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "db_connection",
        regex: "db[_-]?connection(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "db_database",
        regex: "db[_-]?database(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "db_host",
        regex: "db[_-]?host(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "db_password",
        regex: "db[_-]?password(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "db_pw",
        regex: "db[_-]?pw(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "db_user",
        regex: "db[_-]?user(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "db_username",
        regex: "db[_-]?username(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ddg_test_email",
        regex: "ddg[_-]?test[_-]?email(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ddg_test_email_pw",
        regex: "ddg[_-]?test[_-]?email[_-]?pw(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ddgc_github_token",
        regex: "ddgc[_-]?github[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "deploy_password",
        regex: "deploy[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "deploy_secure",
        regex: "deploy[_-]?secure(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "deploy_token",
        regex: "deploy[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "deploy_user",
        regex: "deploy[_-]?user(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "dgpg_passphrase",
        regex: "dgpg[_-]?passphrase(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "digitalocean_access_token",
        regex: "digitalocean[_-]?access[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "digitalocean_ssh_key_body",
        regex: "digitalocean[_-]?ssh[_-]?key[_-]?body(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "digitalocean_ssh_key_ids",
        regex: "digitalocean[_-]?ssh[_-]?key[_-]?ids(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "docker_hub_password",
        regex: "docker[_-]?hub[_-]?password(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "docker_key",
        regex: "docker[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "docker_pass",
        regex: "docker[_-]?pass(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "docker_passwd",
        regex: "docker[_-]?passwd(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "docker_password",
        regex: "docker[_-]?password(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "docker_postgres_url",
        regex: "docker[_-]?postgres[_-]?url(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "docker_token",
        regex: "docker[_-]?token(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "dockerhub_password",
        regex: "dockerhub[_-]?password(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "dockerhubpassword",
        regex: "dockerhubpassword(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "doordash_auth_token",
        regex: "doordash[_-]?auth[_-]?token(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "dropbox_oauth_bearer",
        regex: "dropbox[_-]?oauth[_-]?bearer(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "droplet_travis_password",
        regex: "droplet[_-]?travis[_-]?password(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "dsonar_login",
        regex: "dsonar[_-]?login(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "dsonar_projectkey",
        regex: "dsonar[_-]?projectkey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "elastic_cloud_auth",
        regex: "elastic[_-]?cloud[_-]?auth(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "elasticsearch_password",
        regex: "elasticsearch[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "encryption_password",
        regex: "encryption[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "end_user_password",
        regex: "end[_-]?user[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "env_github_oauth_token",
        regex: "env[_-]?github[_-]?oauth[_-]?token(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "env_heroku_api_key",
        regex: "env[_-]?heroku[_-]?api[_-]?key(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "env_key",
        regex: "env[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "env_secret",
        regex: "env[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "env_secret_access_key",
        regex: "env[_-]?secret[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "env_sonatype_password",
        regex: "env[_-]?sonatype[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "eureka_awssecretkey",
        regex: "eureka[_-]?awssecretkey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "exp_password",
        regex: "exp[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "facebook_access_token",
        regex: "(EAACEdEose0cBA[0-9A-Za-z]+)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "facebook_oauth",
        regex:
          "[f|F][a|A][c|C][e|E][b|B][o|O][o|O][k|K].*['|\"][0-9a-f]{32}['|\"]",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "file_password",
        regex: "file[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "firebase_api_json",
        regex: "firebase[_-]?api[_-]?json(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "firebase_api_token",
        regex: "firebase[_-]?api[_-]?token(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "firebase_key",
        regex: "firebase[_-]?key(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "firebase_project_develop",
        regex: "firebase[_-]?project[_-]?develop(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "firebase_token",
        regex: "firebase[_-]?token(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "firefox_secret",
        regex: "firefox[_-]?secret(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "flask_secret_key",
        regex: "flask[_-]?secret[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "flickr_api_key",
        regex: "flickr[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "flickr_api_secret",
        regex: "flickr[_-]?api[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "fossa_api_key",
        regex: "fossa[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ftp_host",
        regex: "ftp[_-]?host(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ftp_login",
        regex: "ftp[_-]?login(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ftp_password",
        regex: "ftp[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ftp_pw",
        regex: "ftp[_-]?pw(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "ftp_user",
        regex: "ftp[_-]?user(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ftp_username",
        regex: "ftp[_-]?username(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gcloud_bucket",
        regex: "gcloud[_-]?bucket(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gcloud_project",
        regex: "gcloud[_-]?project(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gcloud_service_key",
        regex: "gcloud[_-]?service[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gcr_password",
        regex: "gcr[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gcs_bucket",
        regex: "gcs[_-]?bucket(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gh_api_key",
        regex: "gh[_-]?api[_-]?key(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "gh_email",
        regex: "gh[_-]?email(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gh_next_oauth_client_secret",
        regex: "gh[_-]?next[_-]?oauth[_-]?client[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gh_next_unstable_oauth_client_id",
        regex:
          "gh[_-]?next[_-]?unstable[_-]?oauth[_-]?client[_-]?id(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gh_next_unstable_oauth_client_secret",
        regex:
          "gh[_-]?next[_-]?unstable[_-]?oauth[_-]?client[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gh_oauth_client_secret",
        regex: "gh[_-]?oauth[_-]?client[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gh_oauth_token",
        regex: "gh[_-]?oauth[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gh_repo_token",
        regex: "gh[_-]?repo[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gh_token",
        regex: "gh[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gh_unstable_oauth_client_secret",
        regex: "gh[_-]?unstable[_-]?oauth[_-]?client[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ghb_token",
        regex: "ghb[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ghost_api_key",
        regex: "ghost[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "git_author_email",
        regex: "git[_-]?author[_-]?email(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "git_author_name",
        regex: "git[_-]?author[_-]?name(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "git_committer_email",
        regex: "git[_-]?committer[_-]?email(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "git_committer_name",
        regex: "git[_-]?committer[_-]?name(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "git_email",
        regex: "git[_-]?email(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "git_name",
        regex: "git[_-]?name(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "git_token",
        regex: "git[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "github_access_token - 1",
        regex: "github[_-]?access[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "github_access_token - 2",
        regex: "[a-zA-Z0-9_-]*:[a-zA-Z0-9_-]+@github.com*",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "github_api_key",
        regex: "github[_-]?api[_-]?key(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "github_api_token",
        regex: "github[_-]?api[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "github_auth",
        regex: "github[_-]?auth(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "github_auth_token",
        regex: "github[_-]?auth[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "github_client_secret",
        regex: "github[_-]?client[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "github_deploy_hb_doc_pass",
        regex: "github[_-]?deploy[_-]?hb[_-]?doc[_-]?pass(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "github_deployment_token",
        regex: "github[_-]?deployment[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "github_hunter_token",
        regex: "github[_-]?hunter[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "github_hunter_username",
        regex: "github[_-]?hunter[_-]?username(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "github_key",
        regex: "github[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "github_oauth",
        regex: "github[_-]?oauth(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "github_oauth_token",
        regex: "github[_-]?oauth[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "github_password",
        regex: "github[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "github_pwd",
        regex: "github[_-]?pwd(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "github_release_token",
        regex: "github[_-]?release[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "github_repo",
        regex: "github[_-]?repo(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "github_token",
        regex: "github[_-]?token(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "github_tokens",
        regex: "github[_-]?tokens(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "gitlab_user_email",
        regex: "gitlab[_-]?user[_-]?email(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gogs_password",
        regex: "gogs[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "google_account_type",
        regex: "google[_-]?account[_-]?type(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "google_client_email",
        regex: "google[_-]?client[_-]?email(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "google_client_id",
        regex: "google[_-]?client[_-]?id(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "google_client_secret",
        regex: "google[_-]?client[_-]?secret(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "google_maps_api_key",
        regex: "google[_-]?maps[_-]?api[_-]?key(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "google_oauth",
        regex: "(ya29.[0-9A-Za-z-_]+)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "google_patterns",
        regex: "(?:google_client_id|google_client_secret|google_client_token)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "google_private_key",
        regex: "google[_-]?private[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "google_url",
        regex: "([0-9]{12}-[a-z0-9]{32}.apps.googleusercontent.com)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gpg_key_name",
        regex: "gpg[_-]?key[_-]?name(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gpg_keyname",
        regex: "gpg[_-]?keyname(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gpg_ownertrust",
        regex: "gpg[_-]?ownertrust(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gpg_passphrase",
        regex: "gpg[_-]?passphrase(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gpg_private_key",
        regex: "gpg[_-]?private[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gpg_secret_keys",
        regex: "gpg[_-]?secret[_-]?keys(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gradle_publish_key",
        regex: "gradle[_-]?publish[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gradle_publish_secret",
        regex: "gradle[_-]?publish[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gradle_signing_key_id",
        regex: "gradle[_-]?signing[_-]?key[_-]?id(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gradle_signing_password",
        regex: "gradle[_-]?signing[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "gren_github_token",
        regex: "gren[_-]?github[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "grgit_user",
        regex: "grgit[_-]?user(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "hab_auth_token",
        regex: "hab[_-]?auth[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "hab_key",
        regex: "hab[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "hb_codesign_gpg_pass",
        regex: "hb[_-]?codesign[_-]?gpg[_-]?pass(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "hb_codesign_key_pass",
        regex: "hb[_-]?codesign[_-]?key[_-]?pass(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "heroku_api_key",
        regex: "heroku[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "heroku_api_key_api_key",
        regex:
          "([h|H][e|E][r|R][o|O][k|K][u|U].{0,30}[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12})",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "heroku_email",
        regex: "heroku[_-]?email(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "heroku_token",
        regex: "heroku[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "hockeyapp",
        regex: "hockey.{0,50}(\"|')?[0-9a-f]{32}(\"|')?",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "hockeyapp_token",
        regex: "hockeyapp[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "homebrew_github_api_token",
        regex: "homebrew[_-]?github[_-]?api[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "hub_dxia2_password",
        regex: "hub[_-]?dxia2[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ij_repo_password",
        regex: "ij[_-]?repo[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ij_repo_username",
        regex: "ij[_-]?repo[_-]?username(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "index_name",
        regex: "index[_-]?name(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "integration_test_api_key",
        regex: "integration[_-]?test[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "integration_test_appid",
        regex: "integration[_-]?test[_-]?appid(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "internal_secrets",
        regex: "internal[_-]?secrets(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ios_docs_deploy_token",
        regex: "ios[_-]?docs[_-]?deploy[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "itest_gh_token",
        regex: "itest[_-]?gh[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "jdbc",
        regex: "mysql: jdbc:mysql(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "jdbc_databaseurl",
        regex: "jdbc[_-]?databaseurl(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "jdbc_host",
        regex: "jdbc[_-]?host(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "jwt_secret",
        regex: "jwt[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "kafka_admin_url",
        regex: "kafka[_-]?admin[_-]?url(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "kafka_instance_name",
        regex: "kafka[_-]?instance[_-]?name(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "kafka_rest_url",
        regex: "kafka[_-]?rest[_-]?url(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "keystore_pass",
        regex: "keystore[_-]?pass(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "kovan_private_key",
        regex: "kovan[_-]?private[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "kubecfg_s3_path",
        regex: "kubecfg[_-]?s3[_-]?path(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "kubeconfig",
        regex: "kubeconfig(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "kxoltsn3vogdop92m",
        regex: "kxoltsn3vogdop92m(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "leanplum_key",
        regex: "leanplum[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "lektor_deploy_password",
        regex: "lektor[_-]?deploy[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "lektor_deploy_username",
        regex: "lektor[_-]?deploy[_-]?username(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "lighthouse_api_key",
        regex: "lighthouse[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "linux_signing_key",
        regex: "linux[_-]?signing[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ll_publish_url",
        regex: "ll[_-]?publish[_-]?url(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ll_shared_key",
        regex: "ll[_-]?shared[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "looker_test_runner_client_secret",
        regex: "looker[_-]?test[_-]?runner[_-]?client[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "lottie_happo_api_key",
        regex: "lottie[_-]?happo[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "lottie_happo_secret_key",
        regex: "lottie[_-]?happo[_-]?secret[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "lottie_s3_secret_key",
        regex: "lottie[_-]?s3[_-]?secret[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "lottie_upload_cert_key_password",
        regex: "lottie[_-]?upload[_-]?cert[_-]?key[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "lottie_upload_cert_key_store_password",
        regex:
          "lottie[_-]?upload[_-]?cert[_-]?key[_-]?store[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "magento_auth_password",
        regex: "magento[_-]?auth[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "magento_auth_username",
        regex: "magento[_-]?auth[_-]?username (=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "magento_password",
        regex: "magento[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mail_password",
        regex: "mail[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mailchimp",
        regex: "(W(?:[a-f0-9]{32}(-us[0-9]{1,2}))a-zA-Z0-9)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "mailchimp_api_key",
        regex: "mailchimp[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mailchimp_key",
        regex: "mailchimp[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mailer_password",
        regex: "mailer[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mailgun",
        regex: "(key-[0-9a-f]{32})",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mailgun_api_key",
        regex: "mailgun[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mailgun_apikey",
        regex: "mailgun[_-]?apikey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mailgun_password",
        regex: "mailgun[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mailgun_priv_key",
        regex: "mailgun[_-]?priv[_-]?key(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "mailgun_pub_apikey",
        regex: "mailgun[_-]?pub[_-]?apikey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mailgun_pub_key",
        regex: "mailgun[_-]?pub[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mailgun_secret_api_key",
        regex: "mailgun[_-]?secret[_-]?api[_-]?key(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "manage_key",
        regex: "manage[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "manage_secret",
        regex: "manage[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "management_token",
        regex: "management[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "managementapiaccesstoken",
        regex: "managementapiaccesstoken(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mandrill_api_key",
        regex: "mandrill[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "manifest_app_token",
        regex: "manifest[_-]?app[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "manifest_app_url",
        regex: "manifest[_-]?app[_-]?url(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mapbox_access_token",
        regex: "mapbox[_-]?access[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mapbox_api_token",
        regex: "mapbox[_-]?api[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mapbox_aws_access_key_id",
        regex: "mapbox[_-]?aws[_-]?access[_-]?key[_-]?id(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mapbox_aws_secret_access_key",
        regex: "mapbox[_-]?aws[_-]?secret[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mapboxaccesstoken",
        regex: "mapboxaccesstoken(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "master_password",
        regex: "(master_password).+",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "mg_api_key",
        regex: "mg[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mg_public_api_key",
        regex: "mg[_-]?public[_-]?api[_-]?key(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "mh_apikey",
        regex: "mh[_-]?apikey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mh_password",
        regex: "mh[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mile_zero_key",
        regex: "mile[_-]?zero[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "minio_access_key",
        regex: "minio[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "minio_secret_key",
        regex: "minio[_-]?secret[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "multi_bob_sid",
        regex: "multi[_-]?bob[_-]?sid(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "multi_connect_sid",
        regex: "multi[_-]?connect[_-]?sid(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "multi_disconnect_sid",
        regex: "multi[_-]?disconnect[_-]?sid(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "multi_workflow_sid",
        regex: "multi[_-]?workflow[_-]?sid(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "multi_workspace_sid",
        regex: "multi[_-]?workspace[_-]?sid(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "my_secret_env",
        regex: "my[_-]?secret[_-]?env(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mysql_database",
        regex: "mysql[_-]?database(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mysql_hostname",
        regex: "mysql[_-]?hostname(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mysql_password",
        regex: "mysql[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mysql_root_password",
        regex: "mysql[_-]?root[_-]?password(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "mysql_user",
        regex: "mysql[_-]?user(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mysql_username",
        regex: "mysql[_-]?username(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mysqlmasteruser",
        regex: "mysqlmasteruser(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "mysqlsecret",
        regex: "mysqlsecret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "nativeevents",
        regex: "nativeevents(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "netlify_api_key",
        regex: "netlify[_-]?api[_-]?key(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "new_relic_beta_token",
        regex: "new[_-]?relic[_-]?beta[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "nexus_password",
        regex: "nexus[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "nexuspassword",
        regex: "nexuspassword(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ngrok_auth_token",
        regex: "ngrok[_-]?auth[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ngrok_token",
        regex: "ngrok[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "node_env",
        regex: "node[_-]?env(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "node_pre_gyp_accesskeyid",
        regex: "node[_-]?pre[_-]?gyp[_-]?accesskeyid(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "node_pre_gyp_github_token",
        regex: "node[_-]?pre[_-]?gyp[_-]?github[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "node_pre_gyp_secretaccesskey",
        regex: "node[_-]?pre[_-]?gyp[_-]?secretaccesskey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "non_token",
        regex: "non[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "now_token",
        regex: "now[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "npm_api_key",
        regex: "npm[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "npm_api_token",
        regex: "npm[_-]?api[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "npm_auth_token",
        regex: "npm[_-]?auth[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "npm_email",
        regex: "npm[_-]?email(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "npm_password",
        regex: "npm[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "npm_secret_key",
        regex: "npm[_-]?secret[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "npm_token - 1",
        regex: "npm[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "nuget_api_key - 1",
        regex: "(oy2[a-z0-9]{43})",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "nuget_api_key - 2",
        regex: "nuget[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "numbers_service_pass",
        regex: "numbers[_-]?service[_-]?pass(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "oauth_token",
        regex: "oauth[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "object_storage_password",
        regex: "object[_-]?storage[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "object_storage_region_name",
        regex: "object[_-]?storage[_-]?region[_-]?name(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "object_store_bucket",
        regex: "object[_-]?store[_-]?bucket(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "object_store_creds",
        regex: "object[_-]?store[_-]?creds(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "oc_pass",
        regex: "oc[_-]?pass(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "octest_app_password",
        regex: "octest[_-]?app[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "octest_app_username",
        regex: "octest[_-]?app[_-]?username(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "octest_password",
        regex: "octest[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ofta_key",
        regex: "ofta[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ofta_region",
        regex: "ofta[_-]?region(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ofta_secret",
        regex: "ofta[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "okta_client_token",
        regex: "okta[_-]?client[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "okta_oauth2_client_secret",
        regex: "okta[_-]?oauth2[_-]?client[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "okta_oauth2_clientsecret",
        regex: "okta[_-]?oauth2[_-]?clientsecret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "omise_key",
        regex: "omise[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "omise_pkey",
        regex: "omise[_-]?pkey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "omise_pubkey",
        regex: "omise[_-]?pubkey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "omise_skey",
        regex: "omise[_-]?skey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "onesignal_api_key",
        regex: "onesignal[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "onesignal_user_auth_key",
        regex: "onesignal[_-]?user[_-]?auth[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "open_whisk_key",
        regex: "open[_-]?whisk[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "openwhisk_key",
        regex: "openwhisk[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "os_auth_url",
        regex: "os[_-]?auth[_-]?url(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "os_password",
        regex: "os[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ossrh_jira_password",
        regex: "ossrh[_-]?jira[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ossrh_pass",
        regex: "ossrh[_-]?pass(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ossrh_password",
        regex: "ossrh[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ossrh_secret",
        regex: "ossrh[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ossrh_username",
        regex: "ossrh[_-]?username(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "outlook_team",
        regex: "(https://outlook.office.com/webhook/[0-9a-f-]{36}@)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "packagecloud_token",
        regex: "packagecloud[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "pagerduty_apikey",
        regex: "pagerduty[_-]?apikey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "parse_js_key",
        regex: "parse[_-]?js[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "passwordtravis",
        regex: "passwordtravis(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "paypal_braintree_access_token",
        regex: "(access_token$production$[0-9a-z]{16}$[0-9a-f]{32})",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "paypal_client_secret",
        regex: "paypal[_-]?client[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "percy_project",
        regex: "percy[_-]?project(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "percy_token",
        regex: "percy[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "personal_key",
        regex: "personal[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "personal_secret",
        regex: "personal[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "pg_database",
        regex: "pg[_-]?database(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "pg_host",
        regex: "pg[_-]?host(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "places_api_key",
        regex: "places[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "places_apikey",
        regex: "places[_-]?apikey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "plotly_apikey",
        regex: "plotly[_-]?apikey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "plugin_password",
        regex: "plugin[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "postgres_env_postgres_db",
        regex: "postgres[_-]?env[_-]?postgres[_-]?db(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "postgres_env_postgres_password",
        regex: "postgres[_-]?env[_-]?postgres[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "postgresql_db",
        regex: "postgresql[_-]?db(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "postgresql_pass",
        regex: "postgresql[_-]?pass(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "prebuild_auth",
        regex: "prebuild[_-]?auth(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "preferred_username",
        regex: "preferred[_-]?username(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "pring_mail_username",
        regex: "pring[_-]?mail[_-]?username(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "private_key",
        regex:
          "-----(?:(?:BEGIN|END) )(?:(?:EC|PGP|DSA|RSA|OPENSSH).)?PRIVATE.KEY(.BLOCK)?-----",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "private_signing_password",
        regex: "private[_-]?signing[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "prod_access_key_id",
        regex: "prod[_-]?access[_-]?key[_-]?id(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "prod_password",
        regex: "prod[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "prod_secret_key",
        regex: "prod[_-]?secret[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "project_config",
        regex: "project[_-]?config(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "publish_access",
        regex: "publish[_-]?access(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "publish_key",
        regex: "publish[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "publish_secret",
        regex: "publish[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "pushover_token",
        regex: "pushover[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "pypi_passowrd",
        regex: "pypi[_-]?passowrd(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "qiita_token",
        regex: "qiita[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "quip_token",
        regex: "quip[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "rabbitmq_password",
        regex: "rabbitmq[_-]?password(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "randrmusicapiaccesstoken",
        regex: "randrmusicapiaccesstoken(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "redis_stunnel_urls",
        regex: "redis[_-]?stunnel[_-]?urls(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "rediscloud_url",
        regex: "rediscloud[_-]?url(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "refresh_token",
        regex: "refresh[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "registry_pass",
        regex: "registry[_-]?pass(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "registry_secure",
        regex: "registry[_-]?secure(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "release_gh_token",
        regex: "release[_-]?gh[_-]?token(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "release_token",
        regex: "release[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "reporting_webdav_pwd",
        regex: "reporting[_-]?webdav[_-]?pwd(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "reporting_webdav_url",
        regex: "reporting[_-]?webdav[_-]?url(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "repotoken",
        regex: "repotoken(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "rest_api_key",
        regex: "rest[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "rinkeby_private_key",
        regex: "rinkeby[_-]?private[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ropsten_private_key",
        regex: "ropsten[_-]?private[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "route53_access_key_id",
        regex: "route53[_-]?access[_-]?key[_-]?id(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "rtd_key_pass",
        regex: "rtd[_-]?key[_-]?pass(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "rtd_store_pass",
        regex: "rtd[_-]?store[_-]?pass(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "rubygems_auth_token",
        regex: "rubygems[_-]?auth[_-]?token(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "s3_access_key",
        regex: "s3[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "s3_access_key_id",
        regex: "s3[_-]?access[_-]?key[_-]?id(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "s3_bucket_name_app_logs",
        regex: "s3[_-]?bucket[_-]?name[_-]?app[_-]?logs(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "s3_bucket_name_assets",
        regex: "s3[_-]?bucket[_-]?name[_-]?assets(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "s3_external_3_amazonaws_com",
        regex: "s3[_-]?external[_-]?3[_-]?amazonaws[_-]?com(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "s3_key",
        regex: "s3[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "s3_key_app_logs",
        regex: "s3[_-]?key[_-]?app[_-]?logs(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "s3_key_assets",
        regex: "s3[_-]?key[_-]?assets(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "s3_secret_app_logs",
        regex: "s3[_-]?secret[_-]?app[_-]?logs(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "s3_secret_assets",
        regex: "s3[_-]?secret[_-]?assets(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "s3_secret_key",
        regex: "s3[_-]?secret[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "s3_user_secret",
        regex: "s3[_-]?user[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sacloud_access_token",
        regex: "sacloud[_-]?access[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sacloud_access_token_secret",
        regex: "sacloud[_-]?access[_-]?token[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sacloud_api",
        regex: "sacloud[_-]?api(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "salesforce_bulk_test_password",
        regex: "salesforce[_-]?bulk[_-]?test[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "salesforce_bulk_test_security_token",
        regex: "salesforce[_-]?bulk[_-]?test[_-]?security[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sandbox_access_token",
        regex: "sandbox[_-]?access[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sandbox_aws_access_key_id",
        regex: "sandbox[_-]?aws[_-]?access[_-]?key[_-]?id(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sandbox_aws_secret_access_key",
        regex: "sandbox[_-]?aws[_-]?secret[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sauce_access_key",
        regex: "sauce[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sauce_token",
        regex: "(sauce.{0,50}(\"|')?[0-9a-f-]{36}(\"|')?)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "scrutinizer_token",
        regex: "scrutinizer[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sdr_token",
        regex: "sdr[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "secret_0",
        regex: "secret[_-]?0(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "secret_1",
        regex: "secret[_-]?1(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "secret_10",
        regex: "secret[_-]?10(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "secret_11",
        regex: "secret[_-]?11(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "secret_2",
        regex: "secret[_-]?2(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "secret_3",
        regex: "secret[_-]?3(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "secret_4",
        regex: "secret[_-]?4(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "secret_5",
        regex: "secret[_-]?5(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "secret_6",
        regex: "secret[_-]?6(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "secret_7",
        regex: "secret[_-]?7(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "secret_8",
        regex: "secret[_-]?8(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "secret_9",
        regex: "secret[_-]?9(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "secret_key_base",
        regex: "secret[_-]?key[_-]?base(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "secretaccesskey",
        regex: "secretaccesskey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "secretkey",
        regex: "secretkey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "segment_api_key",
        regex: "segment[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "selion_log_level_dev",
        regex: "selion[_-]?log[_-]?level[_-]?dev(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "selion_selenium_host",
        regex: "selion[_-]?selenium[_-]?host(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sendgrid - 2",
        regex: "sendgrid(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sendgrid_api_key - 1",
        regex: "sendgrid[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sendgrid_key",
        regex: "sendgrid[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sendgrid_password",
        regex: "sendgrid[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sendgrid_user",
        regex: "sendgrid[_-]?user(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sendgrid_username",
        regex: "sendgrid[_-]?username(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sendwithus_key",
        regex: "sendwithus[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sentry_auth_token",
        regex: "sentry[_-]?auth[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sentry_default_org",
        regex: "sentry[_-]?default[_-]?org(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sentry_endpoint",
        regex: "sentry[_-]?endpoint(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sentry_key",
        regex: "sentry[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "service_account_secret",
        regex: "service[_-]?account[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ses_access_key",
        regex: "ses[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ses_secret_key",
        regex: "ses[_-]?secret[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "setdstaccesskey",
        regex: "setdstaccesskey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "setdstsecretkey",
        regex: "setdstsecretkey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "setsecretkey",
        regex: "setsecretkey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "signing_key",
        regex: "signing[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "signing_key_password",
        regex: "signing[_-]?key[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "signing_key_secret",
        regex: "signing[_-]?key[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "signing_key_sid",
        regex: "signing[_-]?key[_-]?sid(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "slack_webhook_url",
        regex:
          "(hooks.slack.com/services/T[A-Z0-9]{8}/B[A-Z0-9]{8}/[a-zA-Z0-9]{1,})",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "slash_developer_space",
        regex: "slash[_-]?developer[_-]?space(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "slash_developer_space_key",
        regex: "slash[_-]?developer[_-]?space[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "slate_user_email",
        regex: "slate[_-]?user[_-]?email(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "snoowrap_client_secret",
        regex: "snoowrap[_-]?client[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "snoowrap_password",
        regex: "snoowrap[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "snoowrap_refresh_token",
        regex: "snoowrap[_-]?refresh[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "snyk_api_token",
        regex: "snyk[_-]?api[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "snyk_token",
        regex: "snyk[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "socrata_app_token",
        regex: "socrata[_-]?app[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "socrata_password",
        regex: "socrata[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sonar_organization_key",
        regex: "sonar[_-]?organization[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sonar_project_key",
        regex: "sonar[_-]?project[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sonar_token",
        regex: "sonar[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sonarqube_docs_api_key",
        regex: "(sonar.{0,50}(\"|')?[0-9a-f]{40}(\"|')?)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sonatype_gpg_key_name",
        regex: "sonatype[_-]?gpg[_-]?key[_-]?name(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sonatype_gpg_passphrase",
        regex: "sonatype[_-]?gpg[_-]?passphrase(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sonatype_nexus_password",
        regex: "sonatype[_-]?nexus[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sonatype_pass",
        regex: "sonatype[_-]?pass(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sonatype_password",
        regex: "sonatype[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sonatype_token_password",
        regex: "sonatype[_-]?token[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sonatype_token_user",
        regex: "sonatype[_-]?token[_-]?user(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sonatypepassword",
        regex: "sonatypepassword(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "soundcloud_client_secret",
        regex: "soundcloud[_-]?client[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "soundcloud_password",
        regex: "soundcloud[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "spaces_access_key_id",
        regex: "spaces[_-]?access[_-]?key[_-]?id(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "spaces_secret_access_key",
        regex: "spaces[_-]?secret[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "spotify_api_access_token",
        regex: "spotify[_-]?api[_-]?access[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "spotify_api_client_secret",
        regex: "spotify[_-]?api[_-]?client[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "spring_mail_password",
        regex: "spring[_-]?mail[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sqsaccesskey",
        regex: "sqsaccesskey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sqssecretkey",
        regex: "sqssecretkey(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "square_app_secret",
        regex: "(sq0[a-z]{3}-[0-9A-Za-z-_]{20,50})",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "square_reader_sdk_repository_password",
        regex:
          "square[_-]?reader[_-]?sdk[_-]?repository[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "srcclr_api_token",
        regex: "srcclr[_-]?api[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ssh_password",
        regex: "(sshpass -p.*['|\"])",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "sshpass",
        regex: "sshpass(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "ssmtp_config",
        regex: "ssmtp[_-]?config(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "staging_base_url_runscope",
        regex: "staging[_-]?base[_-]?url[_-]?runscope(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "star_test_aws_access_key_id",
        regex: "star[_-]?test[_-]?aws[_-]?access[_-]?key[_-]?id(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "star_test_bucket",
        regex: "star[_-]?test[_-]?bucket(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "star_test_location",
        regex: "star[_-]?test[_-]?location(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "star_test_secret_access_key",
        regex: "star[_-]?test[_-]?secret[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "starship_account_sid",
        regex: "starship[_-]?account[_-]?sid(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "starship_auth_token",
        regex: "starship[_-]?auth[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "stormpath_api_key_id",
        regex: "stormpath[_-]?api[_-]?key[_-]?id(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "stormpath_api_key_secret",
        regex: "stormpath[_-]?api[_-]?key[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "strip_publishable_key",
        regex: "strip[_-]?publishable[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "strip_secret_key",
        regex: "strip[_-]?secret[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "stripe_private",
        regex: "stripe[_-]?private(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "stripe_public",
        regex: "stripe[_-]?public(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "stripe_restricted_api",
        regex: "(rk_live_[0-9a-zA-Z]{24,34})",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "stripe_standard_api",
        regex: "(sk_live_[0-9a-zA-Z]{24,34})",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "surge_login",
        regex: "surge[_-]?login(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "surge_token",
        regex: "surge[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "svn_pass",
        regex: "svn[_-]?pass(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "tesco_api_key",
        regex: "tesco[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "test_github_token",
        regex: "test[_-]?github[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "test_test",
        regex: "test[_-]?test(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "tester_keys_password",
        regex: "tester[_-]?keys[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "thera_oss_access_key",
        regex: "thera[_-]?oss[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "token_core_java",
        regex: "token[_-]?core[_-]?java(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "travis_access_token",
        regex: "travis[_-]?access[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "travis_api_token",
        regex: "travis[_-]?api[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "travis_branch",
        regex: "travis[_-]?branch(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "travis_com_token",
        regex: "travis[_-]?com[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "travis_e2e_token",
        regex: "travis[_-]?e2e[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "travis_gh_token",
        regex: "travis[_-]?gh[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "travis_pull_request",
        regex: "travis[_-]?pull[_-]?request(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "travis_secure_env_vars",
        regex: "travis[_-]?secure[_-]?env[_-]?vars(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "travis_token",
        regex: "travis[_-]?token(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "trex_client_token",
        regex: "trex[_-]?client[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "trex_okta_client_token",
        regex: "trex[_-]?okta[_-]?client[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "twilio_api_key",
        regex: "twilio[_-]?api[_-]?key(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "twilio_api_secret",
        regex: "twilio[_-]?api[_-]?secret(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "twilio_chat_account_api_service",
        regex: "twilio[_-]?chat[_-]?account[_-]?api[_-]?service(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "twilio_configuration_sid",
        regex: "twilio[_-]?configuration[_-]?sid(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "twilio_sid",
        regex: "twilio[_-]?sid(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "twilio_token",
        regex: "twilio[_-]?token(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "twine_password",
        regex: "twine[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "twitter_consumer_key",
        regex: "twitter[_-]?consumer[_-]?key(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "twitter_consumer_secret",
        regex: "twitter[_-]?consumer[_-]?secret(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "twitteroauthaccesssecret",
        regex: "twitteroauthaccesssecret(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "twitteroauthaccesstoken",
        regex: "twitteroauthaccesstoken(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "unity_password",
        regex: "unity[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "unity_serial",
        regex: "unity[_-]?serial(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "urban_key",
        regex: "urban[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "urban_master_secret",
        regex: "urban[_-]?master[_-]?secret(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "urban_secret",
        regex: "urban[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "us_east_1_elb_amazonaws_com",
        regex: "us[_-]?east[_-]?1[_-]?elb[_-]?amazonaws[_-]?com(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "use_ssh",
        regex: "use[_-]?ssh(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "user_assets_access_key_id",
        regex: "user[_-]?assets[_-]?access[_-]?key[_-]?id(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "user_assets_secret_access_key",
        regex: "user[_-]?assets[_-]?secret[_-]?access[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "usertravis",
        regex: "usertravis(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "v_sfdc_client_secret",
        regex: "v[_-]?sfdc[_-]?client[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "v_sfdc_password",
        regex: "v[_-]?sfdc[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "vip_github_build_repo_deploy_key",
        regex:
          "vip[_-]?github[_-]?build[_-]?repo[_-]?deploy[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "vip_github_deploy_key",
        regex: "vip[_-]?github[_-]?deploy[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "vip_github_deploy_key_pass",
        regex: "vip[_-]?github[_-]?deploy[_-]?key[_-]?pass(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "virustotal_apikey",
        regex: "virustotal[_-]?apikey(=| =|:| :)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "visual_recognition_api_key",
        regex: "visual[_-]?recognition[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "vscetoken",
        regex: "vscetoken(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "wakatime_api_key",
        regex: "wakatime[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "watson_conversation_password",
        regex: "watson[_-]?conversation[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "watson_device_password",
        regex: "watson[_-]?device[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "watson_password",
        regex: "watson[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "widget_basic_password",
        regex: "widget[_-]?basic[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "widget_basic_password_2",
        regex: "widget[_-]?basic[_-]?password[_-]?2(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "widget_basic_password_3",
        regex: "widget[_-]?basic[_-]?password[_-]?3(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "widget_basic_password_4",
        regex: "widget[_-]?basic[_-]?password[_-]?4(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "widget_basic_password_5",
        regex: "widget[_-]?basic[_-]?password[_-]?5(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "widget_fb_password",
        regex: "widget[_-]?fb[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "widget_fb_password_2",
        regex: "widget[_-]?fb[_-]?password[_-]?2(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "widget_fb_password_3",
        regex: "widget[_-]?fb[_-]?password[_-]?3(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "widget_test_server",
        regex: "widget[_-]?test[_-]?server(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "wincert_password",
        regex: "wincert[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "wordpress_db_password",
        regex: "wordpress[_-]?db[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "wordpress_db_user",
        regex: "wordpress[_-]?db[_-]?user(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "wpjm_phpunit_google_geocode_api_key",
        regex:
          "wpjm[_-]?phpunit[_-]?google[_-]?geocode[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "wporg_password",
        regex: "wporg[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "wpt_db_password",
        regex: "wpt[_-]?db[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "wpt_db_user",
        regex: "wpt[_-]?db[_-]?user(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "wpt_prepare_dir",
        regex: "wpt[_-]?prepare[_-]?dir(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "wpt_report_api_key",
        regex: "wpt[_-]?report[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "wpt_ssh_connect",
        regex: "wpt[_-]?ssh[_-]?connect(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "wpt_ssh_private_key_base64",
        regex: "wpt[_-]?ssh[_-]?private[_-]?key[_-]?base64(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "www_googleapis_com",
        regex: "www[_-]?googleapis[_-]?com(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "yangshun_gh_password",
        regex: "yangshun[_-]?gh[_-]?password(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "yangshun_gh_token",
        regex: "yangshun[_-]?gh[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "yt_account_client_secret",
        regex: "yt[_-]?account[_-]?client[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "yt_account_refresh_token",
        regex: "yt[_-]?account[_-]?refresh[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "yt_api_key",
        regex: "yt[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "yt_client_secret",
        regex: "yt[_-]?client[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "yt_partner_client_secret",
        regex: "yt[_-]?partner[_-]?client[_-]?secret(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "yt_partner_refresh_token",
        regex: "yt[_-]?partner[_-]?refresh[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "yt_server_api_key",
        regex: "yt[_-]?server[_-]?api[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "zendesk_travis_github",
        regex: "zendesk[_-]?travis[_-]?github(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "zensonatypepassword",
        regex: "zensonatypepassword(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "zhuliang_gh_token",
        regex: "zhuliang[_-]?gh[_-]?token(=| =|:| :)",
        confidence: "low",
      },
    },
    {
      pattern: {
        name: "zopim_account_key",
        regex: "zopim[_-]?account[_-]?key(=| =|:| :)",
        confidence: "low",
      },
    },
  ],
  [Kind.PII]: [
    {
      pattern: {
        name: "times",
        regex: "\\d{1,2}:\\d{2} ?(?:[ap]\\.?m\\.?)?|\\d[ap]\\.?m\\.?",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "phones",
        regex:
          "((?:(?<![\\d-])(?:\\+?\\d{1,3}[-.\\s*]?)?(?:\\(?\\d{3}\\)?[-.\\s*]?)?\\d{3}[-.\\s*]?\\d{4}(?![\\d-]))|(?:(?<![\\d-])(?:(?:\\(\\+?\\d{2}\\))|(?:\\+?\\d{2}))\\s*\\d{2}\\s*\\d{3}\\s*\\d{4}(?![\\d-])))",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "phones_with_exts",
        regex:
          "((?:(?:\\+?1\\s*(?:[.-]\\s*)?)?(?:\\(\\s*(?:[2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\\s*\\)|(?:[2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\\s*(?:[.-]\\s*)?)?(?:[2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\\s*(?:[.-]\\s*)?(?:[0-9]{4})(?:\\s*(?:#|x\\.?|ext\\.?|extension)\\s*(?:\\d+)?))",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "emails",
        regex:
          "([a-z0-9!#$%&'*+\\/=?^_`{|.}~-]+@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "street_addresses",
        regex:
          "\\d{1,4} [\\w\\s]{1,20}(?:street|st|avenue|ave|road|rd|highway|hwy|square|sq|trail|trl|drive|dr|court|ct|park|parkway|pkwy|circle|cir|boulevard|blvd)\\W?(?=\\s|$)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "po_boxes",
        regex: "P\\.? ?O\\.? Box \\d+",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "ukphones",
        regex:
          "^\\s*\\(?(020[7,8]{1}\\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\\)?[]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\\s*$",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "email - 3",
        regex: "\\b[\\w\\-+.]+@+\\w+.+[A-z]{3}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "ssn - 3",
        regex: "\b(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "ssn_number",
        regex:
          "(?!000|666|333)0*(?:[0-6][0-9][0-9]|[0-7][0-6][0-9]|[0-7][0-7][0-2])[-](?!00)[0-9]{2}[- ](?!0000)[0-9]{4}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "visa_credit_card",
        regex: "4[0-9]{15}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "american_express_credit-card",
        regex: "3[47][0-9]{13}",
        confidence: "high",
      },
    },
    {
      pattern: { name: "otp", regex: "^[0-9]{6}$", confidence: "high" },
    },
    {
      pattern: {
        name: "credit card - 2",
        regex:
          "4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12} |3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\\d{3})\\d{11}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "UK Phone Numbers",
        regex: "\\b([0O]?[1lI][1lI])?[4A][4A][\\dOIlZEASB]{10,11}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "US Phone Numbers",
        regex:
          "\\b((\\+|\\b)[1l][\\-\\. ])?\\(?\\b[\\dOlZSB]{3,5}([\\-\\. ]|\\) ?)[\\dOlZSB]{3}[\\-\\. ][\\dOlZSB]{4}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Email Addresses",
        regex: "\\b[a-z0-9._%\\+\\-—|]+@[a-z0-9.\\-—|]+\\.[a-z|]{2,6}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Credit card - 3",
        regex:
          "\\b((4\\d{3}|5[1-5]\\d{2}|2\\d{3}|3[47]\\d{1,2})[\\s\\-]?\\d{4,6}[\\s\\-]?\\d{4,6}?([\\s\\-]\\d{3,4})?(\\d{3})?)\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Amex Card",
        regex: "\\b3[47][0-9]{13}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "BCGlobal",
        regex: "\\b(6541|6556)[0-9]{12}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Carte Blanche Card",
        regex: "\\b389[0-9]{11}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Diners Club Card",
        regex: "\\b3(?:0[0-5]|[68][0-9])[0-9]{11}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Discover Card",
        regex:
          "\\b65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Insta Payment Card",
        regex: "\\b63[7-9][0-9]{13}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "JCB Card",
        regex: "\\b(?:2131|1800|35\\d{3})\\d{11}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Korean Local Card",
        regex: "\\b9[0-9]{15}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Laser Card",
        regex: "\\b(6304|6706|6709|6771)[0-9]{12,15}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Maestro Card",
        regex: "\\b(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "MasterCard",
        regex:
          "\\b(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\\d{3})\\d{11})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Solo Card",
        regex:
          "\\b(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Switch Card",
        regex:
          "\\b(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Argentina National Identity (DNI) Number",
        regex: "\\d{2}\\.\\d{3}\\.\\d{3}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Canada Passport ID",
        regex: "\\b[\\w]{2}[\\d]{6}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Croatia Vat ID card number",
        regex: "\\bHR\\d{11}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Czech Republic Vat ID card number",
        regex: "\\bCZ\\d{8,10}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Denmark Personal ID number",
        regex: "\\b\\d{10}|\\d{6}[-\\s]\\d{4}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "France National ID card (CNI)",
        regex: "\\b\\d{12}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "France Social Security Number (INSEE)",
        regex: "\\b\\d{13}|\\d{13}\\s\\d{2}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "France Passport ID",
        regex: "\\b\\d{2}11\\d{5}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Germany ID card number",
        regex: "\\bl\\d{8}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Germany Passport ID",
        regex: "\\b[cfghjk]\\d{3}\\w{5}\\d\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Germany Driver's License ID",
        regex: "\\b[\\d\\w]\\d{2}[\\d\\w]{6}\\d[\\d\\w]\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Ireland Personal Public Service (PPS) Number",
        regex: "\\b\\d{7}\\w{1,2}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Netherlands Citizen's Service (BSN) number",
        regex: "\\b\\d{8}|\\d{3}[-\\.\\s]\\d{3}[-\\.\\s]\\d{3}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Poland National ID (PESEL)",
        regex: "\\b\\d{11}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Portugal Citizen Card Number",
        regex: "\\d{9}[\\w\\d]{2}|\\d{8}-\\d[\\d\\w]{2}\\d",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Spain Social Security Number (SSN)",
        regex: "\\b\\d{2}\\/?\\d{8}\\/?\\d{2}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Spain Social Security Number (SSN) - 2",
        regex: "\\b\\d{3}[ -.]\\d{2}[ -.]\\d{4}\\b`",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Sweden Passport ID",
        regex: "\\b\\d{8}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "United Kingdom Passport ID",
        regex: "\\b\\d{9}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "United Kingdom Driver's license ID",
        regex: "\\b[\\w9]{5}\\d{6}[\\w9]{2}\\d{5}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "United Kingdom National Health Service (NHS) number",
        regex: "\\b\\d{3}\\s\\d{3}\\s\\d{4}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "ipv4",
        regex:
          "(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "prices",
        regex: "[$]\\s?[+-]?[0-9]{1,3}(?:(?:,?[0-9]{3}))*(?:\\.[0-9]{1,2})?",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "hex_colors",
        regex: "(#(?:[0-9a-fA-F]{8})|#(?:[0-9a-fA-F]{3}){1,2})\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "credit_cards",
        regex: "((?:(?:\\d{4}[- ]?){3}\\d{4}|\\d{15,16}))(?![\\d])",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "visa_cards",
        regex: "4\\d{3}[\\s-]?\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "master_cards",
        regex: "5[1-5]\\d{2}[\\s-]?\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "btc_addresses",
        regex:
          "(?<![a-km-zA-HJ-NP-Z0-9])[13][a-km-zA-HJ-NP-Z0-9]{26,33}(?![a-km-zA-HJ-NP-Z0-9])",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "ssn_number - 3",
        regex: "(?:\\d{3}-\\d{2}-\\d{4})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "md5_hashes",
        regex: "[0-9a-fA-F]{32}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "sha1_hashes",
        regex: "[0-9a-fA-F]{40}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "sha256_hashes",
        regex: "[0-9a-fA-F]{64}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "isbn13",
        regex: "(?:[\\d]-?){12}[\\dxX]",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "isbn10",
        regex: "(?:[\\d]-?){9}[\\dxX]",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "mac_addresses",
        regex: "(([0-9a-fA-F]{2}[:-]){5}([0-9a-fA-F]{2}))",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "iban_numbers",
        regex: "[A-Z]{2}\\d{2}[A-Z0-9]{4}\\d{7}([A-Z\\d]?){0,16}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "git_repos",
        regex:
          "((git|ssh|http(s)?)|(git@[\\w\\.]+))(:(\\/\\/)?)([\\w\\.@\\:/\\-~]+)(\\.git)(\\/)?",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Driver's License Number (simplified)",
        regex: "^[A-Z]{2}-\\d{6}$",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Passport Number (simplified) - 3",
        regex: "^[A-Z]\\d{7}$",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Social Security Number (SSN) - 3",
        regex: "^\\d{3}-\\d{2}-\\d{4}$",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Social Security Number (SSN) - 4",
        regex: "(?:\\\\b\\\\d{3}-?\\\\d{2}-?(\\\\d{4})\\\\b)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Date of Birth",
        regex: "^\\d{2}/\\d{2}/\\d{4}$|^\\d{4}-\\d{2}-\\d{2}$",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Arista network configuration",
        regex:
          "via\\ \\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3},\\ \\d{2}:\\d{2}:\\d{2}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "BBVA Compass Routing Number - California",
        regex: "^321170538$",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Bank of America Routing Numbers - California",
        regex: "^(?:121|026)00(?:0|9)(?:358|593)$",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Box Links",
        regex: "https://app.box.com/[s|l]/\\S+",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "CVE Number",
        regex: "CVE-\\d{4}-\\d{4,7}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "California Drivers License",
        regex: "^[A-Z]{1}\\d{7}$",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Chase Routing Numbers - California",
        regex: "^322271627$",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Cisco Router Config",
        regex:
          "service\\ timestamps\\ [a-z]{3,5}\\ datetime\\ msec|boot-[a-z]{3,5}-marker|interface\\ [A-Za-z0-9]{0,10}[E,e]thernet",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Citibank Routing Numbers - California",
        regex: "^32(?:11|22)71(?:18|72)4$",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "DSA Private Key",
        regex:
          "-----BEGIN DSA PRIVATE KEY-----(?:[a-zA-Z0-9\\+\\=\\/\"']|\\s)+?-----END DSA PRIVATE KEY-----",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Dropbox Links",
        regex: "https://www.dropbox.com/(?:s|l)/\\S+",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "EC Private Key",
        regex:
          "-----BEGIN (?:EC|ECDSA) PRIVATE KEY-----(?:[a-zA-Z0-9\\+\\=\\/\"']|\\s)+?-----END (?:EC|ECDSA) PRIVATE KEY-----",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Encrypted DSA Private Key",
        regex:
          "-----BEGIN DSA PRIVATE KEY-----\\s.*,ENCRYPTED(?:.|\\s)+?-----END DSA PRIVATE KEY-----",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Encrypted EC Private Key",
        regex:
          "-----BEGIN (?:EC|ECDSA) PRIVATE KEY-----\\s.*,ENCRYPTED(?:.|\\s)+?-----END (?:EC|ECDSA) PRIVATE KEY-----",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Encrypted Private Key",
        regex:
          "-----BEGIN ENCRYPTED PRIVATE KEY-----(?:.|\\s)+?-----END ENCRYPTED PRIVATE KEY-----",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Encrypted PuTTY SSH DSA Key",
        regex:
          "PuTTY-User-Key-File-2: ssh-dss\\s*Encryption: aes(?:.|\\s?)*?Private-MAC:",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Encrypted RSA Private Key",
        regex:
          "-----BEGIN RSA PRIVATE KEY-----\\s.*,ENCRYPTED(?:.|\\s)+?-----END RSA PRIVATE KEY-----",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Google Application Identifier",
        regex: "[0-9]+-\\w+.apps.googleusercontent.com",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "HIPAA PHI National Drug Code",
        regex: "^\\d{4,5}-\\d{3,4}-\\d{1,2}$",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Huawei config file",
        regex:
          "sysname\\ HUAWEI|set\\ authentication\\ password\\ simple\\ huawei",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Individual Taxpayer Identification Numbers (ITIN)",
        regex: "^9\\d{2}(?:[ \\-]?)[7,8]\\d(?:[ \\-]?)\\d{4}$",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "John the Ripper",
        regex:
          "[J,j]ohn\\ [T,t]he\\ [R,r]ipper|john-[1-9].[1-9].[1-9]|Many\\ salts:|Only\\ one\\ salt:|openwall.com/john/|List.External:[0-9a-zA-Z]*|Loaded\\ [0-9]*\\ password hash|guesses:\\ \\d*\\ \\ time:\\ \\d*:\\d{2}:\\d{2}:\\d{2}|john\\.pot",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "KeePass 1.x CSV Passwords",
        regex: '"Account","Login Name","Password","Web Site","Comments"',
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "KeePass 1.x XML Passwords",
        regex:
          "<pwlist>\\s*?<pwentry>[\\S\\s]*?<password>[\\S\\s]*?<\\/pwentry>\\s*?<\\/pwlist>",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Large number of US Phone Numbers",
        regex: "\\d{3}-\\d{3}-\\d{4}|\\(\\d{3}\\)\\ ?\\d{3}-?\\d{4}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Large number of US Zip Codes",
        regex: "^(\\d{5}-\\d{4}|\\d{5})$",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Lightweight Directory Access Protocol",
        regex: "(?:dn|cn|dc|sn):\\s*[a-zA-Z0-9=, ]*",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Metasploit Module",
        regex:
          "require\\ 'msf/core'|class\\ Metasploit|include\\ Msf::Exploit::\\w+::\\w+",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "MySQL database dump",
        regex:
          "DROP DATABASE IF EXISTS(?:.|\\n){5,300}CREATE DATABASE(?:.|\\n){5,300}DROP TABLE IF EXISTS(?:.|\\n){5,300}CREATE TABLE",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "MySQLite database dump",
        regex:
          "DROP\\ TABLE\\ IF\\ EXISTS\\ \\[[a-zA-Z]*\\];|CREATE\\ TABLE\\ \\[[a-zA-Z]*\\];",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Network Proxy Auto-Config",
        regex: "proxy\\.pac|function\\ FindProxyForURL\\(\\w+,\\ \\w+\\)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Nmap Scan Report",
        regex: "Nmap\\ scan\\ report\\ for\\ [a-zA-Z0-9.]+",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "PGP Header",
        regex: "-{5}(?:BEGIN|END)\\ PGP\\ MESSAGE-{5}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "PGP Private Key Block",
        regex:
          "-----BEGIN PGP PRIVATE KEY BLOCK-----(?:.|\\s)+?-----END PGP PRIVATE KEY BLOCK-----",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "PKCS7 Encrypted Data",
        regex:
          "(?:Signer|Recipient)Info(?:s)?\\ ::=\\ \\w+|[D|d]igest(?:Encryption)?Algorithm|EncryptedKey\\ ::= \\w+",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Password etc passwd",
        regex:
          '[a-zA-Z0-9\\-]+:[x|\\*]:\\d+:\\d+:[a-zA-Z0-9/\\- "]*:/[a-zA-Z0-9/\\-]*:/[a-zA-Z0-9/\\-]+',
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Password etc shadow",
        regex:
          "[a-zA-Z0-9\\-]+:(?:(?:!!?)|(?:\\*LOCK\\*?)|\\*|(?:\\*LCK\\*?)|(?:\\$.*\\$.*\\$.*?)?):\\d*:\\d*:\\d*:\\d*:\\d*:\\d*:",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "PlainText Private Key",
        regex:
          "-----BEGIN PRIVATE KEY-----(?:.|\\s)+?-----END PRIVATE KEY-----",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "PuTTY SSH DSA Key",
        regex:
          "PuTTY-User-Key-File-2: ssh-dss\\s*Encryption: none(?:.|\\s?)*?Private-MAC:",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "PuTTY SSH RSA Key",
        regex:
          "PuTTY-User-Key-File-2: ssh-rsa\\s*Encryption: none(?:.|\\s?)*?Private-MAC:",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Public Key Cryptography System (PKCS)",
        regex: 'protocol="application/x-pkcs[0-9]{0,2}-signature"',
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Public encrypted key",
        regex: "-----BEGIN PUBLIC KEY-----(?:.|\\s)+?-----END PUBLIC KEY-----",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "RSA Private Key",
        regex:
          "-----BEGIN RSA PRIVATE KEY-----(?:[a-zA-Z0-9\\+\\=\\/\"']|\\s)+?-----END RSA PRIVATE KEY-----",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "SSL Certificate",
        regex:
          "-----BEGIN CERTIFICATE-----(?:.|\\n)+?\\s-----END CERTIFICATE-----",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "SWIFT Codes",
        regex: "[A-Za-z]{4}(?:GB|US|DE|RU|CA|JP|CN)[0-9a-zA-Z]{2,5}$",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Samba Password config file",
        regex: "[a-z]*:\\d{3}:[0-9a-zA-Z]*:[0-9a-zA-Z]*:\\[U\\ \\]:.*",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Slack 2FA Backup Codes",
        regex:
          "Two-Factor\\s*\\S*Authentication\\s*\\S*Backup\\s*\\S*Codes(?:.|\\n)*[Ss]lack(?:.|\\n)*\\d{9}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "UK Drivers License Numbers",
        regex: "[A-Z]{5}\\d{6}[A-Z]{2}\\d{1}[A-Z]{2}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "UK Passport Number",
        regex: "\\d{10}GB[RP]\\d{7}[UMF]{1}\\d{9}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "USBank Routing Numbers - California",
        regex: "^12(?:1122676|2235821)$",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "United Bank Routing Number - California",
        regex: "^122243350$",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Wells Fargo Routing Numbers - California",
        regex: "^121042882$",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "aws_access_key",
        regex:
          "((access[-_]?key[-_]?id)|(ACCESS[-_]?KEY[-_]?ID)|([Aa]ccessKeyId)|(access[_-]?id)).{0,20}AKIA[a-zA-Z0-9+/]{16}[^a-zA-Z0-9+/]",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "aws_credentials_context",
        regex: "access_key_id|secret_access_key|AssetSync.configure",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "aws_secret_key",
        regex:
          "((secret[-_]?access[-_]?key)|(SECRET[-_]?ACCESS[-_]?KEY|(private[-_]?key))|([Ss]ecretAccessKey)).{0,20}[^a-zA-Z0-9+/][a-zA-Z0-9+/]{40}\\b",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "facebook_secret",
        regex:
          "(facebook_secret|FACEBOOK_SECRET|facebook_app_secret|FACEBOOK_APP_SECRET)[a-z_ =\\s\"'\\:]{0,5}[^a-zA-Z0-9][a-f0-9]{32}[^a-zA-Z0-9]",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "github_key",
        regex:
          "(GITHUB_SECRET|GITHUB_KEY|github_secret|github_key|github_token|GITHUB_TOKEN|github_api_key|GITHUB_API_KEY)[a-z_ =\\s\"'\\:]{0,10}[^a-zA-Z0-9][a-zA-Z0-9]{40}[^a-zA-Z0-9]",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "google_two_factor_backup",
        regex:
          "(?:BACKUP VERIFICATION CODES|SAVE YOUR BACKUP CODES)[\\s\\S]{0,300}@",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "heroku_key",
        regex:
          "(heroku_api_key|HEROKU_API_KEY|heroku_secret|HEROKU_SECRET)[a-z_ =\\s\"'\\:]{0,10}[^a-zA-Z0-9-]\\w{8}(?:-\\w{4}){3}-\\w{12}[^a-zA-Z0-9\\-]",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "microsoft_office_365_oauth_context",
        regex:
          "https://login.microsoftonline.com/common/oauth2/v2.0/token|https://login.windows.net/common/oauth2/token",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "pgSQL Connection Information",
        regex: "(?:postgres|pgsql)\\:\\/\\/",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "slack_api_key",
        regex:
          "(slack_api_key|SLACK_API_KEY|slack_key|SLACK_KEY)[a-z_ =\\s\"'\\:]{0,10}[^a-f0-9][a-f0-9]{32}[^a-f0-9]",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "slack_api_token",
        regex: "(xox[pb](?:-[a-zA-Z0-9]+){4,})",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "ssh_dss_public",
        regex: "ssh-dss [0-9A-Za-z+/]+[=]{2}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "ssh_rsa_public",
        regex: "ssh-rsa AAAA[0-9A-Za-z+/]+[=]{0,3} [^@]+@[^@]+",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "IBAN",
        regex: "[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "GPS Data",
        regex:
          "^([-+]?)([\\d]{1,2})(((\\.)(\\d+)(,)))(\\s*)(([-+]?)([\\d]{1,3})((\\.)(\\d+))?)",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Blood Type",
        regex: "^(A|B|AB|O)[-+]$",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Date of Birth  - 2",
        regex:
          "^([1-9]|[12][0-9]|3[01])(\\/?\\.\\-?\\-?\\s?)(0[1-9]|1[12])(\\/?\\.?\\-?\\s?)(19[0-9][0-9]|20[0][0-9]|20[1][0-8])$",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Tax Number",
        regex: "^[0-9]{10}$",
        confidence: "high",
      },
    },
    {
      pattern: {
        name: "Bitcoin Address",
        regex: "^[13][a-km-zA-HJ-NP-Z0-9]{26,33}$",
        confidence: "high",
      },
    },
  ],
  [Kind.field]: {
    fields: [
      "input stripe token",
      "credentialsinput",
      "context",
      "totp_code_field",
      "field totp code",
      "bank-account[routing-number]-input",
      "security_token_input",
      "last four ssn",
      "authtokenfield",
      "receiverstatecode",
      "address2",
      "otp",
      "2fa_pin_field",
      "cc-num",
      "totp-pin-field",
      "input",
      "security_pin_input",
      "fieldpassword1",
      "input bank account[routing number]",
      "raw-input",
      "api_key_field",
      " csrf input",
      "house number",
      "salt_input",
      "referraltoken",
      "newpasswordinput",
      "field password confirm",
      "input routing acc number",
      "referrer",
      "input_card[cvv]",
      "fieldssn",
      "card_number_last_four",
      "credentials-input",
      "input password confirm",
      "referrerslastname",
      "field-csrf",
      "input-account-number",
      "credit_card_num",
      "bank_account_number",
      "account bank number input",
      "token",
      "routingnumberinput",
      "bankacc[routingnum]field",
      "bankacc[routingnum]",
      "-csrf-token",
      "field-password1",
      "repeat",
      "field-auth-token",
      "certinput",
      "totp-pin",
      "fieldcert",
      "account_routing_number",
      "input_social_security_num",
      "field_password2",
      "authenticity-token",
      "cc_number_input",
      "input-ssn",
      "client secret",
      "input card num",
      "field two factor token",
      "access token input",
      "country code",
      "phone",
      "field-creds",
      "totp-pin-input",
      "input-cert",
      "card number last4",
      "inputroutingaccountnumber",
      "routing_acc",
      "avatar",
      "json",
      "funding-source-id",
      "field-routing-number",
      "passwd-confirm-field",
      "card_cvv",
      "input totp token",
      "secretfield",
      "2fa_token_input",
      "input two factor token",
      "inputcardnum",
      "sender_id",
      "input_mysql_pwd",
      "field-bank-account[routing-number]",
      "input_creds",
      "routingaccinput",
      "input cc num",
      "emaildomain",
      "acc[routing",
      "credit_card_number_field",
      "totp_token_input",
      "field_two_factor_code",
      "input_confirm_password",
      "memberquestionredacted",
      "field-certificate",
      "fieldbankacc[routingnumber]",
      "expiration",
      "ssn",
      "issuer-certificate",
      "input bank acc num",
      "field__csrf",
      "field-passwd-confirm",
      "social-security-num",
      "2fa_token_field",
      "sender_address",
      "sender-address",
      "routing-acc-num-input",
      "bankaccnumberfield",
      "otp input",
      "fieldcardnumber",
      "pin-code",
      "twofactorcodefield",
      "acc-number",
      "stripe_token_field",
      "security code field",
      "phone_number",
      "bank account number input",
      "field_otp",
      "totptoken",
      "pwdinput",
      "issuer_certificate_input",
      "privatekey",
      "social-security-number-input",
      "cc_num_field",
      "input_bank_acc[routing_number]",
      "cvc-number",
      "field-totp-token",
      "input_totp_pin",
      "receiverdevicecontactname",
      "two_factor_pin",
      "issuercertificatefield",
      "api-token-field",
      "compensation",
      "csrfinput",
      "field card cvv",
      "inputaccnumber",
      "field-cc-number",
      "oldpassword",
      "fieldotpcode",
      "input cc number",
      "input-api-token",
      "debit_card",
      "input-routing-account-number",
      "inputraw",
      "otp_pin_input",
      "bank acc",
      "api-token-input",
      "input-access-token",
      "card-num",
      "field_credentials",
      "field two factor pin",
      "account-number-input",
      "cardnuminput",
      "two_factor_code_input",
      "input_cc_num",
      "field account routing number",
      "middlename",
      "bankaccountnumfield",
      "credit-card-num-field",
      "2fa token field",
      "line2",
      "cc-num-input",
      "type",
      "fieldtotptoken",
      "credit",
      "credit card field",
      "input two factor code",
      "fieldtwofactorcode",
      "newpasswordfield",
      "cc_num",
      "bankaccfield",
      "bank account[routing number] field",
      "resetpasswordtoken",
      "user token",
      "account bank number field",
      "bankaccnumber",
      "input-otp-token",
      "field-bank-acc-number",
      "matches_ssn_digest",
      "member_question",
      "field_totp_pin",
      "referral url",
      "idtoken",
      "input_two_factor_pin",
      "field_otp_token",
      "expiry_date",
      "client",
      "input card[num]",
      "routing-acc",
      "stripe",
      "contract",
      "auth_token_input",
      "link",
      "response",
      "resetpassword",
      "input2fa",
      "inputbankacc[routingnumber]",
      "2fapininput",
      "api secret",
      "input_card_num",
      "cc number input",
      "otp_token_input",
      "fieldrepeatpassword",
      "country",
      "rate",
      "cvv_number",
      "contract id",
      "input token",
      "field_bank_acc[routing_num]",
      "email domain",
      "confirm passwd field",
      "field_confirm_password",
      "input-bank-acc-num",
      "acc_number_field",
      "password1",
      "inputcardcvv",
      "field_credit_card_number",
      "salt-field",
      "confirm-password",
      "stripe token",
      "passwdconfirminput",
      "creditcardnumber",
      "input_security_code",
      "pwd input",
      "value",
      "input_credit_card_number",
      "field 2fa pin",
      "templatelink",
      "inputsocialsecuritynum",
      "fieldotptoken",
      "key",
      "city",
      "otp pin field",
      "email",
      "format",
      "set-cookie",
      "inputcvv",
      "sender-zip-code",
      "field_card_number",
      "cc-number-input",
      "password_confirm",
      "input_password",
      "input bank acc[routing number]",
      "field stripe token",
      "rawfield",
      "csrf field",
      "acc number",
      "routing_acc_input",
      "pay",
      "authenticity_token",
      "card-cvv",
      "input security pin",
      "security_pin_field",
      "routingnumber",
      "field2fa",
      "input-pwd",
      "input bank account num",
      "passwordconfirmfield",
      "bin",
      "sender ip address",
      "input-totp-pin",
      "api",
      "2fa_field",
      " csrf",
      "api_key_input",
      "private-key",
      "fieldcard[num]",
      "fieldbankaccountnumber",
      "account-bank-number-input",
      "version",
      "api-key",
      "field-card[num]",
      "key input",
      "confirmpasswordinput",
      "passcode",
      "card last 4",
      "cc number field",
      "field_bank_account_num",
      "given",
      "field routing acc",
      "field-password2",
      "repeatpasswordfield",
      "referral_token",
      "input_key",
      "account_number",
      "otp pin",
      "routing-acc-number-field",
      "receiver-identifier",
      "card[cvv]input",
      "2fatokeninput",
      "otp-code",
      "field_card_cvv",
      "debit-card",
      "referrersavatarurl",
      "card_number_input",
      "groupid",
      "otptokeninput",
      "input_passwd_confirm",
      "response json",
      "bankaccountnumberinput",
      "raw field",
      "passw",
      "secretinput",
      "totp field",
      "input_access_token",
      "authenticitytoken",
      "encrypted-password",
      "bank-acc-number-input",
      "bank-account[routing-number]",
      "apitokenfield",
      "cc",
      "field bank acc number",
      "field-card[number]",
      "bank_acc_field",
      "template_link",
      "input-passwd-confirm",
      "input-old-password",
      "webhook",
      "ccnuminput",
      "bankacc[routingnum]input",
      "pwd-input",
      "first name",
      "response array",
      "encrypted",
      "totp token input",
      "2fa pin input",
      "field-bank-acc[routing-number]",
      "security-pin",
      "twofactorpinfield",
      "input-bank-acc-number",
      "line1",
      "inputpassword2",
      "contacts",
      "fieldbankaccnum",
      "cvcnumber",
      "inputtotptoken",
      "account bank number",
      "csrf-field",
      "stripe-token",
      "passwdconfirmfield",
      "field bank acc[routing number]",
      "mysql-pwd-field",
      "private_key",
      "fieldcard[number]",
      "feature_store",
      "social security number",
      "segment",
      "password2-input",
      "field-card-number",
      " key",
      "repeatpassword",
      "inputcardnumber",
      "input 2fa pin",
      "field_2fa_code",
      "routingaccountnumberinput",
      "input password1",
      "account number",
      "input_2fa_code",
      "merchant",
      "input-password1",
      "auth token field",
      "pan-bin",
      "raw_webhook_response",
      "two-factor-code-input",
      "otp-token",
      "referrers-avatar-url",
      "2fa_pin_input",
      "credit_card_num_input",
      "inputrepeatpassword",
      "field secret",
      "bank_account[routing_number]_field",
      "postal",
      "confirm_passwd",
      "field_security_code",
      "bankacc[routingnumber]field",
      "country-code",
      "field_card[cvv]",
      "private-key-field",
      "postal_code",
      "bank_acc[routing_num]_field",
      "field routing acc num",
      "bank-acc-input",
      "fieldccnum",
      "account_number_field",
      "stated_income",
      "cvv input",
      "date_of_birth",
      "login",
      "inputpasswdconfirm",
      "state-code",
      "passwd confirm field",
      "field otp code",
      "inputcreditcardnum",
      "input password",
      "totp-token-field",
      "gross pay amount",
      "card number",
      "bank account number field",
      "old",
      "code",
      "creds_input",
      "rawwebhookresponse",
      "api key input",
      "totppinfield",
      "category",
      "otptoken",
      "ssn input",
      "rule_format",
      "input passwd confirm",
      "passwd_input",
      "receiver address",
      "routing_number_field",
      "input_bank_acc_num",
      "access-token",
      "private",
      "question",
      "input-security-token",
      "field cert",
      "receiver zip code",
      "account number input",
      "2fapinfield",
      "last-4-ssn",
      "accnumberfield",
      "field-passwd",
      "input_2fa_token",
      "input totp code",
      "inputoldpassword",
      "field_auth_token",
      "credit-card-number-field",
      "field confirm passwd",
      "expiration_date",
      "field_2fa",
      "repeat-password-input",
      "inputroutingacc",
      "otp-input",
      "social_security_number",
      "inputapikey",
      "debit",
      "house",
      "old password input",
      "responsejson",
      "mysql",
      "field_bank_acc_number",
      "field_csrf",
      "field auth token",
      "apitokeninput",
      "passwd-field",
      "last 4 ssn",
      "totp_token_field",
      "security",
      "card[number]_field",
      "field_salt",
      "otp-token-input",
      "fieldoldpassword",
      "input routing account number",
      "last",
      "mobile",
      "routing_account_number_input",
      "device_id",
      "compensation_amount",
      "full-name",
      "receiver_state_code",
      "challenge",
      "x client data",
      "pin_input",
      "security-code-field",
      "access token",
      "input two factor pin",
      "mysqlpwdfield",
      "new password",
      "private key input",
      "membername",
      "social security num field",
      "input-social-security-num",
      "totp-token-input",
      "bank account field",
      "salt",
      "authtoken",
      "last4ssn",
      "fieldtwofactortoken",
      "group-id",
      "field credit card",
      "routing-number-input",
      "field-access-token",
      "key-field",
      "input-auth-token",
      "password_input",
      "security-token",
      "bank-account-input",
      "pin-input",
      "two factor token input",
      "key_field",
      "uuid",
      "bank acc[routing num] input",
      "new-password-input",
      "field-security-token",
      "acc number field",
      "member_question_redacted",
      "two factor code field",
      "field_ssn",
      "fieldcreds",
      "primary_account_number",
      "inputotpcode",
      "field_pwd",
      "keyinput",
      "new_password",
      "fundingsourceid",
      "inputtotppin",
      "password1-field",
      "card_last_4",
      "contractid",
      "input mysql pwd",
      "setcookie",
      "input_pwd",
      "pin",
      "property_id",
      "zip-code",
      "cc_num_input",
      "input-otp-code",
      "accountbanknumberinput",
      "totp_code",
      "field repeat password",
      "house details",
      "routing number input",
      "two-factor-token",
      "field_bank_acc[routing_number]",
      "member question redacted",
      "input_card[number]",
      "receiver state code",
      "statecode",
      "input-2fa-pin",
      "referrers-first-name",
      "totp-code-input",
      "receiver_ip_address",
      "csrf-input",
      "bankaccountinput",
      "pininput",
      "fieldaccountroutingnumber",
      "password_confirm_field",
      "routing_acc_number",
      "facetid",
      "card_num_input",
      "account_bank_number_field",
      "last_four",
      "password2_input",
      "cert",
      "mysql-pwd",
      "otp code field",
      "cert-field",
      "bank_account_field",
      "ccnumber",
      "2fa pin field",
      "bank-acc-number-field",
      "confirm",
      "repeat password field",
      "bank account",
      "two_factor_code_field",
      "field_bank_account",
      "reset-password",
      "input-csrf",
      "stripe-token-input",
      "input-routing-acc",
      "bank_acc[routing_num]_input",
      "password_confirm_input",
      "otppinfield",
      "rawinput",
      "field token",
      "field",
      "totp-input",
      "bank_acc_number",
      "confirmpasswdinput",
      "check-amount",
      "mysql pwd",
      "raw input",
      "field passwd",
      "field-security-code",
      "socialsecuritynumberinput",
      "card[number] field",
      "details",
      "totpcodefield",
      "social_security_number_field",
      "security token",
      "otp-pin-field",
      "input_ssn",
      "social-security-number",
      "inputcard[number]",
      "url",
      "expiry",
      "creds_field",
      "stated income",
      "routingaccnumberfield",
      "phone-number",
      "2fa_token",
      "password",
      "id-token",
      "passwordfield",
      "2fa_code",
      "input-totp-token",
      "field 2fa",
      "feedback",
      "sender-id",
      "field-credit-card",
      "fieldroutingaccountnumber",
      "identifier",
      "twofactortoken",
      "security pin",
      "middle",
      "mysql_pwd_input",
      "account_bank_number_input",
      "crypt",
      "field bank account[routing number]",
      "input2fatoken",
      "pan bin",
      "field-card-cvv",
      "creds-field",
      "cardexpiration",
      "field-mysql-pwd",
      "fieldsocialsecuritynumber",
      "csrf input",
      "sender-device-id",
      "access_token_input",
      "debit card",
      "contact",
      "private_key_input",
      "input_otp_token",
      "bank_acc_num_input",
      "account routing number",
      "field otp",
      "2fa input",
      "token-input",
      "matches",
      "id",
      "input_routing_account_number",
      "field salt",
      "lastfourssn",
      "field pwd",
      "inputaccountroutingnumber",
      "field_certificate",
      "input social security num",
      "inputcard[cvv]",
      "array",
      "confirm_password_input",
      "authorization",
      "input account number",
      "cert input",
      "field_old_password",
      "routingaccountnumberfield",
      "creditcard",
      "input otp pin",
      "field-otp-token",
      "auth-token-field",
      "password-confirm",
      "secret-input",
      "input-password2",
      "field2facode",
      "cvvfield",
      "account[routing",
      "credit-card-input",
      "routing",
      "field-totp-code",
      "password2_field",
      "set",
      "cardnumberfield",
      "certificateinput",
      "receiver-state-code",
      "certificate",
      "4",
      "stripetoken",
      "field api key",
      "input2facode",
      "cvc_number",
      "csrf_input",
      "inputprivatekey",
      "otp-code-input",
      "sendername",
      "primaryaccountnumber",
      "expiration-date",
      "bank-account-num-field",
      "input_routing_acc",
      "input-2fa-token",
      "input-card[cvv]",
      "password1 field",
      "field new password",
      "bank acc number field",
      "otp pin input",
      "input-raw",
      "pin-field",
      "bankaccountfield",
      "ssnfield",
      "input-account-bank-number",
      "-key",
      "passwordconfirm",
      "field-two-factor-code",
      "two factor code",
      "fieldcard[cvv]",
      "bank acc[routing number] field",
      "field social security number",
      "secret_input",
      "totpfield",
      "routing acc number input",
      "password2",
      "password1_input",
      "bank-acc[routing-number]",
      "2fa_code_field",
      "field-token",
      "input credit card num",
      "bank_account[routing_number]_input",
      "field-api-token",
      "input-2fa-code",
      "field passwd confirm",
      "credit-card-field",
      "inputcreditcard",
      "input credentials",
      "sender-name",
      "date ofbirth",
      "input_api_token",
      "pan_last_4",
      "field-routing-acc-number",
      "field-cvv",
      "inputbankaccountnum",
      "field_cc_number",
      "confirm password input",
      "input_cvv",
      "user_ip",
      "pay friend id",
      "routingaccnum",
      "input_cert",
      "bank acc[routing num]",
      "email address",
      "routingaccnumber",
      "input-card[num]",
      "input_bank_acc",
      "user_ip_address",
      "field_totp_token",
      "passwd input",
      "creditcardnumberinput",
      "mfa",
      "lname",
      "input-credit-card-number",
      "issuer_certificate",
      " csrf field",
      "bank account[routing number]",
      "field_passwd",
      "field-old-password",
      "fieldroutingacc",
      "securitycodefield",
      "employername",
      "inputcert",
      "two factor token",
      "cvv-input",
      "property name",
      "password-confirm-field",
      "inputkey",
      "input-bank-acc[routing-num]",
      "card-num-input",
      "field account bank number",
      "issuer",
      "fieldcreditcardnumber",
      "input 2fa",
      "device id",
      "totp-code",
      "creditcardnuminput",
      "field-pwd",
      "old_password",
      "state_code",
      "otp-code-field",
      "referrers last name",
      "credit_card_field",
      "old-password-input",
      "fieldroutingnumber",
      "routingacc",
      "-csrf-input",
      "input social security number",
      "routing acc num input",
      "credit card number input",
      "token field",
      "referrers-last-name",
      "field-bank-acc-num",
      "input_security_token",
      "creditcardnum",
      "card num",
      "merchant_name",
      "bank-acc",
      "employer name",
      "input cvv",
      "sender_device_id",
      "field_routing_acc",
      "routing acc num",
      "routing acc number field",
      "ofbirth",
      "totp token field",
      "bankaccount",
      "inputsalt",
      "bankaccnum",
      "comments",
      "credit card number field",
      "security-token-input",
      "bankaccountnum",
      "password1 input",
      "privatekeyinput",
      "routing_acc_number_input",
      "cvv number",
      "certificate-field",
      "stated",
      "fieldtotpcode",
      "field card[number]",
      "pwd_field",
      "agent email",
      "field_cvv",
      "pan-last-4",
      "code_verifier",
      "sender id",
      "housedetails",
      "key-input",
      "input-cc-num",
      "2fa-code-field",
      "field-acc-number",
      "input_routing_acc_num",
      "card cvv field",
      "field-two-factor-token",
      "reset password token",
      "private key",
      "member name",
      "referrers first name",
      "bankaccountnumberfield",
      "first",
      "input  csrf",
      "input ssn",
      "totp-field",
      "otp field",
      "firstname",
      "mysql pwd field",
      "auth token input",
      "inputtwofactortoken",
      "security_token",
      "accountnumber",
      "state code",
      "field_account_routing_number",
      "confirm_passwd_field",
      "input-otp-pin",
      "receiver-zip-code",
      "field bank account number",
      "input-mysql-pwd",
      "field routing account number",
      "acc_number_input",
      "code-verifier",
      "totppin",
      "card[number]-field",
      "field_private_key",
      "last-four-ssn",
      "insurer_name",
      "routing-acc-num-field",
      "useripaddress",
      "xclientdata",
      "repeat-password-field",
      "receiver device contact name",
      "social-security-number-field",
      "receiver_device_contact_name",
      "num]",
      "credit-card-number",
      "mobile phone",
      "senderzipcode",
      "input card[cvv]",
      "credit_card_num_field",
      "device",
      "template link",
      "input_totp_token",
      "matchesssndigest",
      "acc_number",
      "bank-acc[routing-num]-field",
      "input-bank-acc[routing-number]",
      "inputbankaccount[routingnumber]",
      "secret input",
      "fieldconfirmpassword",
      "api key field",
      "authenticity",
      "routing acc",
      "input_stripe_token",
      "otp_input",
      "2fa code input",
      "cardnum",
      "accountbanknumber",
      "fieldroutingaccnumber",
      "authenticity token",
      "password-field",
      "field_stripe_token",
      "input_acc_number",
      "postalcode",
      "bankaccnumberinput",
      "middle-name",
      "cardsecuritycode",
      "2fa-pin-field",
      "card_number",
      "credentials field",
      "bank_account[routing_number]",
      "2fa_pin",
      "field_issuer_certificate",
      "verifier",
      "security_code",
      "creds-input",
      "pwd-field",
      "bank acc field",
      "social_security_num_input",
      "member question",
      "group",
      "saltinput",
      "bank-acc-field",
      "inputpasswd",
      "dob",
      "input passwd",
      "field-confirm-passwd",
      "input-card-num",
      "routingaccnuminput",
      "ccnumberinput",
      "input confirm passwd",
      "created_date",
      "issuer certificate",
      "field_creds",
      "input_salt",
      "bank acc[routing number]",
      "salt_field",
      "two_factor_pin_field",
      "reset",
      "fieldmysqlpwd",
      "apikeyfield",
      "input-two-factor-token",
      "bankacc[routingnumber]",
      "property-version",
      "inputotppin",
      "response_json",
      "password-confirm-input",
      "password1input",
      "code verifier",
      "bank_acc_num",
      "tokenfield",
      "inputtoken",
      "field creds",
      "cardcvv",
      "mysql pwd input",
      "auth-token-input",
      "fieldaccountbanknumber",
      "input otp token",
      "responsearray",
      "fieldcardcvv",
      "input_2fa_pin",
      "appid",
      "field credentials",
      "routing_number_input",
      "client id",
      "confirm-password-field",
      "debitcard",
      "field_access_token",
      "2fa-pin-input",
      "credentialsfield",
      "two factor code input",
      "inputotp",
      "account-routing-number",
      "2fa_input",
      "full name",
      "password2-field",
      "issuer-certificate-input",
      "inputroutingaccnum",
      "group_id",
      "senderdeviceid",
      "ssn field",
      "card-expiration",
      "field card[cvv]",
      "input-security-pin",
      "card cvv input",
      "field_key",
      "bank_account_num",
      "otp_pin",
      "friend",
      "cc-num-field",
      "accountroutingnumberinput",
      "x_client_data",
      "credsinput",
      "last-name",
      "funding source id",
      "routing-acc-number-input",
      "input-private-key",
      "fieldapikey",
      "bank-account",
      "field_card[number]",
      "bank acc[routing number] input",
      "otpcodefield",
      "otp token field",
      "bank_acc[routing_number]_field",
      "bankaccount[routingnumber]input",
      "credit_card",
      "inputaccountbanknumber",
      "bank-account-number-input",
      "inputauthtoken",
      "totp_code_input",
      "bank-account-num-input",
      "field_bank_account_number",
      "inputcredentials",
      "bank-acc-num",
      "segment device id",
      "field_card_num",
      "accountid",
      "field_token",
      "input-key",
      "ssn-input",
      "fieldsocialsecuritynum",
      "segment_device_id",
      "fieldpasswd",
      "assertion",
      "password1_field",
      "bank account num field",
      "created date",
      "ruleformat",
      "field-otp-code",
      "routing number field",
      "certificate_field",
      "field_otp_code",
      "sender name",
      "cvv",
      "totpcodeinput",
      "inputsecret",
      "field card number",
      "input_pin",
      "input_bank_account_num",
      "routing-account-number",
      "sender address",
      "field_cc_num",
      "raw_field",
      "referral token",
      "tax_id",
      "net pay amount",
      "field two factor code",
      "card-cvv-field",
      "inputtotpcode",
      "zip code",
      "lastfour",
      "input-social-security-number",
      "input_credit_card",
      "account_id",
      "cc_number_field",
      "fieldconfirmpasswd",
      "field-card-num",
      "property-id",
      "card[number]_input",
      "employer-name",
      "input_otp_code",
      "bank_account_number_field",
      "sender device id",
      "cc_number",
      "access-token-field",
      "field pin",
      "input bank account number",
      "field_password1",
      "certfield",
      "receiverzipcode",
      "input-routing-acc-num",
      "otp-pin-input",
      "num",
      "account routing number input",
      "input salt",
      "referrer-token",
      "2fa-input",
      "csrffield",
      "routingnumberfield",
      "inputcreds",
      "authentication_token",
      "name",
      "routing acc input",
      "input credit card number",
      "input bank acc",
      "input_account_number",
      "confirm_passwd_input",
      "account id",
      "insurer-name",
      "cc-number",
      "template-link",
      "fieldnewpassword",
      "merchantname",
      "creds field",
      "input_secret",
      "bank",
      "propertyname",
      "inputconfirmpassword",
      "field cvv",
      "member",
      "panbin",
      "fieldbankacc[routingnum]",
      "security_code_field",
      "field-routing-acc-num",
      "inputbankacc[routingnum]",
      "deviceid",
      "fieldaccesstoken",
      "inputcard[num]",
      "input-issuer-certificate",
      "access-token-input",
      "field-credit-card-num",
      "device-id",
      "account-bank-number",
      "field-2fa",
      "insurer",
      "totptokeninput",
      "security-token-field",
      "security code input",
      "year",
      "creditcardnumberfield",
      "pin_code",
      "issuer-certificate-field",
      "cardcvvfield",
      "secret_field",
      "password confirm input",
      "routing-account-number-input",
      "new_password_field",
      "netpayamount",
      "input 2fa token",
      "last name",
      "field-card[cvv]",
      "last_four_ssn",
      "field-cert",
      "routing_acc_num",
      "field bank acc[routing num]",
      "password-input",
      "input-certificate",
      "field access token",
      "field_cert",
      "primary",
      "csrf",
      "input-card-number",
      "fieldtoken",
      "issuer_certificate_field",
      "x-client-data",
      "zip_code",
      "private-key-input",
      "pincode",
      "payfriendid",
      "accountroutingnumberfield",
      "inputbankaccnumber",
      "inputaccountnumber",
      "certificate input",
      "referrers avatar url",
      "field_confirm_passwd",
      "acc-number-field",
      "card[cvv] input",
      "sender_state_code",
      "input api token",
      "card[number]",
      "inputtotp",
      "field_two_factor_token",
      "account-number",
      "mobile-phone",
      "gross_pay_amount",
      "two-factor-code-field",
      "senderid",
      "input-bank-account[routing-number]",
      "field social security num",
      "merchant-name",
      "2facode",
      "securitytokeninput",
      "card_num_field",
      "accountnumberinput",
      "bank_acc_input",
      "otp_field",
      "field-new-password",
      "fieldapitoken",
      "referrers_first_name",
      "last_4",
      "referral",
      "input-api-key",
      "input-new-password",
      "store",
      "routing acc number",
      "input-bank-account",
      "field-totp",
      "credentials_input",
      "bank account num input",
      "2fa token input",
      "card number input",
      "agentemail",
      "input_csrf",
      "credit_card_input",
      "input-salt",
      "gross",
      "mysql-pwd-input",
      "receiveripaddress",
      "otpcodeinput",
      "input_otp_pin",
      "field_account_bank_number",
      "input otp code",
      "creditcardinput",
      "field_security_pin",
      "date-ofbirth",
      "fieldbankaccountnum",
      "ccnum",
      "bank-account-field",
      "passwd_confirm",
      "otp-pin",
      "otptokenfield",
      "credit-card-number-input",
      "fcparams",
      "fieldsecuritypin",
      "segment-device-id",
      "cc num",
      "bank_account_input",
      "field cc num",
      "inputccnum",
      "2fa-token-input",
      "fieldcreditcard",
      "pay-friend-id",
      "authentication token",
      "field-2fa-code",
      "postal code",
      "passwd-confirm",
      "referrers_last_name",
      "email_domain",
      "apitranskey",
      "access token field",
      "input raw",
      "routing-acc-num",
      "employer_name",
      "routing-acc-input",
      "field totp",
      "twofactorpininput",
      "check_amount",
      "two_factor_token",
      "memberquestion",
      "card[number] input",
      "card[number]input",
      "password2field",
      "first_name",
      "fieldcreditcardnum",
      "account_routing_number_input",
      "fieldcvv",
      "bankacc[routingnumber]input",
      "fieldpassword2",
      "confirm_password",
      "field mysql pwd",
      "bank_acc[routing_num]",
      "referrers",
      "field-social-security-num",
      "otpinput",
      "card[num]-input",
      "stripetokeninput",
      "passwd_confirm_field",
      "fieldpasswdconfirm",
      "routing_acc_num_input",
      "routing acc field",
      "field_totp",
      "house-number",
      "field-credit-card-number",
      "source",
      "response-json",
      "template",
      "creds input",
      "property-name",
      "2fa field",
      "primary_phone",
      "input-totp-code",
      "funding_source_id",
      "old-password-field",
      "stripetokenfield",
      "fieldsalt",
      "rule-format",
      "otp_code",
      "clientsecret",
      "securitypininput",
      "response_array",
      "field_routing_number",
      "two-factor-pin-input",
      "input_confirm_passwd",
      "zip",
      "api-key-field",
      "inputpwd",
      "fieldissuercertificate",
      "account_number_input",
      "bank account[routing number] input",
      "accountnumberfield",
      "primary phone",
      "inputsocialsecuritynumber",
      "inputccnumber",
      "acc",
      "repeat_password_input",
      "routing_acc_field",
      "certificate field",
      "created",
      "totp pin field",
      "totp token",
      "totp",
      "input-password-confirm",
      "socialsecuritynumberfield",
      "account-routing-number-field",
      "totp-token",
      "user ip address",
      "countrycode",
      "compensation-amount",
      "2fa code field",
      "state",
      "pwd field",
      "input_2fa",
      "field_repeat_password",
      "_key",
      "input_security_pin",
      "creditcardnumfield",
      "given_name",
      "two factor pin",
      "bank_account_num_input",
      "confirm password field",
      "issuercertificate",
      "raw_input",
      "card cvv",
      "country_code",
      "field issuer certificate",
      "email_address",
      "security_token_field",
      "2facodefield",
      "otp_token",
      "authenticationtoken",
      "input bank acc number",
      "twofactortokenfield",
      "secret field",
      "2fa-code-input",
      "fieldbankaccnumber",
      "field2fapin",
      "inputotptoken",
      "bank-acc[routing-num]-input",
      "employer",
      "input_totp_code",
      "field_social_security_number",
      "inputbankacc",
      "raw-webhook-response",
      "field routing number",
      "security code",
      "field ssn",
      "authentication-token",
      "secret-field",
      "field-raw",
      "inputaccesstoken",
      "2fa-code",
      "field-api-key",
      "card-number-last-four",
      "cvv_field",
      "bank_acc_number_field",
      "totp_pin_field",
      "card[num]input",
      "tax id",
      "field-account-bank-number",
      "field-two-factor-pin",
      "input_card_number",
      "field-bank-acc[routing-num]",
      "security-code-input",
      "auth_token_field",
      "sender",
      "givenname",
      "input_private_key",
      "member-question-redacted",
      "routing number",
      "password1field",
      "input-confirm-passwd",
      "stated-income",
      "receiver-ip-address",
      "net-pay-amount",
      "number",
      "field-totp-pin",
      "api token",
      "fieldsecuritycode",
      "api token input",
      "card[cvv]",
      "field old password",
      "user-token",
      "repeat_password",
      "inputpasswordconfirm",
      "bank account input",
      "field-salt",
      "otp_code_field",
      "tax",
      "gender",
      "bankaccnumfield",
      "bank_account_num_field",
      "inputpassword",
      "input pwd",
      "repeat password",
      "input_routing_number",
      "security_code_input",
      "api_token_input",
      "auth token",
      "field csrf",
      "input_raw",
      "passwd_field",
      "input-routing-number",
      "card_cvv_field",
      "field-stripe-token",
      "input card cvv",
      "input_issuer_certificate",
      "fullname",
      "securitypin",
      "credit-card",
      "receiver-device-contact-name",
      "credentials_field",
      "input new password",
      "createddate",
      "totp code field",
      "date",
      "routing_account_number_field",
      "house_details",
      "first-name",
      "property version",
      "account",
      "confirm_password_field",
      "input-two-factor-pin",
      "encrypted password",
      "field-2fa-token",
      "pin_field",
      "fieldpin",
      "_csrf_input",
      "input old password",
      "_csrf_token",
      "field-issuer-certificate",
      "net_pay_amount",
      "input issuer certificate",
      "api-key-input",
      "memo",
      "field-bank-acc",
      "field_account_number",
      "senderipaddress",
      "fieldotp",
      "email-address",
      "field_api_token",
      "grosspayamount",
      "credit card num input",
      "routing-number-field",
      "bank-acc-num-input",
      "acc number input",
      "card-number",
      "referral-token",
      "input_account_bank_number",
      "access_token_field",
      "inputstripetoken",
      "card number last 4",
      "input_old_password",
      "last-4",
      "-csrf-field",
      "otp_token_field",
      "apitoken",
      "field bank acc",
      "field cc number",
      "old password field",
      "field card num",
      "field-account-routing-number",
      "password field",
      "new password input",
      "input security code",
      "field bank acc num",
      "receiver_zip_code",
      "field credit card number",
      "field-security-pin",
      "field_bank_account[routing_number]",
      "two_factor_token_input",
      "card expiration",
      "two-factor-token-input",
      "referrer token",
      "input access token",
      "card_number_last4",
      "income",
      "two",
      "2fa token",
      "totp_field",
      "receiveridentifier",
      "tokeninput",
      "given-name",
      "feature",
      "ccnumfield",
      "sender_zip_code",
      "credit card input",
      "input-token",
      "inputcsrf",
      "card[num] input",
      "referralurl",
      "credit-card-num-input",
      "cc number",
      "2fafield",
      "passwd",
      "pwd",
      "auth_token",
      "cvv-number",
      "confirm-passwd-field",
      "propertyid",
      "fieldpassword",
      "confirm-password-input",
      "field_2fa_pin",
      "matches ssn digest",
      "input-credentials",
      "cardnumberinput",
      "input totp pin",
      "input-passwd",
      "card[cvv]_field",
      "cardcvvinput",
      "field-cc-num",
      "bank acc num input",
      "input card number",
      "bankaccountnuminput",
      "date-of-birth",
      "last_name",
      "fieldpasswordconfirm",
      "card number last four",
      "account-bank-number-field",
      "passwd-confirm-input",
      "totppininput",
      "creds",
      "inputbankaccnum",
      "totp_pin_input",
      "accesstokeninput",
      "input-account-routing-number",
      "inputssn",
      "panlast4",
      "member-name",
      "property id",
      "repeat password input",
      "field_credit_card",
      "routing_acc_num_field",
      "ssninput",
      "input_token",
      "totp-code-field",
      "field 2fa code",
      "inputcertificate",
      "repeatpasswordinput",
      "fieldsecuritytoken",
      "feature-store",
      "two-factor-pin-field",
      "otp token",
      "referrer_token",
      "otp-field",
      "card num field",
      "postal-code",
      "field_card[num]",
      "field raw",
      "input-password",
      "cvv-field",
      "routing acc num field",
      "lastname",
      "mysql_pwd",
      "stripe token input",
      "oldpasswordfield",
      "address",
      "fname",
      "passwdconfirm",
      "bank-acc[routing-number]-input",
      "input api key",
      "credit card number",
      "checkamount",
      "input-cc-number",
      "pan last 4",
      "keyfield",
      "socialsecuritynumber",
      "bank-account-number-field",
      "input-bank-acc",
      "card[number]field",
      "expiry-date",
      "routing_account_number",
      "input_auth_token",
      "token_field",
      "mobilephone",
      "confirm passwd",
      "input-routing-acc-number",
      "last four",
      "contract-id",
      "input_certificate",
      "expiry date",
      "cvv field",
      "field-otp-pin",
      "field password",
      "social-security-num-field",
      "2fa",
      "field-routing-account-number",
      "security pin field",
      "input_password2",
      "card[cvv]field",
      "inputnewpassword",
      "input private key",
      "raw webhook response",
      "pwdfield",
      "referral_url",
      "zipcode",
      "fieldaccnumber",
      "input-credit-card-num",
      "cvvnumber",
      "otppininput",
      "rule",
      "field-routing-acc",
      "raw",
      "old_password_input",
      "card-number-last4",
      "matches-ssn-digest",
      "card[num] field",
      "2fa_code_input",
      "pin input",
      "pinfield",
      "input routing acc num",
      "card-number-input",
      "input otp",
      "cvvinput",
      "routingaccountnumber",
      "referrersfirstname",
      "field_security_token",
      "body",
      "cert field",
      "field_new_password",
      "confirmpasswordfield",
      "field api token",
      "field bank account",
      "receiver-address",
      "card-num-field",
      "input_password1",
      "input acc number",
      "password input",
      "input-confirm-password",
      "card[number]-input",
      "property",
      "salt input",
      "two factor pin input",
      "fieldcredentials",
      "input-card[number]",
      "inputsecuritypin",
      "totp_token",
      "issuer certificate field",
      "sender state code",
      "2fa code",
      "input_cc_number",
      "securitypinfield",
      "compensation amount",
      "2fatokenfield",
      "api key",
      "field password2",
      "user ip",
      "fieldcsrf",
      "field_api_key",
      "card[cvv]_input",
      "card_num",
      "accnumber",
      "securitycode",
      "account_bank_number",
      "old_password_field",
      "sender zip code",
      "two-factor-token-field",
      "passwd_confirm_input",
      "field_bank_acc_num",
      "input__csrf",
      "contract_id",
      "field_routing_acc_number",
      "routingaccnumfield",
      "two_factor_token_field",
      "card[cvv]-input",
      "bank-account[routing-number]-field",
      "ip",
      "encrypted_password",
      "routing account number field",
      "clientid",
      "usertoken",
      "receiver ip address",
      "sender-ip-address",
      "input csrf",
      "cvv_input",
      "cc num field",
      "input_new_password",
      "raw-field",
      "routing-account-number-field",
      "bank-acc[routing-num]",
      "funding",
      "account-id",
      "two factor token field",
      "field_2fa_token",
      "fieldraw",
      "securitytokenfield",
      "password2 field",
      "2fa pin",
      "client-id",
      "fieldtwofactorpin",
      "cc-number-field",
      "salt-input",
      "field security code",
      "totp code input",
      "social",
      "bank acc num",
      "routing-acc-field",
      "inputroutingaccnumber",
      "two-factor-code",
      "inputconfirmpasswd",
      "confirm-passwd-input",
      "emailaddress",
      "token input",
      "primary-account-number",
      "input_otp",
      "card[cvv]-field",
      "totp pin input",
      "twofactorcode",
      "last_4_ssn",
      "serverdata",
      "referrers_avatar_url",
      "cert-input",
      "card_expiration",
      "cookie",
      "new-password",
      "input-two-factor-code",
      "apisecret",
      "member-question",
      "client-secret",
      "field-password",
      "expirydate",
      "input_two_factor_code",
      "confirmpasswd",
      "stripe_token",
      "compensationamount",
      "field_two_factor_pin",
      "bearer",
      "bank-acc-num-field",
      "input totp",
      "two_factor_pin_input",
      "routingaccnumberinput",
      "bank acc number",
      "field bank account num",
      "input routing number",
      "input2fapin",
      "last 4",
      "cardnumber",
      "input-repeat-password",
      "field-key",
      "user",
      "mysql_pwd_field",
      "field-social-security-number",
      "card-number-field",
      "fieldaccountnumber",
      "cardlast4",
      "encryptedpassword",
      "card[num]",
      "pan_bin",
      "card[num]_input",
      "input auth token",
      "fieldsecret",
      "passwordinput",
      "reset password",
      "bankacc",
      "password2input",
      "message",
      "input account routing number",
      "two-factor-pin",
      "input pin",
      "fieldcardnum",
      "receiveraddress",
      "primaryphone",
      "field_password",
      "date_ofbirth",
      "field-bank-account-num",
      "social security num",
      "user-ip",
      "account_routing_number_field",
      "otp token input",
      "passwdfield",
      "field-bank-account",
      "bankaccount[routingnumber]",
      "input bank account",
      "field-password-confirm",
      "field_raw",
      "input creds",
      "social_security_num",
      "2fainput",
      "taxid",
      "cc num input",
      "accountroutingnumber",
      "accesstokenfield",
      "field totp pin",
      "rule format",
      "house_number",
      "propertyversion",
      "accesstoken",
      "totp_input",
      "credit-card-num",
      "totp input",
      "input_bank_acc_number",
      "api token field",
      "bank-acc[routing-number]-field",
      "input_api_key",
      "stripe_token_input",
      "totpcode",
      "card[cvv] field",
      "certificatefield",
      "bank_acc_number_input",
      "inputbankaccount",
      "certificate-input",
      "social security number input",
      "client_secret",
      "username",
      "fieldcertificate",
      "inputsecuritytoken",
      "csrftoken",
      "accnumberinput",
      "referral-url",
      "userip",
      "fieldauthtoken",
      "card-number-last-4",
      "credit card num",
      "bank_account",
      "factor",
      "two factor pin field",
      "input-security-code",
      "input-credit-card",
      "mysqlpwdinput",
      "input cert",
      "certificate_input",
      "bank-acc-number",
      "card-last-4",
      "field-otp",
      "inputissuercertificate",
      "receiver",
      "field-account-number",
      "fieldotppin",
      "birth",
      "input repeat password",
      "token-field",
      "totpinput",
      "field_otp_pin",
      "passwdinput",
      "phonenumber",
      "two_factor_code",
      "senderstatecode",
      "cert_field",
      "field-ssn",
      "fieldtotppin",
      "ssn_field",
      "insurername",
      "card num input",
      "created-date",
      "input-2fa",
      "input_credentials",
      "pan",
      "input certificate",
      "field-credentials",
      "input_bank_account_number",
      "field routing acc number",
      "2facodeinput",
      "primary account number",
      "privatekeyfield",
      "socialsecuritynumfield",
      "field password1",
      "last-four",
      "domain",
      "middle_name",
      "card-cvv-input",
      "account number field",
      "sender-state-code",
      "input--csrf",
      "agent",
      "fieldstripetoken",
      "cardnumberlast4",
      "field-secret",
      "reset-password-token",
      "cvc",
      "newpassword",
      "salt field",
      "otp_pin_field",
      "accountbanknumberfield",
      "api-secret",
      "phone number",
      "cvc number",
      "field otp pin",
      "field card[num]",
      "security_pin",
      "input_repeat_password",
      "reset_password",
      "inputtwofactorpin",
      "confirm-passwd",
      "mysqlpwd",
      "passwd confirm input",
      "field_routing_account_number",
      "field otp token",
      "inputtwofactorcode",
      "month",
      "receiver_identifier",
      "-csrf",
      "user_token",
      "api_secret",
      "fieldpwd",
      "oldpasswordinput",
      "reset_password_token",
      "fieldkey",
      "socialsecuritynuminput",
      "input_routing_acc_number",
      "check amount",
      "secret",
      "inputapitoken",
      "field security token",
      "totp_pin",
      "input card[number]",
      "id token",
      "expirationdate",
      "input-creds",
      "totp pin",
      "group id",
      "field key",
      "field  csrf",
      "social security num input",
      "field-2fa-pin",
      "card_number_last_4",
      "totp code",
      "receiver_address",
      "field_bank_acc",
      "2fa-token",
      "bank_acc[routing_number]",
      "gross-pay-amount",
      "card",
      "field-pin",
      "cardnumfield",
      "amount",
      "security token field",
      "fieldbankaccount",
      "expiration date",
      "creditcardfield",
      "samlrequest",
      "new-password-field",
      "id_token",
      "input secret",
      "field acc number",
      "twofactorcodeinput",
      "social_security_number_input",
      "new",
      "input_bank_account",
      "card_cvv_input",
      "inputpin",
      "tax-id",
      "security-code",
      "pwd_input",
      "access",
      "input_card_cvv",
      "input-totp",
      "cardnumberlastfour",
      "bankaccnuminput",
      "field_pin",
      "referrertoken",
      "account-number-field",
      "otpfield",
      "card_number_field",
      "_csrf_field",
      "2fatoken",
      "digest",
      "last4",
      "bankaccinput",
      "otp-token-field",
      "bank_acc[routing_number]_input",
      "repeat_password_field",
      "input routing acc",
      "routing account number",
      "statedincome",
      "input_two_factor_token",
      "routing-acc-number",
      "routing account number input",
      "password_field",
      "key field",
      "apikeyinput",
      "authtokeninput",
      "feature store",
      "response-array",
      "bank account num",
      "inputcreditcardnumber",
      "bank_acc",
      "pin field",
      "input 2fa code",
      "security-pin-field",
      "field-bank-account-number",
      "account routing number field",
      "2fapin",
      "card number field",
      "repeat-password",
      "otppin",
      "field_secret",
      "routing_number",
      "passwd confirm",
      "number]",
      "field_routing_acc_num",
      "input_bank_account[routing_number]",
      "security pin input",
      "inputbankaccountnumber",
      "input-stripe-token",
      "bank-account-num",
      "routing_acc_number_field",
      "field_password_confirm",
      "bank_account_number_input",
      "codeverifier",
      "old-password",
      "sender_name",
      "senderaddress",
      "full",
      " csrf token",
      "fieldccnumber",
      "field confirm password",
      "house-details",
      "socialsecuritynum",
      "prn",
      "full_name",
      "otp code",
      "ssn-field",
      "member_name",
      "access_token",
      "ssn_input",
      "date of birth",
      "input-pin",
      "bankaccountnumber",
      "key_input",
      "given name",
      "credentials-field",
      "field credit card num",
      "inputmysqlpwd",
      "social security number field",
      "input-secret",
      "confirmpasswdfield",
      "securitycodeinput",
      "passwordconfirminput",
      "field 2fa token",
      "field2fatoken",
      "saltfield",
      "input credit card",
      "api_key",
      "input confirm password",
      "net",
      "input account bank number",
      "housenumber",
      "insurer name",
      "field certificate",
      "field security pin",
      "_csrf",
      "agent-email",
      "api-token",
      "credentials input",
      "ccnumberfield",
      "middle name",
      "field_credit_card_num",
      "credentials",
      "input-bank-account-num",
      "twofactorpin",
      "sender_ip_address",
      "user-ip-address",
      "confirmpassword",
      "receiver identifier",
      "input_card[num]",
      "fieldprivatekey",
      "passwd-input",
      "credit card num field",
      "inputpassword1",
      "card[num]_field",
      "input_account_routing_number",
      "fieldroutingaccnum",
      "api_token_field",
      "field_totp_code",
      "dateofbirth",
      "input_password_confirm",
      "token_input",
      "email-domain",
      "apikey",
      "bank acc input",
      "password1-input",
      "input_totp",
      "region",
      "input-card-cvv",
      "otp code input",
      "new password field",
      "field-private-key",
      "credit_card_number_input",
      "account-routing-number-input",
      "input-cvv",
      "new_password_input",
      "check",
      "social_security_num_field",
      "input_bank_acc[routing_num]",
      "issuercertificateinput",
      "card[num]field",
      "acc-number-input",
      "input-acc-number",
      "input-otp",
      "field--csrf",
      "otp_code_input",
      "securitytoken",
      "field account number",
      "card[num]-field",
      "merchant name",
      "of",
      "old password",
      "bank acc num field",
      "input security token",
      "security token input",
      "csrf_field",
      "pay_friend_id",
      "social-security-num-input",
      "auth",
      "credit card",
      "bankaccount[routingnumber]field",
      "credit_card_number",
      "inputroutingnumber",
      "routingaccfield",
      "field-repeat-password",
      "input-bank-account-number",
      "credsfield",
      "private key field",
      "pin code",
      "bank acc[routing num] field",
      "2fa-field",
      "password confirm",
      "bank-account-number",
      "bank acc number input",
      "agent_email",
      "password2 input",
      "field totp token",
      "fieldbankacc",
      "property_name",
      "input_social_security_number",
      "2fa-pin",
      "routing-number",
      "issuer certificate input",
      "2fa-token-field",
      "stripe token field",
      "primary-phone",
      "client_id",
      "cert_input",
      "segmentdeviceid",
      "auth-token",
      "field-confirm-password",
      "property_version",
      "password confirm field",
      "otpcode",
      "set_cookie",
      "api_token",
      "bank account number",
      "fieldtotp",
      "four",
      "field_mysql_pwd",
      "totptokenfield",
      "private_key_field",
      "samlresponse",
      "featurestore",
      "field private key",
      "twofactortokeninput",
      "passwd field",
      "security-pin-input",
      "inputsecuritycode",
      "set cookie",
      "field_acc_number",
      "confirm passwd input",
      "mobile_phone",
      "fieldbankaccount[routingnumber]",
      "field_social_security_num",
      "bank_acc_num_field",
      "input_credit_card_num",
      "stripe-token-field",
      "input password2",
      "input key",
      "authentication",
      "field_passwd_confirm",
      "confirm password",
      "input_passwd",
      "input bank acc[routing num]",
    ],
  },
};
