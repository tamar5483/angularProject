import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/treatment/appointment.service';
import { appointmentModel } from 'src/app/treatment/treatment.model';

@Component({
  selector: 'app-daily-schedule',
  templateUrl: './daily-schedule.component.html',
  styleUrls: ['./daily-schedule.component.scss']
})
export class DailyScheduleComponent implements OnInit {

  constructor(private appointments_servise:AppointmentService) { }

  ngOnInit(): void {
    var d=new Date()
    this.appointments=this.appointments_servise.getAppointmentsByDate2(`${d.getFullYear()}-${d.getMonth().toString().padStart(2,'0')}-${d.getDate()}`)
  }

  appointments:appointmentModel[]=[]
}
