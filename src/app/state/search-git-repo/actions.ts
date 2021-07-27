import { createAction, props } from '@ngrx/store';
import { UserRepo } from '@app/models';

// export const updateSearchQuery = createAction(
//   '[Search Form] Update Search Query',
//   props<{ searchQuery: GithubSearchQuery }>()
// );

// export const searchRequest = createAction(
//   '[Repo Search Effect] Search Request'
// );

// export const searchFailure = createAction(
//   '[Github Search API] Search Failure',
//   props<{ error: string }>()
// );

// export const searchSuccess = createAction(
//   '[Github Search API] Search Success',
//   props<{ results: GithuhWrappeSearchResult }>()
// );

// export const navigateDetails = createAction(
//   '[Search Results] Show Details',
//   props<{ userUrl: string }>()
// );

export const showRepos = createAction(
  '[Search Results] Show Repository',
  props<{ repoUrl: string }>()
);

export const loadRepoRequest = createAction(
  '[Github Search Effect] Load Repo Request',
  props<{ url: string }>()
);

export const loadRepoFailure = createAction(
  '[Github User API] Load Repo Failure',
  props<{ error: string }>()
);

export const loadRepoSuccess = createAction(
  '[Github User API] Load Repo Success',
  props<{ repos: UserRepo }>()
);

