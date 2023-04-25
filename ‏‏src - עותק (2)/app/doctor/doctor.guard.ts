import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorGuard implements CanActivate {
 
constructor(private login_srvice:LoginService){}

canActivate(): boolean | Observable<boolean> | Promise<boolean> 
{
  let role= this.login_srvice.getUserRole()
  return role==='manager'||role==='doctor' ;
}

}
