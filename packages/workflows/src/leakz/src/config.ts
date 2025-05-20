import { Kind } from "./types";

/**
 * Array of kinds that are exempted from the no operation (nop) handling.
 * Results may include false-positives, so add kinds to the list of exclusions
 * if desired.
 * Valid kinds are 'secret', 'PII', and 'field' (case-sensitive).
 */
export const nopKinds: Kind[] = [Kind.field, Kind.PII];

/**
 * Object containing exclusion patterns for different kinds.
 */
export const excludePatterns: Record<Kind, string[]> = {
  [Kind.secret]: ["Slackwebhook"],
  [Kind.PII]: [],
  [Kind.field]: [],
};
