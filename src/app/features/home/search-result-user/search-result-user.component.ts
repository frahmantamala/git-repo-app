import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GithubSearchResult } from '@app/models';

@Component({
  selector: 'app-search-result-user',
  templateUrl: './search-result-user.component.html',
  styleUrls: ['./search-result-user.component.scss']
})
export class SearchResultUserComponent implements OnInit {
  @Input() results: GithubSearchResult[];

  @Output() navigateDetails = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onNavigateDetails(userUrl: string) {
    this.navigateDetails.emit(userUrl);
  }
}
