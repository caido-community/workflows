import { type HttpInput } from "caido:workflow";

/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export function run({ request }: HttpInput) {
  if (request) {
    // I only want this to have one finding per path
    return `url_in_param_${request.getHost()}${request.getPath()}`;
  }
}
