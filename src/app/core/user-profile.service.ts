import { Injectable } from '@angular/core';
import { GithubUser, UserRepo } from '@app/models';

@Injectable()
export class UserProfileService {
  private userProfile: GithubUser;
  private userRepo: any;

  storeUserProfile(userData: GithubUser): void {
    this.userProfile = userData;
  }

  getUserProfile(): GithubUser {
    return this.userProfile;
  }

  storeRepoProfile(repoData: any): void {

    this.userRepo = repoData;
    console.log(this.userRepo);
  }

  getUserRepo() {
    return this.userRepo;
  }
}
