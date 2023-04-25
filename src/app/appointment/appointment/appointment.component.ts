import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import { AppointmentModel } from '../appointment.model';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointmrnt.component.scss']
})
export class AppointmentComponent implements OnInit {

  constructor(private appointment_service: AppointmentService) { }

  ngOnInit(): void {
    this.types=this.appointment_service.getTypes()
    this.statuses=this.appointment_service.getStatuses()
  }
@Input()//:{hours:0,minutes:0}
appointment:AppointmentModel={id:0,patient:"gg",type:"hh",status:"",time:"00:00",date:"01/01/2020"}

@Output()
onAppointmentUpdate : EventEmitter<AppointmentModel> = new EventEmitter<AppointmentModel>();

ableSet:boolean=false

types:string[]=[]

statuses:string[]=[]

setAbleSet(bool:boolean){
  this.ableSet=bool;
}

save(){
 this.setAbleSet(false)
  this.onAppointmentUpdate.emit(this.appointment)
}
}
