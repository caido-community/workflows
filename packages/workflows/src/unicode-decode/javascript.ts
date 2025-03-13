export function run(input: BytesInput, sdk: SDK) {
  let parsed = sdk.asString(input);
  var result = '';
  var chars = parsed.match(/\\u[\dA-F]{4}/gi);
  if (chars) {
    for (var i = 0; i < chars.length; i++) {
      const char = chars[i];
      if (char) {
        result += String.fromCharCode(parseInt(char.replace("\\u", ""), 16));
      }
    }
  }

  sdk.console.log(parsed);
  return result;
}
