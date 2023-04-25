import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';


const routes: Routes = [
  
 
   {
    path: '',
    component: PatientsComponent,
  },
  
   {
    path:':patientId/appointments',
    loadChildren: ()=> import('../appointment/appointment.module').then(t => t.AppointmentModule)
   }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
