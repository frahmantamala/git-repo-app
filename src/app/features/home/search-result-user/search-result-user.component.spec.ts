import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultUserComponent } from './search-result-user.component';

describe('SearchResultUserComponent', () => {
  let component: SearchResultUserComponent;
  let fixture: ComponentFixture<SearchResultUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
