import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { appointmentModel } from '../treatment.model';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'treatments-list',
  templateUrl: './treatments-list.component.html',
  styleUrls: ['./treatments-list.component.scss']
})
export class TreatmentsListComponent implements OnInit {

  constructor(private appointmentService: AppointmentService, private route: ActivatedRoute)
  { 
      this.route.paramMap.subscribe(params => {
      this.patientId = params.get('patientId');
     // this.appointmentService.getAppointments(this.patientId).subscribe
      this.appointments = this.appointmentService.getAppointmentsById2(this.patientId)
   })
  }

  ngOnInit(): void {
    
  }
  @Input()
  set setAppointments(a: appointmentModel[]){
    this.appointments=a
    this.showButton=false

}

  appointments: appointmentModel[] =[]

  patientId: string | null = ""

  showForm: boolean = false

  showButton:boolean=true

  setShowForm() {
    this.showForm = true;
    this.showButton=false
  }

  addAppointment(appointment: appointmentModel) {
    this.appointmentService.addAppointment(appointment)
    this.showForm = false
    this.showButton=true
    this.appointments = this.appointmentService.getAppointmentsById2(this.patientId)///////////////////////////////////
  }

  updateAppointment(appointment: appointmentModel){
this.appointmentService.updateAppointment(appointment)
  }
}
