export function run(input: BytesInput, sdk: SDK) {
  const parsed = sdk.asString(input);
  let result = "";
  const chars = parsed.match(/\\u[\dA-F]{4}/gi);
  if (chars) {
    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      if (char !== undefined) {
        result += String.fromCharCode(parseInt(char.replace("\\u", ""), 16));
      }
    }
  }

  sdk.console.log(parsed);
  return result;
}
