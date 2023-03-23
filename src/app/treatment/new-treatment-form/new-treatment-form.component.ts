import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { treatmentModel } from '../treatment.model';
import { TreatmentService } from '../treatment.service';
@Component({
  selector: 'new-treatment-form',
  templateUrl: './new-treatment-form.component.html',
  styleUrls: ['./new-treatment-form.component.scss']
})
export class NewTreatmentFormComponent implements OnInit  {

  constructor(private treatment_service: TreatmentService) { }

  types:string[]=["shoresh","stima"]

  statuses:string[]=["adfsd","moddle","finished"]

  newTreatmentForm: FormGroup = new FormGroup(
    {
      "type": new FormControl("", [Validators.required]),//Validators.required
      "date": new FormControl("", [Validators.required]),//Validators.required
      "time": new FormControl("", [Validators.required]),//Validators.required
    }
  )
ngOnInit(): void {
  this.types=this.treatment_service.getTypes()
  this.statuses=this.treatment_service.getStatuses()
}
  
@Input()
patientId:string|null=""

  @Output()
  onAppointmentSave : EventEmitter<treatmentModel> = new EventEmitter<treatmentModel>();

  saveAppointment(){
    this.onAppointmentSave.emit( {id:1,patientId:this.patientId,
      type:this.newTreatmentForm.controls.type.value,
      status:"start",time:this.newTreatmentForm.controls.time.value,date:this.newTreatmentForm.controls.date.value});
  }

}
