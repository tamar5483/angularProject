import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { employeeModel } from './employee.model';

@Directive({
  selector: '[GoToEmployee]'
})
export class GoToEmployeeDirective {

  constructor(private router:Router) { }
   
  employee: employeeModel = { name: "", id: "0", phone: "", email: "", role: "fdf",password: ""}

 
 @Input()
 public set GoToEmployee(e:employeeModel){
   this.employee=e
 }
  
 
   @HostListener("click")
   goToEmp() {
     console.log(this.employee)
    this.router.navigate([`${this.employee.role}/${this.employee.id}`])
  }
 

}
