import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import { appointmentModel } from '../treatment.model';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss']
})
export class TreatmentComponent implements OnInit {

  constructor(private treatment_service: AppointmentService) { }

  ngOnInit(): void {
    this.types=this.treatment_service.getTypes()
    this.statuses=this.treatment_service.getStatuses()
    console.log('ap ',this.appointment)
  }
@Input()//:{hours:0,minutes:0}
appointment:appointmentModel={id:0,patientId:"gg",type:"hh",status:"",time:"00:00",date:"01/01/2020"}

@Output()
onAppointmentUpdate : EventEmitter<appointmentModel> = new EventEmitter<appointmentModel>();

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
