import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as actions from '../actions/list.actions';



export interface State extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();

export interface BookEntity {
  id: string;
  title: string;
  author: string;
  format: string;
}

const initialState: State = {
  ids: ['1', '2', '3'],
  entities: {
    1: { id: '1', title: '1984', author: 'Orwell', format: 'Paperback' },
    2: { id: '2', title: 'Hitchiker\'s Guide to the Galaxy', author: 'Adams', format: 'Paperback' },
    3: { id: '3', title: 'Angular: Up and Running', author: 'Seshadri', format: 'E-Book' }
  }

};

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.BOOK_ADDED: {
      return adapter.addOne(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
