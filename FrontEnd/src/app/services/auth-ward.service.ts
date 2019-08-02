import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {AuthService} from '../services/auth.service';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthWardService implements CanActivate {
  helper = new JwtHelperService();
  token = null;
  userID;
  
  constructor(public auth: AuthService, public router: Router) {
    this.token = localStorage.getItem('token');
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    if (this.auth.isAuthenticated()) {
      return true
    }
    this.router.navigate(['/error']);
    return false;  
  }



}
