import { Action, createReducer, on } from '@ngrx/store';
import * as featureActions from './actions';
import { featureAdapter, initialState, State } from './state';

const featureReducer = createReducer(
  initialState,
  on(featureActions.loadRepoRequest, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(featureActions.loadRepoSuccess, (state, { repos }) => ({
    ...state,
    isLoading: false,
    error: null,
    repo: repos
  })),
  on(featureActions.loadRepoFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
