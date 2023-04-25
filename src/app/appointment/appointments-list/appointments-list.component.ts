import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentModel } from '../appointment.model';
import { AppointmentService } from '../appointment.service';
import { PatientsService } from 'src/app/patients/patients.service';

@Component({
  selector: 'appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})
export class AppointmentsListComponent implements OnInit {

  constructor(private appointmentService: AppointmentService,private patient_Service:PatientsService, private route: ActivatedRoute)
  { 
      this.route.paramMap.subscribe(params => {
      this.patientId = params.get('patientId');
     // this.appointmentService.getAppointments(this.patientId).subscribe
   let p=  this.patient_Service.getPatientById(this.patientId)
   if(!p)p= { id: "", name: "", phone: "", doctorId: "" }
   let s=""
   s=p.name
      this.appointments = this.appointmentService.getAppointmentsByName(s)
   })
  }

  ngOnInit(): void {
    
  }
  @Input()
  set setAppointments(a: AppointmentModel[]){
    this.appointments=a
    this.showButton=false

}

  appointments: AppointmentModel[] =[]

  patientId: string | null = ""

  showForm: boolean = false

  showButton:boolean=true

  setShowForm() {
    this.showForm = true;
    this.showButton=false
  }

  addAppointment(appointment: AppointmentModel) {
    this.appointmentService.addAppointment(appointment)
    this.showForm = false
    this.showButton=true
    this.appointments = this.appointmentService.getAppointmentsByName(this.patientId)///////////////////////////////////
  }

  updateAppointment(appointment: AppointmentModel){

this.appointmentService.updateAppointment(appointment)
  }
}
