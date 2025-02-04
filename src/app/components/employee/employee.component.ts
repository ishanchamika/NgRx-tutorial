import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Employee } from '../../models/employee.model';
import { employeeState } from '../../state/employee/employee.selectors';
import { Observable } from 'rxjs';
import * as EmployeeActions from '../../state/employee/employee.actions';

@Component({
  selector: 'app-employee',
  standalone: false,
  
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent 
{
  employees$: Observable<ReadonlyArray<Employee>>;
  constructor(private store: Store<{employees: ReadonlyArray<Employee>}>)
  {
    this.employees$ = this.store.select(employeeState);
  }

  addEmployee()
  {
    const rnd = Date.now().toString();
    const employee:Employee = {id:rnd, name:'Ishan'+rnd, email:'ics@gmail.com', phone:'0764982551', salary:34500}
    this.store.dispatch(EmployeeActions.addEmployee({employee}))
  }

  removeEmployeee(empid: string)
  {
    this.store.dispatch(EmployeeActions.removeEmployee({id: empid}))
  }
}
