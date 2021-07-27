import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from '@app/core/user-profile.service';
import { GithubUser } from '@app/models';
import { RootState } from '@app/state/root-state';
import { GithubSearchRepoResultsStoreActions } from '@app/state/search-git-repo';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  subscription = new Subscription();

  profileData: GithubUser;

  constructor(
    private profileUserService: UserProfileService,
    private router: Router,
    private store: Store<RootState>
  ) { }

  ngOnInit(): void {
    this.profileData = this.profileUserService.getUserProfile();
    if (!this.profileData) {
      this.router.navigate(['']);
    }
  }

  onClickBack(): void {
    this.router.navigate(['']);
  }

  onClicGoToRepo(): void {
    this.router.navigate(['user-repos']);
    const repoUrl = this.profileData.repos_url;
    this.store.dispatch(
      GithubSearchRepoResultsStoreActions.showRepos({ repoUrl })
    );
  }
}
