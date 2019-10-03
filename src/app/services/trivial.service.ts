import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TrivialService {

  baseURL = 'https://opentdb.com/api.php?amount=10';

  constructor(private http: HttpClient) { }

  getRequest(): Observable<any> {
    return this.http.get(this.baseURL);
  }
}
