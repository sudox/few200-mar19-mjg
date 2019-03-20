import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, map, filter } from 'rxjs/operators';
import * as countActions from '../actions/counter.actions';
import * as appActions from '../actions/app.actions';

@Injectable()
export class CounterEffects {

  @Effect() loadCountBy$ = this.actions$
    .pipe(
      ofType(appActions.APP_START), // if it's app start
      map(() => localStorage.getItem('count')), // check local storage and see if exists
      filter(by => by !== null), // if it's not null
      map(by => parseInt(by, 10)), // conver to a number
      map(by => new countActions.SetCountBy(by)) // dispatch new action
    );

  @Effect({ dispatch: false }) saveCountBy$ = this.actions$
    .pipe(
      ofType(countActions.COUNT_BY_SET), // is an Action (only has a type variable)
      map(a => a as countActions.SetCountBy), // convert to setCountBy
      map(a => a.by.toString()), // Convert to string
      tap(a => localStorage.setItem('count', a))
    );

  // @Effect({
  //   dispatch: false  // Prevents it from going BACK into the pipeline after processing
  // }) logAllActions$ = this.actions$
  //   .pipe(
  //     tap(a => console.log(a.type))
  //   );

  constructor(private actions$: Actions) {

  }
}
