import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUsers } from '../../state/user/user.selector';
import * as UserActions from '../../state/user/user.actions';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-users',
  standalone: false,
  
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit
{
  // users$ = this.store.select(selectUsers)
  users$: Observable<ReadonlyArray<Employee>>;
  constructor(private store:Store)
  {
    this.users$ = this.store.select(selectUsers);
  }
  ngOnInit(): void 
  {
    this.store.dispatch(UserActions.loadUsers());
  }
}
