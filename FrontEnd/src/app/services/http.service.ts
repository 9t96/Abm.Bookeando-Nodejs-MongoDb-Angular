import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private Http: HttpClient ) { 
  }

  public Post(url:string, data:any)
  {
   return this.Http.post(url, data)
   .toPromise()
   .then(this.darDatos)
   .catch(err => console.log(err))
  }

  public Get(url:string)
  {
    return this.Http.get(url)
    .toPromise()
   .then()
   .catch(err => console.log(err))
  }

  darDatos(dato){
    return dato;
  }
}
