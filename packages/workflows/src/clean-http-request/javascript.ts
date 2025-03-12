import { BytesInput, SDK } from "caido:workflow";

function parseAndFilterHeaders(
    rawRequest: string,
    headersToRemove: string[],
    headersToReplace: Record<string, string>
): string {
    const lines = rawRequest.split('\r\n');

    let inHeaderSection = true;

    const filteredHeaders = lines.map(line => {
        if (inHeaderSection && line.trim() === '') {
            inHeaderSection = false;
        }

        if (inHeaderSection) {
            if (line.includes(':')) {
                const [headerName] = line.split(':');
                const trimmedHeaderName = headerName?.trim() || "";
                if (headersToRemove.includes(trimmedHeaderName)) {
                    return '$REMOVE_ME$';
                } else if (headersToReplace[trimmedHeaderName]) {
                    return `${headerName}: ${headersToReplace[trimmedHeaderName]}`;
                }
            }
        }

        return line;
    }).filter(line => line !== '$REMOVE_ME$');

    const filteredRequest = filteredHeaders.join('\r\n');
    return filteredRequest;
}

const headersToRemove: string[] = [
    "Sec-Fetch-Mode",
    "Sec-Fetch-Site",
    "Sec-Fetch-Dest",
    "sec-ch-ua-platform",
    "sec-ch-ua",
    "sec-ch-ua-mobile",
    "sec-ch-ua-full-version-list",
    "sec-ch-ua-arch",
    "sec-ch-ua-model",
    "sec-ch-ua-platform-version",
    "Connection",
    "Accept-Encoding",
    "Accept-Language",
    "Content-Length",
];

const headersToReplace: Record<string, string> = {
    "Cookie": "YOUR_COOKIES",
    "Authorization": "YOUR_AUTH_TOKEN",
    "X-XSRF-TOKEN": "YOUR_XSRF_TOKEN",
    "XSRF-TOKEN": "YOUR_XSRF_TOKEN",
    "CSRF-TOKEN": "YOUR_CSRF_TOKEN",
};

export function run(input: BytesInput, sdk: SDK): string {
    const parsed = sdk.asString(input);
    return parseAndFilterHeaders(parsed, headersToRemove, headersToReplace);
}
