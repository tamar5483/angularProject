import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { employeeModel } from '../manager/employee.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users:employeeModel[]=[
    {id:1,name:"a",password:"123",email:"asdsa",phone:"afas",role:"manager"},
    {id:2,name:"b",password:"123",email:"asdsa",phone:"afas",role:"doctor"},
    {id:3,name:"c",password:"123",email:"asdsa",phone:"afas",role:"secretary"},
    {id:4,name:"d",password:"123",email:"asdsa",phone:"afas",role:"doctor"},
    {id:5,name:"e",password:"123",email:"asdsa",phone:"afas",role:"manager"},
    {id:6,name:"f",password:"123",email:"asdsa",phone:"afas",role:"manager"},
    {id:7,name:"g",password:"123",email:"asdsa",phone:"afas",role:"doctor"},
    {id:8,name:"h",password:"123",email:"asdsa",phone:"afas",role:"doctor"},
  ]

  constructor(private http:HttpClient) { }

  checkUser(name:string,password:string):Observable<employeeModel>{
   return this.http.get<employeeModel>(`?name=${name}&password=${password}`)
     
  }
  checkUser2(name:string,password:string):employeeModel|null{
    let user= this.users.find(u=> u.name===name&&password===u.password)
      if(typeof user ==="undefined")return null;
      return user;
   }
  
   getUserRole(){
    return localStorage.getItem('userRole')
   }
}
