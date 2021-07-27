import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserRepo } from '../../models';
import { featureAdapter, State } from './state';

export const selectGithubRepoResultsState = createFeatureSelector<State>(
  'githubRepoSearchResults'
);

export const selectAllGithubRepoSearchResultsItems: (
  state: object
) => UserRepo[] = featureAdapter.getSelectors(
  selectGithubRepoResultsState
).selectAll;

export const selectGithubSearchResultsError = createSelector(
  selectGithubRepoResultsState,
  (state: State): any => state.error
);

export const selectGithubSearchResultsIsLoading = createSelector(
  selectGithubRepoResultsState,
  (state: State): boolean => state.isLoading
);

// export const selectGithubSearchResultsCurrentQuery = createSelector(
//   selectGithubRepoResultsState,
//   (state: State): string => state.currentQuery
// );

export const selectGithubSearchResultsCurrentUser = createSelector(
  selectGithubRepoResultsState,
  (state: State): UserRepo => state.repo
);

export const selectGithubSearchResults = createSelector(
  selectGithubRepoResultsState,
  selectAllGithubRepoSearchResultsItems,
  (state: State, items: UserRepo[]): UserRepo[] => {
    console.log('reposs here', items)
    return items;
  }
);
