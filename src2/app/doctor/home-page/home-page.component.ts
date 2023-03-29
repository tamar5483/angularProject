import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToPatientslist(){
  this.router.navigate([`doctor/1/patients`])

 }
//  goToAddPatient(){
//   this.router.navigate(['doctor/:id/new-treatment-form'])

//  }
//  goToUpdatrePatient(){
//   this.router.navigate(['doctor/:id/treatment/1'])

//  }
 goToDictinary(){
 // this.router.navigate(['doctor/:id/schedule'])

 }
}
