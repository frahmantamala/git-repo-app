import { createEntityAdapter, EntityState } from '@ngrx/entity';

import { GithubUser, GithubSearchResult } from '../../models';

export const featureAdapter = createEntityAdapter<GithubSearchResult>({
  selectId: model => model.id
});

export interface State extends EntityState<GithubSearchResult> {
  isLoading: boolean;
  error: string;
  incompleteResults: boolean;
  currentQuery: string;
  currentUser: GithubUser;
}

export const initialState: State = featureAdapter.getInitialState({
  isLoading: false,
  error: null,
  incompleteResults: false,
  currentQuery: null,
  currentUser: null
});
