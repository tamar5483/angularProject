import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { patientModel } from './patient.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  patients: patientModel[] = [
    { id: "214229222", name: "חיים לוי", phone: "123123213", doctorId: "2" },
    { id: "214229212", name: "sdf", phone: "123123213", doctorId: "1" },
    { id: "214279727", name: "sdf", phone: "123123213", doctorId: "2" },
    { id: "214272727", name: "sdf", phone: "123123213", doctorId: " 2" }
  ]

  constructor(private http: HttpClient) { }


  addPatient(patient: patientModel) {
    this.patients.push(patient)
    this.http.post('', patient)
  }

  getPatientById(id: string|null){
    if(!id)id=""
    return this.patients.find(p => p.id === id)
    
  }
  getPatients(id: string): Observable<patientModel[]> {
    return this.http.get<patientModel[]>(`filter=${id}`)//?   להוציא אידי של רופא, לשלוח לפונקציה
  }


  getPatients2(id: string | null): patientModel[] {
    if (id === "0")
      return this.patients
    return this.patients.filter(p => p.doctorId === id)
  }


}
