import { createFeatureSelector } from "@ngrx/store";
import { Employee } from "../../models/employee.model";


export const employeeState = createFeatureSelector<ReadonlyArray<Employee>>("employees");