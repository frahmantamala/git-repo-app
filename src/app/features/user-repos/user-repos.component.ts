import { Component, OnInit } from '@angular/core';
import { UserRepo } from '@app/models';
import { RootState } from '@app/state/root-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GithubSearchRepoResultsStoreSelectors } from '@app/state/search-git-repo';
import { UserProfileService } from '@app/core/user-profile.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss']
})
export class UserReposComponent implements OnInit {
  isLoading$: Observable<boolean>;
  resultRepo$: Observable<any>;

  repoData: any;

  constructor(
    private store: Store<RootState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.resultRepo$ = this.store.select(
      GithubSearchRepoResultsStoreSelectors.selectGithubSearchResultsCurrentUser
    );

    this.resultRepo$.pipe(delay(200)).subscribe(val => {
      // console.log(val, 'hereee')
      if (val === null) {
        // console?.log('asdhajsdhasd', val)
        this.router.navigate(['']);
      }
    });

    this.isLoading$ = this.store.select(
      GithubSearchRepoResultsStoreSelectors.selectGithubSearchResultsIsLoading
    );
  }

  onClickBack(): void {
    this.router.navigate(['']);
  }

}
