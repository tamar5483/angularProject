import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { patientModel } from '../patient.model';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  constructor(private patientService:PatientsService,private router:Router) { }
  
  ngOnInit(): void {
    this.patientService.getPatients("2").subscribe(p=>this.patients=p)
  }

  patients: patientModel[] =[]


  showInput: boolean = false

  setShowInput() {

    this.showInput = true;

  }
  
  addPatient(p: patientModel) {
    this.patients.push(p);
    this.showInput = false;
    this.patientService.addPatient(p)

  }

  goToAppointments(patient:patientModel){
    this.router.navigate([`patients/${patient.id}/appointment`])
  }



}
