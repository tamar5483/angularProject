import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { patientModel } from '../patient.model';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  constructor(private patientService:PatientsService,private router:Router,private route: ActivatedRoute) { }
  
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
     let id = params.get('doctorId');
     // this.patientService.getPatients2(this.doctorId).subscribe
     this.doctorId=id?id:"0";
      this.patients = this.patientService.getPatients2(this.doctorId)

    })
    // this.patientService.getPatients("2").subscribe(p=>this.patients=p)
  }

  patients: patientModel[] =[]

  doctorId: string = ""


  showInput: boolean = false

  setShowInput() {

    this.showInput = true;

  }
  
  addPatient(p: patientModel) {
    this.patients.push(p);
    this.showInput = false;
    this.patientService.addPatient(p)

  }

  goToAppointments(patient:patientModel){
    this.router.navigate([`${this.router.url}/${patient.id}/appointments`])
  }



}
