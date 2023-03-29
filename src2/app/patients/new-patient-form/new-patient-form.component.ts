import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { patientModel } from '../../patients/patient.model';


@Component({
  selector: 'new-patient-form',
  templateUrl: './new-patient-form.component.html',
  styleUrls: ['./new-patient-form.component.scss']
})
export class NewPatientFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

newPatientForm: FormGroup = new FormGroup(
  {
    "name": new FormControl("", [Validators.required]),
    "phone": new FormControl("", [Validators.required, Validators.minLength(9), /*Validators.pattern("/[^0-9]/")*/]),
  }
)
@Output()
  onPatientSave : EventEmitter<patientModel> = new EventEmitter<patientModel>();

  savePatient(){
    this.onPatientSave.emit({name:this.newPatientForm.controls.name.value,phone:this.newPatientForm.controls.phone.value,id:"1"});
  }

}
