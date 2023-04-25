import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private login_srvice: LoginService, private router: Router) { }
  canActivate(): boolean | Observable<boolean> | Promise<boolean> {

    if (this.login_srvice.getUserId() !== null) {
      this.router.navigate([`${this.login_srvice.getUserRole()}/${this.login_srvice.getUserId()}`])
      return false
    }
    else
      return true;
  }


}
