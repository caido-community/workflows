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
