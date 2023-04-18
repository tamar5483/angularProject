import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { employeeModel } from 'src/app/manager/employee.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'loginForm',
  templateUrl: './loginForm.component.html',
  styleUrls: ['./loginForm.component.scss']
})
export class LoginformComponent implements OnInit{

  constructor(private login_service: LoginService, private router: Router) { }
  
  ngOnInit(): void {
   //this.checkUser2(localStorage.getItem('userName'),localStorage.getItem('userPassword'))
  }


  showError: boolean = false

  user: employeeModel = { name: "", password: "", role: "doctor", id: "1", phone: "", email: "" }

  setShowError() {
    this.showError = false
  }

  
 loginForm: FormGroup = new FormGroup(
    {
      "name": new FormControl("", []),
      "password":new FormControl("",[])
    }
  )

  checkUser() {
    this.login_service.checkUser(this.loginForm.controls.name.value,this.loginForm.controls.password.value).subscribe(u => {
      if (u !== null) {
        this.user = u
        this.router.navigate([`${this.user.role}/${this.user.id}`])
        localStorage.setItem('userName',this.user.name)
        localStorage.setItem('userRole',this.user.role)
        localStorage.setItem('userId',this.user.id.toString())
      }
      else {
        this.showError = true
      }

    })
  }

  checkUser2() {
    this.login_service.getNum().subscribe(n=>console.log(n))//קריאת שרת עובד
    let u=this.login_service.checkUser2(this.loginForm.controls.name.value,this.loginForm.controls.password.value)
      if (u !== null) {
        this.user = u
        this.router.navigate([`${this.user.role}/${this.user.id}`])
        localStorage.setItem('userName',this.user.name)
        localStorage.setItem('userRole',this.user.role)
        localStorage.setItem('userId',this.user.id.toString())
      }
      
      else {
        this.showError = true
      }

    
  }

}
