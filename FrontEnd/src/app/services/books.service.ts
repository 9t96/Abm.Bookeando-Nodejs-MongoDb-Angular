import { Injectable } from '@angular/core';
import {HttpService} from './http.service';


const url = 'https://abmbookeando.herokuapp.com/books';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  
  constructor(private httpServ: HttpService) { }

  GetOne(title:string)
  {
    return this.httpServ.Get(url+'/getone/'+title);
  }

  GetAll()
  {
    return this.httpServ.Get(url+'/getall');
  }

  SaveOne(book:any)
  {
    return this.httpServ.Post(url+'/newbook', book);
  }

  DeleteOne(book:any)
  {
    return this.httpServ.Post(url+'/deleteone', book);
  }

  UpdateOne(data:any)
  {
    return this.httpServ.Post(url+'/updateone', data);
  } 
} 
