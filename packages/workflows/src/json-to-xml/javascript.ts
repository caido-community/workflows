import { type BytesInput, type SDK } from "caido:workflow";
import xmljs from "xml-js";

export function run(input: BytesInput, sdk: SDK) {
  const parsed = sdk.asString(input);
  return (
    '<?xml version="1.0" encoding="UTF-8" ?>' +
    xmljs.json2xml(parsed, { compact: true })
  );
}
