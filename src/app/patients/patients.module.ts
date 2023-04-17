import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPatientFormComponent } from './new-patient-form/new-patient-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { PatientsComponent } from './patients/patients.component';
import { PatientRoutingModule } from './patient-routing.module';



@NgModule({
  declarations: [
    NewPatientFormComponent,
   PatientsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    PatientRoutingModule
  ] , 
  exports: [PatientsComponent]
})
export class PatientsModule { }
