import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit, OnDestroy {
  @Input() isLoading: boolean;

  @Output() handleSearched: EventEmitter<{ query: string }>;

  form: FormGroup;
  formValue: {
    query: string
  };

  subscriptions: Subscription;

  constructor(
    private fb: FormBuilder
  ) {
    this.handleSearched = new EventEmitter();
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    this.buildForm();
    this.subscriptions.add(
      this.form.valueChanges.subscribe(value => {
        this.formValue = value;
      })
    );
  }

  buildForm() {
    this.form = this.fb.group({
      query: ['', Validators.required]
    });
  }


  onClickSearch(): void {
    this.handleSearched.emit({ ...this.formValue })
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
