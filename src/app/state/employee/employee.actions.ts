import { createAction, props } from "@ngrx/store";
import { Employee } from "../../models/employee.model";

export const addEmployee = createAction('[Employee Component] Employee', props<{employee: Employee}>());
export const removeEmployee = createAction('[Employee Component] Remove Employee', props<{id:string}>());