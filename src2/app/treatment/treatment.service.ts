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
    {id:1,patientId:"1",type:"xcf",status:"m" ,time:{hours:5,minutes:56},date:new Date()},
    {id:2,patientId:"1",type:"xcf",status:"m" ,time:{hours:5,minutes:56},date:new Date()},
    {id:3,patientId:"1",type:"xcf",status:"m" ,time:{hours:5,minutes:56},date:new Date()},
    {id:4,patientId:"4",type:"xcf",status:"m" ,time:{hours:5,minutes:56},date:new Date()},
    {id:5,patientId:"2",type:"xcf",status:"m" ,time:{hours:5,minutes:56},date:new Date()},
    {id:6,patientId:"2",type:"xcf",status:"m" ,time:{hours:5,minutes:56},date:new Date()},
    {id:7,patientId:"2",type:"xcf",status:"m" ,time:{hours:5,minutes:56},date:new Date()},
    {id:8,patientId:"2",type:"xcf",status:"m" ,time:{hours:5,minutes:56},date:new Date()},
    {id:9,patientId:"1",type:"xcf",status:"m" ,time:{hours:5,minutes:56},date:new Date()},
    {id:10,patientId:"3",type:"xcf",status:"m" ,time:{hours:5,minutes:56},date:new Date()},
    {id:11,patientId:"5",type:"xcf",status:"m" ,time:{hours:5,minutes:56},date:new Date()},
    {id:12,patientId:"5",type:"xcf",status:"m" ,time:{hours:5,minutes:56},date:new Date()},
  ]

  types:string[]=["שורש","סתימה"]

  statuses:string[]=["שולם","לא שולם"]

  constructor(private http: HttpClient) { }

  addTreatment(t: treatmentModel) {
    t.id=(this.appointments.length+1)
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
  return this.appointments.filter((a)=>a.patientId===id);
  }

  getStatuses(){
    return this.statuses
  }

  getTypes(){
    return this.types
  }

}
