import { Component, Input, OnInit } from '@angular/core';
import { patientModel } from '../patient.model';

@Component({
  selector: 'patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

newPatient:boolean=false

@Input()
currentPatient:patientModel={id:"1",name:"asda",phone:"23123123"};


}
