import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';

const routes: Routes = [
  {
    path:'',
    component:AppointmentsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
