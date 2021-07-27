import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { SearchGitUsernameStoreModule } from './search-git-username-state/search-git-username-state.module';
import { GitSearchUserRepoStoreModule } from './search-git-repo/search-git-username-state.module';

@NgModule({
  imports: [
    CommonModule,
    SearchGitUsernameStoreModule,
    GitSearchUserRepoStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  declarations: []
})
export class RootStoreModule { }
