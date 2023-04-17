import { Time } from "@angular/common";

export interface appointmentModel{
    id:number,
    patientId:string|null,
    type:string,
    status:string,
   // time:Time,
   time:string
   // date:Date
    date:string
}