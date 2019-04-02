import { Component, OnInit } from '@angular/core';
import { AddedBookItem } from '../../actions/list.actions';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  add(title: HTMLInputElement, author: HTMLInputElement, format: HTMLSelectElement) {
    this.store.dispatch(new AddedBookItem(title.value, author.value, format.value));
    format.selectedIndex = 0;
  }

}
