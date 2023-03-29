import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreatmentsListComponent } from './treatments-list/treatments-list.component';

const routes: Routes = [
  {
    path:'',
    component:TreatmentsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreatmentRoutingModule { }
