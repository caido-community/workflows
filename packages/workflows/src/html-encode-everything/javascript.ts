import { type BytesInput, type SDK } from "caido:workflow";

export function run(input: BytesInput, sdk: SDK) {
  const parsed = sdk.asString(input);
  let result = "";
  for (const char of parsed) {
    result += `&#${char.charCodeAt(0)};`;
  }
  return result;
}
