import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {

constructor(private login_srvice:LoginService,private router: Router){}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> 
  {
    if(this.login_srvice.getUserRole()!=='manager')  
  {this.router.navigate(['login'])
return false  
}
    else
    return true;
  }
  
}
