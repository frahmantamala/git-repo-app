import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  GithuhWrappeSearchResult,
  GithubUser,
  UserRepo
} from '@app/models';

@Injectable()
export class GithubService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  searchUsers(
    query: string,
  ): Observable<GithuhWrappeSearchResult> {
    const params = new HttpParams()
      .set('q', `${query}`);
    return this.http.get<GithuhWrappeSearchResult>(
      `${this.apiBaseUrl}/search/users`,
      {
        params
      }
    );
  }

  searchRepo(
    query: string,
  ): Observable<GithuhWrappeSearchResult> {
    const params = new HttpParams()
      .set('q', `${query}`);
    return this.http.get<GithuhWrappeSearchResult>(
      `${this.apiBaseUrl}/search/repos`,
      {
        params
      }
    );
  }

  getUser(url: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(url);
  }

  getRepo(url: string): Observable<UserRepo> {
    return this.http.get<UserRepo>(url);
  }
}
