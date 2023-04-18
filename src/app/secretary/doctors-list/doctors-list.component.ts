import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/doctor/doctors.service';
import { employeeModel } from 'src/app/manager/employee.model';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {

  constructor(private doctorsSrvice:DoctorsService) { }

  doctors:employeeModel[]=[]

  ngOnInit(): void {
this.doctorsSrvice.getDoctors().subscribe(d=>this.doctors=d)
  }

}
