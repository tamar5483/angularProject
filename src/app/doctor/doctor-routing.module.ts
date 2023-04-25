import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyScheduleComponent } from './daily-schedule/daily-schedule.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  
  {
    path: 'schedule',
    component: DailyScheduleComponent,
  },
   {
    path: '',
    component: HomePageComponent,
  }
  ,
   {
    path:'patients',
    loadChildren: ()=> import('../patients/patients.module').then(p => p.PatientsModule)
   },
   {
    path:'appointment',
    loadChildren: ()=> import('../appointment/appointment.module').then(t => t.AppointmentModule)
   }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
