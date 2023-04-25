import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employeeModel } from '../manager/employee.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private http:HttpClient)
   { }

   getDoctors():Observable<employeeModel[]>{
     return this.http.get<employeeModel[]>('')
   }
}
