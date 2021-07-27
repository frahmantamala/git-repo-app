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
import { GithubSearchRepoResultsStoreSelectors } from '.';
import { RootState } from '@app/state/root-state';
import * as featureActions from './actions';
import { UtilsService } from '@app/core/utils.service';
import { UserProfileService } from '@app/core/user-profile.service';
import { Router } from '@angular/router';

@Injectable()
export class GithubSearchRepoResultsStoreEffects {
  constructor(
    private githubService: GithubService,
    private store: Store<RootState>,
    private actions$: Actions,
    private utilsService: UtilsService,
    private userProfileService: UserProfileService
  ) { }


  loadRepoOnShowDetailsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.showRepos),
      map(({ repoUrl }) => {
        console.log('repoUrl mamama', repoUrl)
        return featureActions.loadRepoRequest({
          url: repoUrl
        })
      }
      )
    )
  );

  loadRepoRequestEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.loadRepoRequest),
      switchMap(({ url }) =>
        this.githubService.getRepo(url).pipe(
          map(repos =>
            featureActions.loadRepoSuccess({
              repos
            })
          ),
          catchError(error =>
            observableOf(
              featureActions.loadRepoFailure({
                error: this.utilsService.serializeError(error).message
              })
            )
          )
        )
      )
    )
  );

  navigateToRepoPageOnLoadUserDetailsSuccessEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(featureActions.loadRepoSuccess),
        withLatestFrom(
          this.store.select(
            GithubSearchRepoResultsStoreSelectors.selectGithubSearchResultsCurrentUser
          )
        ),
        map(([_, repos]) => {
          // repo here
          this.userProfileService.storeRepoProfile(repos)
        })
      ),
    { dispatch: false }
  );
}
