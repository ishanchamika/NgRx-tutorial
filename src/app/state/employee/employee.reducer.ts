import { createReducer, on } from '@ngrx/store';
import { Employee } from '../../models/employee.model';
import * as EmployeeActions from './employee.actions';

export const initialState: ReadonlyArray<Employee> = [];
export const EmployeeReducer = createReducer
(
    initialState,

    on(EmployeeActions.addEmployee,(state, {employee})=>(
         [...state, employee]
    )),

    on(EmployeeActions.removeEmployee, (state, {id})=>(
        state.filter(employee=>employee.id !== id)
    ))
);