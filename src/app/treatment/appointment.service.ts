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
    {id:1,patient:"חיים לוי",type:"שורש",status:"שולם" ,time:"00:11",date:"2023-03-17"},
    {id:2,patient:"חיים לוי",type:"שורש",status:"שולם" ,time:"00:11",date:"2023-03-17"},
    {id:3,patient:"חיים לוי",type:"שורש",status:"שולם" ,time:"00:11",date:"2023-03-17"},
    {id:4,patient:"חיים לוי",type:"שורש",status:"שולם" ,time:"00:11",date:"2023-03-17"},
    {id:5,patient:"חיים לוי",type:"שורש",status:"שולם" ,time:"00:11",date:"2023-03-17"},
    {id:6,patient:"חיים לוי",type:"שורש",status:"שולם" ,time:"00:11",date:"2023-03-17"},
    {id:7,patient:"חיים לוי",type:"שורש",status:"שולם" ,time:"00:11",date:"2023-03-17"},
    {id:8,patient:"חיים לוי",type:"שורש",status:"שולם" ,time:"00:11",date:"2023-03-17"},
    {id:9,patient:"חיים לוי",type:"שורש",status:"שולם" ,time:"00:11",date:"2023-03-17"},
   {id:10,patient:"חיים לוי",type:"שורש",status:"לא שולם" ,time:"00:11",date:"2023-03-17"},
    
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
  return this.appointments.filter((a)=>a.patient===id);
  }

  getAppointmentsByDateAndDoctor2(id:string|null,date:string|null):appointmentModel[]{
    return this.appointments.filter((a)=>a.date===date)
    }

  getStatuses(){
    return this.statuses
  }

  getTypes(){
    return this.types
  }

}
