import * as fromCounter from './counter';
import { createSelector } from '@ngrx/store';

export interface State {
  counter: fromCounter.State;
}

export const reducers = {
  counter: fromCounter.reducer
};

// Selectors
// 1. If in a feature, create a feature selector

// 2. Create a memoized seelctor for each branch of the state

const selectCounterBranch = (state: State) => state.counter;

export const selectCurrent = createSelector(selectCounterBranch, c => c.count);

export const selectCountingBy = createSelector(selectCounterBranch, c => c.by);

export const selectDecrementDisabled = createSelector(selectCurrent, selectCountingBy, (c, b) => (c - b) < 0);

export const selectResetDisabled = createSelector(selectCurrent, c => c === 0);
