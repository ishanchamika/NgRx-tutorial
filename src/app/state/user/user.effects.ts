// loadUsers
// addUser
// removeUser

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as UserActions from './user.actions';
import { catchError, map, of, switchMap } from "rxjs";
import { UserService } from '../../services/user.service';
import { User } from "../../models/user.model";

@Injectable()

export class UserEffects
{
    constructor(private actions$: Actions, private userService: UserService){}

    loadUsers$ = createEffect(()=>
    {
        return this.actions$.pipe(
            ofType(UserActions.loadUsers),
            switchMap(()=>
            this.userService.getAllEmployees().pipe(
                map(users=>UserActions.loadUsersSuccess({users:users as ReadonlyArray<User>})),
                catchError((error)=>of(UserActions.loadUsersFailure({error})))
            ))
        )
    })

    addUser$ = createEffect(()=>
    {
        return this.actions$.pipe(
            ofType(UserActions.addUser),
            switchMap(payload=>
            this.userService.addEmployee(payload.user).pipe(
                map(data=>UserActions.addUserSuccess({user:payload.user})),
                catchError(error=>of(UserActions.addUserFailure({error})))
            )
        ))
    })

    removeUser$ = createEffect(()=>
    {
        return this.actions$.pipe(
            ofType(UserActions.removeUser),
            switchMap(payload=>
            this.userService.deleteEmployeeById(payload.id).pipe(
                map(data=>UserActions.removeUserSuccess({id:payload.id})),
                catchError(error=>of(UserActions.removeUserFailure({error})))
            )
        ))
    })
}