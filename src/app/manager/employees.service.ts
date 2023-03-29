import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, Subscriber } from 'rxjs';
import { employeeModel } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  uri: string = "https://localhost:5561/employees"

  employees: employeeModel[] = [
    {id:"1",name:"a",password:"123",email:"asdsa",phone:"afas",role:"manager"},
    {id:"2",name:"b",password:"123",email:"asdsa",phone:"afas",role:"doctor"},
    {id:"3",name:"c",password:"123",email:"asdsa",phone:"afas",role:"secretary"},
    { name: "שלום חי", id: "4", phone: "234234234", email: "fg@gmail.com", role: "doctor" ,password:"12sdw53"},
    { name: "שרה לוי", id: "5", phone: "023493434", email: "fgsssh@gmail.com", role: "doctor" ,password:"12sdf3"},
    { name: "שלום כהן", id: "6", phone: "0504193232", email: "gfdh@gmail.com", role: "doctor" ,password:"1sdf23"},
    { name: "חיים גולד", id: "7", phone: "048222222", email: "fgssh@gmail.com", role: "manager" ,password:"1sdf23"},
    { name: "לאה שמואלי", id: "8", phone: "03972674", email: "fgssh@gmail.com", role: "secretary" ,password:"1sdf23"},
  ]
  constructor(private http: HttpClient) { }

  emp: Observable<employeeModel[]> = new Observable((observer) => {
    this.subscriber = observer
  });

  subscriber: Subscriber<employeeModel[]> = new Subscriber()

  getEmployees() {
    // return this.http.get<employeeModel[]>(this.uri)
    return this.employees
  }

  deleteEmployee(id: string) {
    //this.http.delete("")
    var i = this.employees.findIndex(e => e.id === id)
    this.employees.splice(i, 1)
  }

  addEmployee(employee: employeeModel) {
    employee.id=(this.employees.length+1).toString()
   // this.http.post("", employee)
   this.employees.push(employee)
  }

  getDoctors(): employeeModel[] {
    
    // return this.http.get<employeeModel[]>("")
    return this.employees.filter(d => d.role === 'doctor')
  }
}
