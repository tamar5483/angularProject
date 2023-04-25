import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { DoctorComponent } from './doctor/doctor.component';
import { SecretaryRoutingModule } from './secretary-routing.module';



@NgModule({
  declarations: [
    DoctorsListComponent,
    DoctorComponent
  ],
  imports: [
    CommonModule,
    SecretaryRoutingModule
    
  ]
})
export class SecretaryModule { }
