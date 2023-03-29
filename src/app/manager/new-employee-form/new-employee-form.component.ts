import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { employeeModel } from '../employee.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-new-employee-form',
  templateUrl: './new-employee-form.component.html',
  styleUrls: ['./new-employee-form.component.scss']
})
export class NewEmployeeFormComponent {

  constructor(private emp_servvice: EmployeesService,private router:Router ) { }

  roles:string[]=['doctor','secretary','manager']

  newEmployeeForm: FormGroup = new FormGroup(
    {
      "name": new FormControl("", [Validators.required]),
      "phone": new FormControl("", [Validators.required, Validators.minLength(9), /*Validators.pattern("/[^0-9]/")*/]),
      "email": new FormControl("", [Validators.required, Validators.email]),
      "role": new FormControl("", [])
    }
  )


  submit() {
    var emp: employeeModel = {
      id: "1",
      name: this.newEmployeeForm.controls.name.value,
      phone: this.newEmployeeForm.controls.phone.value,
      email: this.newEmployeeForm.controls.email.value,
      role:this.newEmployeeForm.controls.role.value,
      password:"1"
    };
    this.emp_servvice.addEmployee(emp)
    this.router.navigate([`manager/${localStorage.getItem('userId')}`])
    console.log(this.newEmployeeForm.errors)
  }


}
