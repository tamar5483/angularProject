import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTreatmentFormComponent } from './new-treatment-form/new-treatment-form.component';
import { TreatmentDetailsComponent } from './treatment-details/treatment-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TreatmentRoutingModule } from './treatment-routing.module';
import { TreatmentsListComponent } from './treatments-list/treatments-list.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { DatePipe } from './israel-date.pipe';
import { ShowFormDirective } from './show-form.directive';



@NgModule({
  declarations: [ NewTreatmentFormComponent,
    TreatmentDetailsComponent,
    TreatmentsListComponent,
    TreatmentComponent,
    DatePipe,
    ShowFormDirective],
  imports: [
    CommonModule,
  ReactiveFormsModule,
  HttpClientModule,
  TreatmentRoutingModule,
  FormsModule
  ],exports:[TreatmentsListComponent]
})
export class TreatmentModule { }
