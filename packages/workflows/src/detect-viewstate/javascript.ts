/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {
    if (request) {
      // I only want this to have one finding per host
      return `viewstate_detect_${request.getHost()}`;
    }
  }