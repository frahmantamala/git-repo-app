import { createAction, props } from '@ngrx/store';
import {
  GithuhWrappeSearchResult,
  GithubUser,
  GithubSearchQuery
} from '@app/models';

export const updateSearchQuery = createAction(
  '[Search Form] Update Search Query',
  props<{ searchQuery: GithubSearchQuery }>()
);

export const searchRequest = createAction(
  '[Github Search Effect] Search Request'
);

export const searchFailure = createAction(
  '[Github Search API] Search Failure',
  props<{ error: string }>()
);

export const searchSuccess = createAction(
  '[Github Search API] Search Success',
  props<{ results: GithuhWrappeSearchResult }>()
);

export const navigateDetails = createAction(
  '[Search Results] Show Details',
  props<{ userUrl: string }>()
);

export const showRepos = createAction(
  '[Search Results] Show Repository',
  props<{ userUrl: string }>()
);

export const loadUserRequest = createAction(
  '[Github Search Effect] Load User Request',
  props<{ url: string }>()
);

export const loadUserFailure = createAction(
  '[Github User API] Load User Failure',
  props<{ error: string }>()
);

export const loadUserSuccess = createAction(
  '[Github User API] Load User Success',
  props<{ user: GithubUser }>()
);

