import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApodService {

  constructor(private http: HttpClient) { }

  getRequest(url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'): any {
    return this.http.get(url);
  }
}
