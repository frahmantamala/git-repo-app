import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of as observableOf } from 'rxjs';
import {
  catchError,
  concatMap,
  filter,
  map,
  switchMap,
  withLatestFrom
} from 'rxjs/operators';
import { GithubService } from '@app/core/github.service';
import { GithubSearchResultsStoreSelectors } from '.';
import { RootState } from '@app/state/root-state';
import * as featureActions from './actions';
import { UtilsService } from '@app/core/utils.service';
import { UserProfileService } from '@app/core/user-profile.service';
import { Router } from '@angular/router';

@Injectable()
export class GithubSearchResultsStoreEffects {
  constructor(
    private githubService: GithubService,
    private store: Store<RootState>,
    private actions$: Actions,
    private utilsService: UtilsService,
    private profileUserService: UserProfileService,
    private router: Router
  ) { }

  searchOnUpdateQueryEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.updateSearchQuery),
      map(() => featureActions.searchRequest())
    )
  );

  loadUserOnShowDetailsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.navigateDetails),
      map(({ userUrl }) =>
        featureActions.loadUserRequest({
          url: userUrl
        })
      )
    )
  );

  searchRequestEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.searchRequest),
      withLatestFrom(
        this.store.select(
          GithubSearchResultsStoreSelectors.selectGithubSearchResultsCurrentQuery
        ),
      ),
      concatMap(([_, query]) =>
        this.githubService.searchUsers(query).pipe(
          map(results =>
            featureActions.searchSuccess({
              results
            })
          ),
          catchError(error =>
            observableOf(
              featureActions.searchFailure({
                error: this.utilsService.serializeError(error).message
              })
            )
          )
        )
      )
    )
  );

  loadUserRequestEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.loadUserRequest),
      switchMap(({ url }) =>
        this.githubService.getUser(url).pipe(
          map(user =>
            featureActions.loadUserSuccess({
              user
            })
          ),
          catchError(error =>
            observableOf(
              featureActions.loadUserFailure({
                error: this.utilsService.serializeError(error).message
              })
            )
          )
        )
      )
    )
  );

  navigateToDetailPageOnLoadUserSuccessEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(featureActions.loadUserSuccess),
        withLatestFrom(
          this.store.select(
            GithubSearchResultsStoreSelectors.selectGithubSearchResultsCurrentUser
          )
        ),
        map(([_, user]) => {
          this.router.navigate(['user-profile']);
          this.profileUserService.storeUserProfile(user);
        })
      ),
    { dispatch: false }
  );
}
