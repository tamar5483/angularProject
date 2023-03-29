import { Component, OnInit } from '@angular/core';
import { appointmentModel } from 'src/app/treatment/treatment.model';

@Component({
  selector: 'app-daily-schedule',
  templateUrl: './daily-schedule.component.html',
  styleUrls: ['./daily-schedule.component.scss']
})
export class DailyScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  appointments:appointmentModel[]=[]
}
