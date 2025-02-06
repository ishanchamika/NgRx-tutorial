import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUsers , selectLoading, selectLoaded, selectError, selectUserState} from '../../state/user/user.selector';
import * as UserActions from '../../state/user/user.actions';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee.model';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit
{
  users$: Observable<ReadonlyArray<Employee>>;
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  error$: Observable<any>;
  
  constructor(private store:Store)
  {
    this.users$ = this.store.select(selectUsers);
    this.loading$ = this.store.select(selectLoading);
    this.loaded$ = this.store.select(selectLoaded);
    this.error$ = this.store.select(selectError);
  }

  addUser()
  {
    const user:User = {id:"4", name:"Ishan Chamika", email:"ics@gmail.com", phone: "098485663"};
    this.store.dispatch(UserActions.addUser({user}));

  }
  removeUser(id: string)
  {
    this.store.dispatch(UserActions.removeUser({id}));
  }
  
  ngOnInit(): void 
  {
    this.store.dispatch(UserActions.loadUsers());
  }
}
