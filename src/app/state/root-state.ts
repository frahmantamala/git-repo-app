import { GithubSearchResultsStoreState } from './search-git-username-state';
import { GithubSearchRepoResultsStoreState } from './search-git-repo';

export interface RootState {
  githubSearchResults: GithubSearchResultsStoreState.State;
  githubRepoSearchResults: GithubSearchRepoResultsStoreState.State;
}
