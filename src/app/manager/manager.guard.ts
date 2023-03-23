import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {

constructor(private login_srvice:LoginService){}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> 
  {
    return this.login_srvice.getUserRole()==='manager' ;
  }
  
}
