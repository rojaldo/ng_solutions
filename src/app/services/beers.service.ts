import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  baseURL = 'https://api.punkapi.com/v2/beers';
  
  constructor(private http: HttpClient) { }

  getRequest(): Observable<any> {
    return this.http.get(this.baseURL);
  }
}
