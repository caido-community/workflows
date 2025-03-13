import xmljs from 'xml-js';
import { BytesInput, SDK } from 'caido:workflow';

export function run(input: BytesInput, sdk: SDK) {
  let parsed = sdk.asString(input);
  return '<?xml version="1.0" encoding="UTF-8" ?>' + xmljs.json2xml(parsed, {compact: true});
}

