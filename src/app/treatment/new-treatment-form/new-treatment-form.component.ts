import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { appointmentModel } from '../treatment.model';
import { AppointmentService } from '../appointment.service';
@Component({
  selector: 'new-treatment-form',
  templateUrl: './new-treatment-form.component.html',
  styleUrls: ['./new-treatment-form.component.scss']
})
export class NewTreatmentFormComponent implements OnInit  {

  constructor(private treatment_service: AppointmentService) { }

  types:string[]=[]

  statuses:string[]=[]

  newTreatmentForm: FormGroup = new FormGroup(
    {
      "type": new FormControl("", [Validators.required]),//Validators.required
      "date": new FormControl("", [Validators.required]),//Validators.required
      "time": new FormControl("", [Validators.required,Validators.min(7)]),//Validators.required
      "status":new FormControl("", [Validators.required])
    }
  )
ngOnInit(): void {
  this.types=this.treatment_service.getTypes()
  this.statuses=this.treatment_service.getStatuses()
}
  
@Input()
patientId:string|null=""

  @Output()
  onAppointmentSave : EventEmitter<appointmentModel> = new EventEmitter<appointmentModel>();

  saveAppointment(){
    this.onAppointmentSave.emit( {id:87687676,patient:this.patientId,
      type:this.newTreatmentForm.controls.type.value,
      status:this.newTreatmentForm.controls.status.value,time:this.newTreatmentForm.controls.time.value,date:this.newTreatmentForm.controls.date.value});
  }

}
