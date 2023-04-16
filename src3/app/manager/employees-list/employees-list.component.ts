import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { employeeModel } from '../employee.model';
import { EmployeesService } from '../employees.service';
// import {MatTableModule} from '@angular/material/table'
@Component({
  selector: 'employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  employees: employeeModel[] = []

  constructor(private emp_service: EmployeesService, private router: Router,private login_service:LoginService) { }

  ngOnInit(): void {
  // var a= this.emp_service.getEmployees()
   //console.log(a.subscribe());
   //a.subscribe(e => console.log("sdfsd",e))
    
  this.employees=this.emp_service.getEmployees()
  
  }

  addEmp() {
    this.router.navigate([`manager/${this.login_service.getUserId()}/new-employee-form`])
  }

  goToEmployee(emp: employeeModel) {
    this.router.navigate([`${emp.role}/${emp.id}`])
  }

  deleteEmployee(id:string) {
    this.emp_service.deleteEmployee(id)
  }
}
