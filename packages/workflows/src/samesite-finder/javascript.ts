import { HttpInput, SDK } from "caido:workflow";

/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }: HttpInput, sdk: SDK) {
  if (!request || !response) {
    return undefined;
  }

  const reqID = request.getId();
  const host = request.getHost();
  const headers = response.getHeaders();
  const cookies = Object.keys(headers)
    .filter((key) => key.toLowerCase() === "set-cookie")
    .flatMap((key) => headers[key]);

  let description = "";

  if (cookies.length > 0) {
    description += `[+] Cookies have been issued by ${host} (ID=${reqID})\n`;

    const maxCookieKeyLength = Math.max(
      ...cookies.map((cookie) => cookie?.split("=")[0]?.trim().length ?? 0)
    );

    for (const cookie of cookies) {
      let sameSitePolicy = "Lax (attribute is not set)";
      const cookieKey = cookie?.split("=")[0]?.trim() ?? "";

      const sameSiteMatch = cookie?.match(/SameSite=(\w+)/);
      if (sameSiteMatch && sameSiteMatch[1]) {
        sameSitePolicy = sameSiteMatch[1];
      }

      description += `Cookie name : ${cookieKey.padEnd(
        maxCookieKeyLength
      )}\t(SameSite = ${sameSitePolicy})\n`;
    }

    let finding = {
      title: "Cookies Issued",
      description: description.trim(),
      reporter: "SameSiteFinder",
      request: request,
    };
    await sdk.findings.create(finding);
  }
}
