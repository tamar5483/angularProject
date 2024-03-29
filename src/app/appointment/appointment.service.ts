import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentModel } from './appointment.model';
import { PatientsService } from '../patients/patients.service';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointments:AppointmentModel[]=[
    {id:1,patient:"חיים לוי",type:"סתימה",status:"שולם" ,time:"00:11",date:"2023-03-20"},
    {id:2,patient:"חיים לוי",type:"שורש",status:"שולם" ,time:"00:11",date:"2023-03-20"},
    {id:3,patient:"חיים לוי",type:"שורש",status:"שולם" ,time:"00:11",date:"2023-03-20"},
    {id:4,patient:"יהודה",type:"שורש",status:"שולם" ,time:"00:11",date:"2023-03-20"},
    {id:5,patient:"חיים ",type:"שורש",status:"שולם" ,time:"00:11",date:"2023-03-20"},
    {id:6,patient:"חיים ",type:"שורש",status:"שולם" ,time:"00:11",date:"2023-03-20"},
    {id:7,patient:"חיים לוי",type:"שורש",status:"שולם" ,time:"00:11",date:"2023-03-20"},
    {id:8,patient:"יהודה",type:"שורש",status:"שולם" ,time:"00:11",date:"2023-03-19"},
    {id:9,patient:"חיים לוי",type:"סתימה",status:"שולם" ,time:"00:11",date:"2023-03-19"},
   {id:10,patient:"חיים לוי",type:"שורש",status:"לא שולם" ,time:"00:11",date:"2023-03-19"},
    
  ]
  types:string[]=["שורש","סתימה"]

  statuses:string[]=["שולם","לא שולם"]

  constructor(private http: HttpClient,private patient_service:PatientsService) { }

  addAppointment(t: AppointmentModel) {
    t.id=this.appointments.length+1
    //this.http.post('', t);
    this.appointments.push(t)
  }

  updateAppointment(appointment: AppointmentModel){
//this.http.put(`/${appointment.id}`, t);
let index=this.appointments.findIndex(a=>appointment.id===a.id)
this.appointments[index]=appointment
}

getAppointments(id:string|null):Observable<AppointmentModel[]>{////observable
return this.http.get<AppointmentModel[]>(`?filter=${id}`)
}

getAppointmentsByName(id:string|null):AppointmentModel[]{
  if(id==="0")
  return this.appointments
  
  return this.appointments.filter((a)=>a.patient===id);
  }

  getAppointmentsByDateAndDoctor2(id:string|null,date:string|null):AppointmentModel[]{
    return this.appointments.filter((a)=>a.date===date).filter((a)=>this.patient_service.patients.find((p)=>a.patient===p.name)?.doctorId===id)
    }

  getStatuses(){
    return this.statuses
  }

  getTypes(){
    return this.types
  }

}
