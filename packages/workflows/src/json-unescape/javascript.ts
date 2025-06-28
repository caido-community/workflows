import { type BytesInput, type SDK } from "caido:workflow";

export function run(input: BytesInput, sdk: SDK) {
  let parsed = sdk.asString(input);
  if (!parsed.startsWith('"')) {
    parsed = '"' + parsed;
  }

  if (!parsed.endsWith('"')) {
    parsed += '"';
  }
  return JSON.parse(parsed);
}
