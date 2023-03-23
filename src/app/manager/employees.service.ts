import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employeeModel } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


  constructor(private http : HttpClient) { }

  getEmployees():Observable<employeeModel[]>{
   return this.http.get<employeeModel[]>("")
  }

  deleteEmployee(id:number){
    this.http.delete("")
  }

  addEmployee(employee:employeeModel){
    this.http.post("",employee)
  }
}
