export interface Workflow {
  id: string;
  name: string;
  description: string;
  version: string;
  kind: string;
  author: {
    name: string;
    email?: string;
  };
  url: string;
}

export interface SearchFilters {
  searchQuery: string;
}

export type Result<T> =
  | { kind: "Error"; error: string }
  | { kind: "Success"; value: T };

export function ok<T>(value: T): Result<T> {
  return { kind: "Success", value };
}

export function error<T>(error: string): Result<T> {
  return { kind: "Error", error };
}
