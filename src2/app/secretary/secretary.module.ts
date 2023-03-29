import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { DoctorComponent } from './doctor/doctor.component';



@NgModule({
  declarations: [
    DoctorsListComponent,
    DoctorComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class SecretaryModule { }
