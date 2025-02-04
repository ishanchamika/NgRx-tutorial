import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterActions from '../../state/counter/counter.actions';
@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})

export class CounterComponent 
{
  counter$: Observable<number>;

  constructor(private store:Store<{counter:number}>)
  {
    this.counter$ = this.store.select('counter');  // 'counter' is the reducer key(this key need to access the states)
  }

  increment()
  {
    this.store.dispatch(CounterActions.increment())
  }
  decrement()
  {
    this.store.dispatch(CounterActions.decrement())
  }
  reset()
  {
    this.store.dispatch(CounterActions.reset())
  }  
}
