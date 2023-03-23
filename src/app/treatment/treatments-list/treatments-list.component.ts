import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { treatmentModel } from '../treatment.model';
import { TreatmentService } from '../treatment.service';

@Component({
  selector: 'treatments-list',
  templateUrl: './treatments-list.component.html',
  styleUrls: ['./treatments-list.component.scss']
})
export class TreatmentsListComponent implements OnInit {

  constructor(private appointmentService: TreatmentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      this.patientId = params.get('patientId');
      this.appointmentService.getAppointments(this.patientId).subscribe
      this.appointments = this.appointmentService.getAppointments2(this.patientId)

    })

  }

  appointments: treatmentModel[] =[]

  patientId: string | null = ""

  showForm: boolean = false

  setShowForm() {
    this.showForm = true;
  }

  addAppointment(appointment: treatmentModel) {
    this.appointmentService.addTreatment(appointment)
    this.showForm = false
    this.appointments = this.appointmentService.getAppointments2(this.patientId)///////////////////////////////////
  }

  updateAppointment(appointment: treatmentModel){
this.appointmentService.updateAppointment(appointment)
  }
}
