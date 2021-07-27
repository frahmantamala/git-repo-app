import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRepoRoutingModule } from './user-repos.routing';
import { UserReposComponent } from './user-repos.component';



@NgModule({
  declarations: [
    UserReposComponent
  ],
  imports: [
    CommonModule,
    UserRepoRoutingModule
  ]
})
export class UserReposModule { }
