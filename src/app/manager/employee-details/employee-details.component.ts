import { Component, Input, OnInit } from '@angular/core';
import { employeeModel } from '../employee.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private emp_service: EmployeesService) { }

  ngOnInit(): void {
  }

  @Input()
  employee: employeeModel = { name: "", id: "0", phone: "", email: "", role: "fdf",password: ""}

 

}
