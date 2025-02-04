import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
  })

export class UserService{

    constructor(private Http:HttpClient)
    {
    }
    
    apiUrl = 'https://localhost:7248/api';

    signup(data:any):Observable<any>
    {
      const response = this.Http.post(`${this.apiUrl}/Signup`, data);
      return response;
    }
  
    login(data:any):Observable<any>
    {
      const response = this.Http.post(`${this.apiUrl}/Signup/login`, data);
      return response;
    }
    getAllEmployees()
    {
      const response = this.Http.get(`${this.apiUrl}/Employee`);
      return response;
    }

    getEmployeeById(id: string)
    {
      const response = this.Http.get(`${this.apiUrl}/${id}`);
      return response;
    }

    deleteEmployeeById(id: string)
    {
      const response = this.Http.delete(`${this.apiUrl}/${id}`);
      return response;
    }

    addEmployee(user: User)
    {
      const response = this.Http.post(`${this.apiUrl}/Employee`, user);
      return response;
    }
}