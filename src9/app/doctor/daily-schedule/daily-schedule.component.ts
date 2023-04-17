import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/treatment/appointment.service';
import { appointmentModel } from 'src/app/treatment/treatment.model';

@Component({
  selector: 'app-daily-schedule',
  templateUrl: './daily-schedule.component.html',
  styleUrls: ['./daily-schedule.component.scss']
})
export class DailyScheduleComponent implements OnInit {

  constructor(private appointments_servise: AppointmentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('doctorId');
      var d = new Date()
      this.currentDate = d
      this.appointments = this.appointments_servise.getAppointmentsByDateAndDoctor2("", `${d.getFullYear()}-${d.getMonth().toString().padStart(2, '0')}-${d.getDate()}`,)
    })
  }
  currentDate: Date | null = null
  appointments: appointmentModel[] = []
}
