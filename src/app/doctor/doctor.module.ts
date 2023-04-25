import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { DailyScheduleComponent } from './daily-schedule/daily-schedule.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientsModule } from '../patients/patients.module';
import { AppointmentModule } from '../appointment/appointment.module';


@NgModule({
  declarations: [
    HomePageComponent,
    DailyScheduleComponent,
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule,
    PatientsModule,
    AppointmentModule
  ]
  , exports: [HomePageComponent]
})
export class DoctorModule { }
