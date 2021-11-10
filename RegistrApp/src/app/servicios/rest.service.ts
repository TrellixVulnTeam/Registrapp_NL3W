import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable} from 'rxjs';


interface Dato {
}



@Injectable({
  providedIn: 'root'
})


export class RestService {
  dato:Dato;

  public baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(
      private httpClient: HttpClient ) {  }
      
  get_Datos() {
    return this.httpClient.get(this.baseUrl );
  }

}