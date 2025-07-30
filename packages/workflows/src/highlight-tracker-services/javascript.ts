export function run(input: any): any {
  const { request } = input;
  
  if (!request?.url) {
    return { isTrackerService: false };
  }
  
  const trackedHosts = new Set([
    "www.gstatic.com", "events.statsigapi.net", "ingesteer.services-prod.nsvcs.net", 
    "js-eu1.hs-analytics.net", "static.hotjar.com", "forms-eu1.hscollectedforms.net", 
    "www.google-analytics.com", "www.googletagmanager.com", "static.xx.fbcdn.net", 
    "stats.g.doubleclick.net", "collector.github.com"
  ]);
  
  const trackedPaths = new Set(["/logging/v1", "/track"]);
  const trackedParameters = new Set(["logs", "log"]);
  
  const url = request.url.toLowerCase();
  
  // Extract host and path from URL
  try {
    const urlObj = new URL(url);
    const host = urlObj.hostname;
    const path = urlObj.pathname;
    
    // Check for tracked host
    if (trackedHosts.has(host)) {
      return { isTrackerService: true };
    }
    
    // Check for tracked path
    if (trackedPaths.has(path)) {
      return { isTrackerService: true };
    }
    
    // Check for tracked parameters
    const searchParams = urlObj.searchParams;
    for (const [key, value] of searchParams) {
      if (trackedParameters.has(key.toLowerCase()) || trackedParameters.has(value.toLowerCase())) {
        return { isTrackerService: true };
      }
    }
    
    // Check POST body parameters if available
    if (request.body && typeof request.body === 'object') {
      const bodyParams = request.body;
      for (const [key, value] of Object.entries(bodyParams)) {
        if (trackedParameters.has(key.toLowerCase()) || 
            (typeof value === 'string' && trackedParameters.has(value.toLowerCase()))) {
          return { isTrackerService: true };
        }
      }
    }
    
  } catch (e) {
    // Fallback for malformed URLs
    const urlParts = url.split("/");
    const host = urlParts.length > 2 ? urlParts[2] : "";
    
    if (trackedHosts.has(host)) {
      return { isTrackerService: true };
    }
  }
  
  return { isTrackerService: false };
}