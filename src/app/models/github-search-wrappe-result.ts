import { GithubSearchResult } from './github-search-result';

export interface GithuhWrappeSearchResult {
  incomplete_results: boolean;
  items: GithubSearchResult[];
}
