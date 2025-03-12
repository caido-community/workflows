export function run(input: unknown, sdk: { asString: (input: unknown) => string }): string {
  let newReq: string = sdk.asString(input);
  const paddingAmount: number = 8000;
  let index: number = newReq.indexOf("\r\n\r\n") + 4;

  if (/content-type: ?application\/json/i.test(newReq)) {
    index = index + 1;
    const newReqBefore: string = newReq.substring(0, index);
    const newReqAfter: string = newReq.substring(index);
    newReq = newReqBefore + '"a":"' + "a".repeat(paddingAmount) + '",' + newReqAfter;
  } else if (/content-type: ?application\/x-www-form-urlencoded/i.test(newReq)) {
    const newReqBefore: string = newReq.substring(0, index);
    const newReqAfter: string = newReq.substring(index);
    newReq = newReqBefore + "a=" + "a".repeat(paddingAmount) + "&" + newReqAfter;
  } else if (/content-type: ?application\/xml/i.test(newReq)) {
    const newReqBefore: string = newReq.substring(0, index);
    const newReqAfter: string = newReq.substring(index);
    newReq = newReqBefore + "<!--" + "a".repeat(paddingAmount) + "-->" + newReqAfter;
  }

  return newReq ? newReq : "\r\n\r\nIncorrect Usage: Press CTRL-Z, then select the whole request and try again...\r\n\r\n";
}
