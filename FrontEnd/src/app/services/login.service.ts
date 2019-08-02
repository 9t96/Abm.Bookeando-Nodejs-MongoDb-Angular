import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

const url = 'https://abmbookeando.herokuapp.com/auth/signin';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpService) { }

  public signin(data:any)
  {
    return this.http.Post(url,data);
  }
}
