import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient){ }

  getUser(): Observable<any> {
    return this.http.get('http://localhost:8080/user?id=1');
  }
}
