import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectLibraryItems } from './reducers';
import { Observable } from 'rxjs';
import { LibraryItem } from './models';

@Component({
  selector: 'app-bookcollection',
  templateUrl: './bookcollection.component.html',
  styleUrls: ['./bookcollection.component.css']
})
export class BookcollectionComponent implements OnInit {

  bookList$: Observable<LibraryItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.bookList$ = this.store.select(selectLibraryItems);
  }

}
