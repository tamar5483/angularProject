import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent  {

  constructor(private router:Router,private login_service:LoginService) { }


  goToPatientslist(){
  this.router.navigate([`doctor/1/patients`])
 }

 goToSchdule(){
  this.router.navigate([`${this.router.url}/schedule`])
 }
}
