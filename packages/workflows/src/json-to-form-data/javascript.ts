import { BytesInput, SDK } from "caido:workflow";
import Qs from "qs";

export function run(input: BytesInput, sdk: SDK) {
    let parsed = sdk.asString(input);
    return Qs.stringify(JSON.parse(parsed));
}
