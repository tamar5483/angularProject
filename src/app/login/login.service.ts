import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { employeeModel } from '../manager/employee.model';
import { EmployeesService } from '../manager/employees.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  

  constructor(private http:HttpClient,private emp_service:EmployeesService) { }

  checkUser(name:string,password:string):Observable<employeeModel>{
   return this.http.get<employeeModel>(`hhtps://localhot:222/user?name=${name}&password=${password}`)  
  }

  getNum(){
    return this.http.get<Number>("https://localhost:44320/api/Treatment")
  }

  checkUser2(name:string,password:string):employeeModel|null{
   let emps=this.emp_service.getEmployees();
    let user= emps.find(u=> u.name===name&&password===u.password)
      if(typeof user ==="undefined")return null;
      return user;
   }
  
   getUserRole(){
    return localStorage.getItem('userRole')
   }
   getUserName(){
    return localStorage.getItem('userName')
   }
   getUserId(){
    return localStorage.getItem('userId')
   }
}
