import { BytesInput, SDK } from "caido:workflow";

/**
 * @param {BytesInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data>}
 */
export function run(input: BytesInput, sdk: SDK): MaybePromise<Data> {
  let parsed = sdk.asString(Date.now().toString());
  return parsed;
}
