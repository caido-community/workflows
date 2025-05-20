import { SDK, Data, HttpInput } from "caido:workflow";
import db from "./db";
import { nopKinds, excludePatterns } from "./config";
import { Kind } from "./types";

type Result = {
  name: string;
  regex: string;
  confidence: string;
  matches: string[];
};

/**
 * Find potential leaks in a given string based on specified 'kind'.
 *
 * @param {any} s - The string to search for potential leaks.
 * @param {any} kind - The category or 'kind' of patterns to use for the
 *                        search.
 * @returns {Promise<Result[]>} - An array of objects representing
 *                                     potential leaks found. Each object
 *                                     contains the pattern details and matched
 *                                     substrings.
 */
async function findLeaks(
  s: string | undefined,
  kind: "secret" | "PII",
): Promise<Result[]> {
  const results: Result[] = [];

  if (!s) return results;

  const patterns = db.hasOwnProperty(kind) ? db[kind] : undefined;
  if (!patterns) return results;

  for (const p of patterns) {
    const pattern = p.pattern;
    const re = new RegExp(pattern.regex);
    const matches = s.match(re);

    const ex = excludePatterns[kind];
    if (ex && ex.includes(pattern.name)) continue;
    if (!matches) continue;
    let result: Result = { ...pattern, matches };
    results.push(result);
  }

  return results;
}

/**
 * Find (sensitive) fields that match any of the given strings.
 *
 * @param {...any} s - The strings to search for field matches.
 * @returns {Promise<Array<string>>} - An array of strings representing fields
 *                                     that match the given strings.
 */
async function findFields(
  ...s: Array<string | undefined>
): Promise<Array<string>> {
  const results: string[] = [];

  const fields = db.field.fields;
  for (const field of fields) {
    for (const target of s) {
      const ex = excludePatterns.field;
      if (ex && ex.includes(field)) continue;
      if (!target) continue;

      const match = target.includes(field);
      if (match) results.push(field);
    }
  }

  return results;
}

export async function run(
  input: HttpInput,
  sdk: SDK,
): Promise<Data | undefined> {
  const request = input.request;
  const response = input.response;

  if (request && response) {
    const body = response.getBody()?.toText();
    const headers = {
      request: JSON.stringify(request.getHeaders()),
      response: JSON.stringify(response.getHeaders()),
    };

    for (const kind of [Kind.secret, Kind.PII, Kind.field]) {
      let results = [];

      if (nopKinds && nopKinds.includes(kind)) continue;

      switch (kind) {
        case "field":
          results = await findFields(
            request.getPath(),
            request.getQuery(),
            headers.request,
            request.getBody()?.toText(),
            headers.response,
            body,
          );
          break;
        default: // 'secret' or 'PII'
          results = await findLeaks(body, kind);
          break;
      }

      for (const result of results) {
        let finding: FindingSpec = {
          title: "Found",
          reporter: "Leakz",
          request: request,
        };

        if (typeof result === "object") {
          // kind: 'secret' or 'PII'
          finding.title += ` "${result.name}" ${kind}`;
          finding.description = JSON.stringify({
            name: result.name,
            matches: result.matches,
            confidence: result.confidence,
          });
          finding.dedupeKey = `${kind}-${result.name}-${request.getUrl()}`;
        } else {
          finding.title += ` "${result}" sensitive ${kind}`;
          finding.description =
            "Request and/or response may contains sensitive" +
            ` "${result}" field.`;
          finding.dedupeKey = `${kind}-${result}-${request.getUrl()}`;
        }

        await sdk.findings.create(finding);
      }
    }
  }

  return;
}
