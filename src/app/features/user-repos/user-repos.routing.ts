import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserReposComponent } from './user-repos.component';


const routes: Routes = [
  {
    path: '',
    component: UserReposComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRepoRoutingModule { }
