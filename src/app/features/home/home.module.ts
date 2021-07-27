import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchUserComponent } from './search-user/search-user.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchResultUserComponent } from './search-result-user/search-result-user.component';

@NgModule({
  declarations: [
    SearchUserComponent,
    HomeComponent,
    SearchResultUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
