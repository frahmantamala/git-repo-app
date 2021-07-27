import { Component, OnInit } from '@angular/core';
import { RootState } from '@app/state/root-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { GithubSearchResultsStoreActions, GithubSearchResultsStoreSelectors } from '@app/state/search-git-username-state';
import { GithubSearchQuery, GithubSearchResult } from '@app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  resultsForCurrentPage$: Observable<GithubSearchResult[]>;
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store<RootState>
  ) { }

  ngOnInit(): void {
    this.resultsForCurrentPage$ = this.store.select(
      GithubSearchResultsStoreSelectors.selectGithubSearchResultsForCurrentPage
    );

    this.isLoading$ = this.store.select(
      GithubSearchResultsStoreSelectors.selectGithubSearchResultsIsLoading
    );
  }

  onUpdateSearchQuery(searchQuery: GithubSearchQuery) {
    this.store.dispatch(
      GithubSearchResultsStoreActions.updateSearchQuery({
        searchQuery
      })
    );
  }

  onNavigateDetails(userUrl: string) {
    this.store.dispatch(
      GithubSearchResultsStoreActions.navigateDetails({ userUrl })
    );
  }
}
