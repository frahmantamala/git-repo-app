import { UserRepo } from './github-user-repo';

export interface GithubRepoResult {
  incomplete_results: boolean;
  items: UserRepo[];
}
