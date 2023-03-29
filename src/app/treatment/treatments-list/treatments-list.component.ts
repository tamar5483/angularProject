import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { appointmentModel } from '../treatment.model';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'treatments-list',
  templateUrl: './treatments-list.component.html',
  styleUrls: ['./treatments-list.component.scss']
})
export class TreatmentsListComponent implements OnInit {

  constructor(private appointmentService: AppointmentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.patientId = params.get('patientId');
     // this.appointmentService.getAppointments(this.patientId).subscribe
      this.appointments = this.appointmentService.getAppointmentsById2(this.patientId)

    })

  }

  appointments: appointmentModel[] =[]

  patientId: string | null = ""

  showForm: boolean = false

  setShowForm() {
    this.showForm = true;
  }

  addAppointment(appointment: appointmentModel) {
    this.appointmentService.addAppointment(appointment)
    this.showForm = false
    this.appointments = this.appointmentService.getAppointmentsById2(this.patientId)///////////////////////////////////
  }

  updateAppointment(appointment: appointmentModel){
this.appointmentService.updateAppointment(appointment)
  }
}
