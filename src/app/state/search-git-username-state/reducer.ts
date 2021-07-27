import { Action, createReducer, on } from '@ngrx/store';
import * as featureActions from './actions';
import { featureAdapter, initialState, State } from './state';

const featureReducer = createReducer(
  initialState,
  on(featureActions.updateSearchQuery, (state, { searchQuery }) => ({
    ...state,
    currentQuery: searchQuery.query
  })),
  on(featureActions.searchRequest, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(featureActions.searchSuccess, (state, { results }) =>
    featureAdapter.addAll(results.items, {
      ...state,
      isLoading: false,
      error: null,
      incompleteResults: results.incomplete_results
    })
  ),
  on(featureActions.searchFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),
  on(featureActions.loadUserRequest, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(featureActions.loadUserSuccess, (state, { user }) => ({
    ...state,
    isLoading: false,
    error: null,
    currentUser: user
  })),
  on(featureActions.loadUserFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
