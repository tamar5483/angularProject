import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import { AppointmentModel } from '../appointment.model';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointmrnt.component.scss']
})
export class AppointmentComponent  {
 
@Input()
appointment:AppointmentModel={id:0,patient:"gg",type:"hh",status:"",time:"00:00",date:"01/01/2020"}

@Output()
onAppointmentUpdate : EventEmitter<AppointmentModel> = new EventEmitter<AppointmentModel>();

ableSet:boolean=false


setAbleSet(bool:boolean){
  this.ableSet=bool;
}
save(appointment: AppointmentModel){
      this.setAbleSet(false)
      this.onAppointmentUpdate.emit(this.appointment)
    }

}
