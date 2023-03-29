// import { stringify } from '@angular/compiler/src/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { employeeModel } from 'src/app/manager/employee.model';
import { EmployeesService } from 'src/app/manager/employees.service';
import { patientModel } from '../../patients/patient.model';


@Component({
  selector: 'new-patient-form',
  templateUrl: './new-patient-form.component.html',
  styleUrls: ['./new-patient-form.component.scss']
})
export class NewPatientFormComponent implements OnInit {

  constructor(private emp_servise: EmployeesService) { }

  ngOnInit(): void {
    if (localStorage.getItem('userRole') === 'secretary') {
      this.doctors = this.emp_servise.getDoctors();
this.newPatientForm.addControl('doctor', new FormControl('', [Validators.required]));
    }
  }
  doctors: employeeModel[] = []

  @Input()
  doctorId:string="";
   


  newPatientForm: FormGroup = new FormGroup(
    {
      "name": new FormControl("", [Validators.required]),
      "identity":new FormControl(null,[Validators.required,Validators.maxLength(9),Validators.minLength(9)]),//,Validators.pattern('[0-9]')]
      "phone": new FormControl("", [Validators.required, Validators.minLength(9), /*Validators.pattern("/[^0-9]/")*/]),

    }
  )
  @Output()
  onPatientSave: EventEmitter<patientModel> = new EventEmitter<patientModel>();

  savePatient() {
    if(this.doctors.length)
    var doctor=this.doctors.find(d=>d.name===this.newPatientForm.controls.doctor.value) ;
    
    this.doctorId=doctor?doctor.id:this.doctorId
    this.onPatientSave.emit({ name: this.newPatientForm.controls.name.value, phone: this.newPatientForm.controls.phone.value, id:this.newPatientForm.controls.identity.value , doctorId: this.doctorId });
  }

}
