import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import { treatmentModel } from '../treatment.model';
import { TreatmentService } from '../treatment.service';

@Component({
  selector: 'treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss']
})
export class TreatmentComponent implements OnInit {

  constructor(private treatment_service: TreatmentService) { }

  ngOnInit(): void {
    this.types=this.treatment_service.getTypes()
    this.statuses=this.treatment_service.getStatuses()
  }
@Input()
appointment:treatmentModel={id:0,patientId:"",type:"",status:"",time:{hours:0,minutes:0},date:new Date()}

@Output()
onAppointmentUpdate : EventEmitter<treatmentModel> = new EventEmitter<treatmentModel>();

ableSet:boolean=false

types:string[]=[]

statuses:string[]=[]

setAbleSet(){
  this.ableSet=true;
}

save(){
  this.ableSet=false
  this.onAppointmentUpdate.emit(this.appointment)
}
}
