import { Component, OnInit } from '@angular/core';
import { AddedBookItem } from '../../actions/list.actions';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { LibraryItem } from '../../models';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  constructor(private store: Store<State>) { }

  book: LibraryItem;

  ngOnInit() {
  }

  add(title: HTMLInputElement, author: HTMLInputElement, format: HTMLSelectElement) {
    this.store.dispatch(new AddedBookItem(title.value, author.value, format.value));
    // TODO: This breaks the validation checking, need to fix that
    title.value = '';
    author.value = '';
    format.selectedIndex = 0;
  }

}
