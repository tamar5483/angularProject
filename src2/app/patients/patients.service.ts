import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { patientModel } from './patient.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  patients: patientModel[] = [
    { id: "1", name: "sdf", phone: "123123213" },
    { id: "1", name: "sdf", phone: "123123213" },
    { id: "1", name: "sdf", phone: "123123213" },
    { id: "1", name: "sdf", phone: "123123213" }
  ]

  constructor(private http: HttpClient) { }

  addPatient(patient: patientModel) {
    patient.id=[this.patients.length+1].toString()

    this.http.post('', patient)
  }

  getPatients(id: string): Observable<patientModel[]> {
    return this.http.get<patientModel[]>(``)//?filter=${id}   להוציא אידי של רופא, לשלוח לפונקציה
    //return new Observable<patientModel>()
  }


  getPatients2(id: string): patientModel[]{
    return this.patients.filter(p=>p.id===id)
  }


}
