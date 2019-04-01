import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookcollectionComponent } from './bookcollection.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookcollectionComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('bookCollectionFeature', reducers),
    FormsModule
  ],
  exports: [
    BookcollectionComponent
  ]
})
export class BookcollectionModule { }
