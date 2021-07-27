import { createEntityAdapter, EntityState } from '@ngrx/entity';

import { UserRepo } from '../../models';

export const featureAdapter = createEntityAdapter<UserRepo>({
  selectId: model => model.id
});

export interface State extends EntityState<UserRepo> {
  isLoading: boolean;
  error: string;
  incompleteResults: boolean;
  repo: UserRepo;
}

export const initialState: State = featureAdapter.getInitialState({
  isLoading: false,
  error: null,
  incompleteResults: false,
  repo: null
});
