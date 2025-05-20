// Kinds of patterns to search for
export const Kind = {
  secret: "secret",
  PII: "PII",
  field: "field",
} as const;
export type Kind = (typeof Kind)[keyof typeof Kind];
