import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employeeModel } from '../employee.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  employees: employeeModel[] = [
    { name: "ad", id: 1, phone: "asd", email: "gfdh", role: "doctor" ,password:"1sdf23"},
    { name: "ad", id: 1, phone: "asd", email: "fgh", role: "doctor" ,password:"1sdf23"},
    { name: "ad", id: 1, phone: "asd", email: "fgh", role: "doctor" ,password:"1sdf23"},
    { name: "ad", id: 1, phone: "asd", email: "fg", role: "doctor" ,password:"12sdw53"},
    { name: "ad", id: 1, phone: "asd", email: "fgh", role: "doctor" ,password:"12sdf3"}
  ]

  constructor(private emp_service: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.emp_service.getEmployees().subscribe(e => this.employees = e)
  }

  addEmp() {
    this.router.navigate(["manager/new-employee-form"])
  }

  goToEmployee(emp: employeeModel) {
    alert("sdfsd")
    this.router.navigate([`${emp.role}/${emp.id}`])
  }

  deleteEmployee(id:number) {
    this.emp_service.deleteEmployee(id)
  }
}
