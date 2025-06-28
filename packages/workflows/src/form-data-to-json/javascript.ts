import { type BytesInput, type SDK } from "caido:workflow";
import Qs from "qs";

export function run(input: BytesInput, sdk: SDK) {
  const parsed = sdk.asString(input);
  return JSON.stringify(Qs.parse(parsed));
}
