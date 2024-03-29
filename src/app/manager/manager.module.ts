import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NewEmployeeFormComponent } from './new-employee-form/new-employee-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagerRouterModule } from './manager-router.module';
import { TranslatePipe } from './translate.pipe';
import { GoToEmployeeDirective } from './go-to-employee.directive';



@NgModule({
  declarations:
    [
      EmployeesListComponent,
      NewEmployeeFormComponent,
       TranslatePipe, 
       GoToEmployeeDirective,
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ManagerRouterModule
  ],
  exports: [
    EmployeesListComponent
  ]
})
export class ManagerModule { }
