import { type BytesInput, type SDK } from "caido:workflow";

/**
 * @param {BytesInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data>}
 */

export function run(input: BytesInput, sdk: SDK) {
  const uuid = generateUUID();
  const parsed = sdk.asString(uuid);
  return parsed;
}

function generateUUID() {
  let d = new Date().getTime();
  let d2 = 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}
