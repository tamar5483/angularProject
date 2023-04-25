import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppointmentModel } from '../appointment.model';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'update-appointment-form',
  templateUrl: './update-appointment-form.component.html',
  styleUrls: ['./update-appointment-form.component.css']
})
export class UpdateAppointmentFormComponent implements OnInit{

  constructor(private appointment_service: AppointmentService) { }

  ngOnInit(): void {
    this.types=this.appointment_service.getTypes()
    this.statuses=this.appointment_service.getStatuses()
  }

  types:string[]=[]

  statuses:string[]=[]
  
  @Input()
  appointment:AppointmentModel={id:0,patient:"gg",type:"hh",status:"",time:"00:00",date:"01/01/2020"}
  
  @Output()
  onAppointmentUpdates : EventEmitter<AppointmentModel> = new EventEmitter<AppointmentModel>();
  
  save(){
     this.onAppointmentUpdates.emit(this.appointment)
   }
}
