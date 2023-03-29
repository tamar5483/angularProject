import { Time } from "@angular/common";

export interface treatmentModel{
    id:number,
    patientId:string|null,
    type:string,
    status:string,
    time:Time,
    date:Date
}