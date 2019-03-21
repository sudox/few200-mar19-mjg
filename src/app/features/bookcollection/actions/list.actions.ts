import { Action } from '@ngrx/store';
import { BookEntity as LibraryEntity } from '../reducers/list';


let tempID = 999;
export const BOOK_ADDED = '[library] Item Added';
export class AddedBookItem implements Action {
  readonly type = BOOK_ADDED;
  payload: LibraryEntity;
  constructor(title: string, author: string, format: string) {
    this.payload = {
      id: 'T' + tempID++,
      title,
      author,
      format
    };
  }
}

export type All = AddedBookItem;
