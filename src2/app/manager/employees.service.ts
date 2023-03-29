import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employeeModel } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

employees:employeeModel[]=[
  { name: "ad", id: 1, phone: "asd", email: "gfdh", role: "doctor" ,password:"1sdf23"},
  { name: "ad", id: 2, phone: "asd", email: "fgh", role: "doctor" ,password:"1sdf23"},
  { name: "ad", id: 3, phone: "asd", email: "fgh", role: "doctor" ,password:"1sdf23"},
  { name: "ad", id: 4, phone: "asd", email: "fg", role: "doctor" ,password:"12sdw53"},
  { name: "ad", id: 5, phone: "asd", email: "fgh", role: "doctor" ,password:"12sdf3"}
]

  constructor(private http : HttpClient) { }

  getEmployees(){
 //  return this.http.get<employeeModel[]>("")
 return this.employees;
  }

  deleteEmployee(id:number){
   // this.http.delete("")
let index=this.employees.findIndex(e=>id===e.id)
this.employees.splice(index,1)
  }

  addEmployee(employee:employeeModel){
    employee.id=this.employees.length+1
    this.http.post("",employee)
    this.employees.push(employee)
  }
}
