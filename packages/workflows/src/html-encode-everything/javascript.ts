import { BytesInput, SDK } from "caido:workflow";

export function run(input: BytesInput, sdk: SDK) {
    let parsed = sdk.asString(input);
    let result = "";
    for (const char of parsed) {
        result += `&#${char.charCodeAt(0)};`;
    }
    return result;
}
