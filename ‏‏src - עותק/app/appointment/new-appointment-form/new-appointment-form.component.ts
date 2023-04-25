import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppointmentModel } from '../appointment.model';
import { AppointmentService } from '../appointment.service';
@Component({
  selector: 'new-appointment-form',
  templateUrl: './new-appointment-form.component.html',
  styleUrls: ['./new-appointment-form.component.scss']
})
export class NewAppointmentFormComponent implements OnInit  {

  constructor(private appointment_service: AppointmentService) { }

  types:string[]=[]

  statuses:string[]=[]

  newAppointmentForm: FormGroup = new FormGroup(
    {
      "type": new FormControl("", [Validators.required]),//Validators.required
      "date": new FormControl("", [Validators.required]),//Validators.required
      "time": new FormControl("", [Validators.required,Validators.min(7),Validators.max(20)]),
      "status":new FormControl("", [Validators.required])
    }
  )
ngOnInit(): void {
  this.types=this.appointment_service.getTypes()
  this.statuses=this.appointment_service.getStatuses()
}
  
@Input()
patientId:string|null=""

  @Output()
  onAppointmentSave : EventEmitter<AppointmentModel> = new EventEmitter<AppointmentModel>();

  saveAppointment(){
    this.onAppointmentSave.emit( {id:87687676,patient:this.patientId,
      type:this.newAppointmentForm.controls.type.value,
      status:this.newAppointmentForm.controls.status.value,time:this.newAppointmentForm.controls.time.value,date:this.newAppointmentForm.controls.date.value});
  }

}
