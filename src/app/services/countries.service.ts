import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  baseURL = 'https://restcountries.eu/rest/v2/all';
  
  constructor(private http: HttpClient) { }

  getRequest(): Observable<any> {
    return this.http.get(this.baseURL);
  }
}
