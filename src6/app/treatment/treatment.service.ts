import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { treatmentModel } from './treatment.model';
import { Time } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  appointments:treatmentModel[]=[
    {id:1,patientId:"1",type:"xcf",status:"שורש" ,time:{hours:5,minutes:56},date:new Date()},
    {id:1,patientId:"1",type:"xcf",status:"שורש" ,time:{hours:5,minutes:56},date:new Date()},
    {id:1,patientId:"1",type:"xcf",status:"שורש" ,time:{hours:5,minutes:56},date:new Date()},
    {id:1,patientId:"4",type:"xcf",status:"שורש" ,time:{hours:5,minutes:56},date:new Date()},
    {id:1,patientId:"2",type:"xcf",status:"שורש" ,time:{hours:5,minutes:56},date:new Date()},
    {id:1,patientId:"2",type:"xcf",status:"שורש" ,time:{hours:5,minutes:56},date:new Date()},
    {id:1,patientId:"2",type:"xcf",status:"שורש" ,time:{hours:5,minutes:56},date:new Date()},
    {id:1,patientId:"2",type:"xcf",status:"שורש" ,time:{hours:5,minutes:56},date:new Date()},
    {id:1,patientId:"1",type:"xcf",status:"שורש" ,time:{hours:5,minutes:56},date:new Date()},
    {id:1,patientId:"3",type:"xcf",status:"שורש" ,time:{hours:5,minutes:56},date:new Date()},
    {id:1,patientId:"5",type:"xcf",status:"שורש" ,time:{hours:5,minutes:56},date:new Date()},
    {id:1,patientId:"5",type:"xcf",status:"שורש" ,time:{hours:5,minutes:56},date:new Date()},
  ]

  types:string[]=["שורש","סתימה"]

  statuses:string[]=["שולם","לא שולם"]

  constructor(private http: HttpClient) { }

  addTreatment(t: treatmentModel) {
    //this.http.post('', t);
    this.appointments.push(t)
  }

  updateAppointment(appointment: treatmentModel){
//this.http.put(`/${appointment.id}`, t);
let index=this.appointments.findIndex(a=>appointment.id===a.id)
this.appointments[index]=appointment
}

getAppointments(id:string|null):Observable<treatmentModel[]>{////observable
return this.http.get<treatmentModel[]>(`?filter=${id}`)
}

getAppointments2(id:string|null):treatmentModel[]{
  if(id==="0")
  return this.appointments
  return this.appointments.filter((a)=>a.patientId===id);
  }

  getStatuses(){
    return this.statuses
  }

  getTypes(){
    return this.types
  }

}
