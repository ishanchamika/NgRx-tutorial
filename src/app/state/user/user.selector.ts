import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

//whole state
export const selectUserState = createFeatureSelector<UserState>("userState");

//getting the users
export const selectUsers = createSelector(selectUserState, (state)=>state.users );

//fetch loading
export const selectLoading = createSelector(selectUserState, (state)=>state.loading );

//fetch loaded
export const selectLoaded = createSelector(selectUserState, (state)=>state.loaded );

//getting error
export const selectError = createSelector(selectUserState, (state)=>state.error );