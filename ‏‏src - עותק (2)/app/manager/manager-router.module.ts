import { NgModule } from '@angular/core';
import { NewEmployeeFormComponent } from './new-employee-form/new-employee-form.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';

const routes: Routes = [
  {
    path: 'new-employee-form',
    component: NewEmployeeFormComponent,
  } ,
   {
    path: '',
    component: EmployeesListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ManagerRouterModule { }
