import { Component, OnInit } from '@angular/core';
import { State, selectCurrent, selectDecrementDisabled, selectCountingBy, selectResetDisabled } from '../../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../../actions/counter.actions';

@Component({
  selector: 'app-redux-demo',
  templateUrl: './redux-demo.component.html',
  styleUrls: ['./redux-demo.component.css']
})
export class ReduxDemoComponent implements OnInit {

  decrementDisabled$: Observable<boolean>;
  resetDisabled$: Observable<boolean>;
  count$: Observable<number>;
  countingBy$: Observable<number>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    // Don't hardcode this, put the selector in index.ts
    this.count$ = this.store.select(selectCurrent);
    this.decrementDisabled$ = this.store.select(selectDecrementDisabled);
    this.countingBy$ = this.store.select(selectCountingBy);
    this.resetDisabled$ = this.store.select(selectResetDisabled);
  }

  increment() {
    this.store.dispatch(new actions.CountIncremented());
  }

  decrement() {
    this.store.dispatch(new actions.CountDecremented());
  }

  reset() {
    this.store.dispatch(new actions.ResetCounter());
  }

  setCountBy(val: number) {
    this.store.dispatch(new actions.SetCountBy(val));
  }
}
