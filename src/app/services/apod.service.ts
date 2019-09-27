import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApodService {

  baseURL = 'https://api.nasa.gov/planetary/apod?api_key=tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6';
  
  constructor(private http: HttpClient) { }

  getRequest(date?: any): Observable<any> {
    if(date){
      return this.http.get(this.baseURL+
        '&date=' + date.year +
        '-' + date.month +
        '-' + date.day);
    }else {
      return this.http.get(this.baseURL);
    }
    
  }
}
