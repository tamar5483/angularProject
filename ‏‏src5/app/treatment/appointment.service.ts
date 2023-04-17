import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appointmentModel } from './treatment.model';
import { Time } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointments:appointmentModel[]=[
    {id:1,patientId:"237453826",type:"xcf",status:"שורש" ,time:"00:11",date:"2023-03-03"},
    {id:2,patientId:"237453826",type:"xcf",status:"שורש" ,time:"00:11",date:"2023-03-16"},
    {id:3,patientId:"214272727",type:"xcf",status:"שורש" ,time:"00:11",date:"2023-03-03"},
    {id:4,patientId:"214279727",type:"xcf",status:"שורש" ,time:"00:11",date:"2023-03-16"},
    {id:5,patientId:"237453826",type:"xcf",status:"שורש" ,time:"00:11",date:"2023-03-03"},
    {id:6,patientId:"214279727",type:"xcf",status:"שורש" ,time:"00:11",date:"2023-03-03"},
    {id:7,patientId:"214272727",type:"xcf",status:"שורש" ,time:"00:11",date:"2023-03-03"},
    {id:8,patientId:"214222222",type:"xcf",status:"שורש" ,time:"00:11",date:"2023-03-16"},
    {id:9,patientId:"214222222",type:"xcf",status:"שורש" ,time:"00:11",date:"2023-03-16"},
    {id:10,patientId:"214222222",type:"xcf",status:"שורש" ,time:"00:11",date:"2023-03-16"},
    
  ]
  types:string[]=["שורש","סתימה"]

  statuses:string[]=["שולם","לא שולם"]

  constructor(private http: HttpClient) { }

  addAppointment(t: appointmentModel) {
    t.id=this.appointments.length+1
    //this.http.post('', t);
    this.appointments.push(t)
  }

  updateAppointment(appointment: appointmentModel){
//this.http.put(`/${appointment.id}`, t);
let index=this.appointments.findIndex(a=>appointment.id===a.id)
this.appointments[index]=appointment
}

getAppointments(id:string|null):Observable<appointmentModel[]>{////observable
return this.http.get<appointmentModel[]>(`?filter=${id}`)
}

getAppointmentsById2(id:string|null):appointmentModel[]{
  if(id==="0")
  return this.appointments
  return this.appointments.filter((a)=>a.patientId===id);
  }

  getAppointmentsByDate2(date:string|null):appointmentModel[]{
    return this.appointments.filter((a)=>a.date===date);
    }

  getStatuses(){
    return this.statuses
  }

  getTypes(){
    return this.types
  }

}
