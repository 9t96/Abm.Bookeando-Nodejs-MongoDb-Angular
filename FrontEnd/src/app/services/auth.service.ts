import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import { Router } from '@angular/router';

const jwt: JwtHelperService = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public LogOut()
  {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }

  public getUser(): string {
    let token = this.getToken();
    let datos = jwt.decodeToken(token);  
    return datos;
  }

 //retorna el token
  public getToken(): string {
    return localStorage.getItem('token');
  }


  public isAuthenticated(): boolean {
   // get the token
   const credential = this.getToken();
   // return a boolean reflecting
   // whether or not the token is expired+
   if(credential !== null)
   {
      return !jwt.isTokenExpired(credential);
   }
   else
    return false;
 }


 private sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
 }


 async  pausa(ms) {
   console.log('Taking a break...');
   await this.sleep(ms);
   console.log('Two second later');
 }
}
