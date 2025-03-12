import { BytesInput, SDK } from 'caido:workflow';

export function run(input: BytesInput, sdk: SDK) {
  let parsed = sdk.asString(input);
  var result = '';
  for (var i = 0; i < parsed.length; i++) {
    result += '\\u' + ('0000' + parsed.charCodeAt(i).toString(16)).slice(-4);
  }

  sdk.console.log(parsed);
  return result;
}
