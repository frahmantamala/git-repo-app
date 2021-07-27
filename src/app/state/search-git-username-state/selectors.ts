import { createFeatureSelector, createSelector } from '@ngrx/store';

import { GithubUser, GithubSearchResult } from '../../models';
import { featureAdapter, State } from './state';

export const selectGithubSearchResultsState = createFeatureSelector<State>(
  'githubSearchResults'
);

export const selectAllGithubSearchResultsItems: (
  state: object
) => GithubSearchResult[] = featureAdapter.getSelectors(
  selectGithubSearchResultsState
).selectAll;

export const selectGithubSearchResultsError = createSelector(
  selectGithubSearchResultsState,
  (state: State): any => state.error
);

export const selectGithubSearchResultsIsLoading = createSelector(
  selectGithubSearchResultsState,
  (state: State): boolean => state.isLoading
);

export const selectGithubSearchResultsCurrentQuery = createSelector(
  selectGithubSearchResultsState,
  (state: State): string => state.currentQuery
);

export const selectGithubSearchResultsCurrentUser = createSelector(
  selectGithubSearchResultsState,
  (state: State): GithubUser => state.currentUser
);

export const selectGithubSearchResultsForCurrentPage = createSelector(
  selectGithubSearchResultsState,
  selectAllGithubSearchResultsItems,
  (state: State, items: GithubSearchResult[]): GithubSearchResult[] => {

    return items;
  }
);
