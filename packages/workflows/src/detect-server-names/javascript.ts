export function run(input: any): any {
  const { response } = input;
  
  if (!response) {
    return input;
  }
  
  const serverNames = new Set([
    "awselb", "Kestrel", "Apache", "Nginx", "Microsoft-IIS", "LiteSpeed", "Google Frontend", 
    "GWS", "openresty", "IBM_HTTP_Server", "AmazonS3", "CloudFront", "AkamaiGHost", "Jetty", 
    "Tengine", "lighttpd", "AOLserver", "ATS", "Boa", "Caddy", "Cherokee", "Caudium", "Hiawatha", 
    "GlassFish", "H2O", "httpd", "Jigsaw", "Mongrel", "NCSA HTTPd", "Netscape Enterprise", 
    "Oracle iPlanet", "Pound", "Resin", "thttpd", "Tornado", "Varnish", "WebObjects", "Xitami", 
    "Zope", "Werkzeug", "WebSTAR", "WebSEAL", "WebServerX", "WebtoB", "Squid", "Sun Java System Web Server", 
    "Sun ONE Web Server", "Stronghold", "Zeus Web Server", "Roxen", "RapidLogic", "Pramati", 
    "Phusion Passenger", "Oracle Containers for J2EE", "Oracle-Application-Server-10g", "Oracle-Application-Server-11g", 
    "Nostromo", "Novell-HTTP-Server", "NaviServer", "MochiWeb", "Microsoft-HTTPAPI", "Mbedthis-Appweb", 
    "Lotus-Domino", "Kangle", "Joost", "Jino", "IceWarp", "GoAhead", 
    "Flywheel", "EdgePrism", "DMS", "Cowboy", "CommuniGatePro", "CompaqHTTPServer", "CERN", "CauchoResin", 
    "BarracudaHTTP", "BaseHTTP", "AllegroServe", "Abyss", "4D_WebSTAR_S", "4D_WebSTAR_D", 
    "Yaws", "WDaemon", "Virtuoso", "UserLand", "TUX", "TwistedWeb", "Thin", 
    "Thttpd", "Swiki", "SurgeLDAP", "Sun-ONE-Web-Server", "Sun-ONE-Application-Server", 
    "Sucuri/Cloudproxy", "SSWS", "SWS", "SW", "srv", "squid", "Spamfire", "SOMA", 
    "Snap", "SmugMug", "SME Server", "Smart-4-Hosting", "Sioux", "SilverStream", "Silk", "Siemens Gigaset WLAN Camera"
  ]);
  
  const serverHeader = response.headers?.["server"] || response.headers?.["Server"];
  
  if (serverHeader && serverNames.has(serverHeader)) {
    return {
      ...input,
      request: {
        ...input.request,
        annotations: {
          ...input.request.annotations,
          notes: `Detected '${serverHeader}' in 'Server' header`
        }
      }
    };
  }
  
  return input;
}