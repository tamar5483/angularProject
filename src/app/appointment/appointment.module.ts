import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAppointmentFormComponent } from './new-appointment-form/new-appointment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentComponent } from './appointment/appointment.component';
import { DatePipe } from './israel-date.pipe';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';



@NgModule({
  declarations: [ NewAppointmentFormComponent,
    AppointmentsListComponent,
    AppointmentComponent,
    DatePipe,
  ],
  imports: [
    CommonModule,
  ReactiveFormsModule,
  HttpClientModule,
  AppointmentRoutingModule,
  FormsModule
  ],exports:[AppointmentsListComponent]
})
export class  AppointmentModule{ }
