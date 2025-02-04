import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user.model";

// loadUsers, loadUserSuccess, loadUserFailure
export const loadUsers = createAction('[User Component] Load Users');
export const loadUsersSuccess = createAction('[User Component] Load Users Success', props<{users:readonly User[]}>());
export const loadUsersFailure = createAction('[User Component] Load Users Failure', props<{error:any}>());

// addUSer, addUserSuccess, addUserFailure
export const addUser = createAction('[User component] Add User', props<{user:User}>());
export const addUserSuccess = createAction('[User Component] Add User Success', props<{user:User}>());
export const addUserFailure = createAction('[User Component] Add User Failure', props<{error:any}>());

// removeUser, removeUserSuccess, removeUserFailure
export const removeUser = createAction('[User Component] Remove User', props<{id:string}>());
export const removeUserSuccess = createAction('[User Component] Remove User Success', props<{id:string}>());
export const removeUserFailure = createAction('[User Component] Remove User Failure', props<{error:any}>());