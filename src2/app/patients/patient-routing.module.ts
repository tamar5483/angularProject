import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPatientFormComponent } from './new-patient-form/new-patient-form.component';
import { PatientsComponent } from './patients/patients.component';


const routes: Routes = [
  {
    path:`new-patient-form`,
    component: NewPatientFormComponent,

  },
   {
    path:':patientId/appointment',
    loadChildren: ()=> import('../treatment/treatment.module').then(t => t.TreatmentModule)
   }
 ,
   {
    path: '',
    component: PatientsComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
