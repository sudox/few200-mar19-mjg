import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromList from './list';
import { LibraryItem } from '../models';

const featureName = 'bookCollectionFeature';

export interface State {
  list: fromList.State;
}

export const reducers = {
  list: fromList.reducer
};

// Selectors
const selectFeature = createFeatureSelector<State>(featureName);
const selectList = createSelector(selectFeature, f => f.list);
const { selectAll: selectLibraryEntries } = fromList.adapter.getSelectors(selectList);
export const selectLibraryItems = createSelector(selectLibraryEntries, e => e as LibraryItem[]);
