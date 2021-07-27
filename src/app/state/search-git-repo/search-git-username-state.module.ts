import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GithubSearchRepoResultsStoreEffects } from './effects';
import { reducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('githubRepoSearchResults', reducer),
    EffectsModule.forFeature([GithubSearchRepoResultsStoreEffects])
  ]
})
export class GitSearchUserRepoStoreModule { }
