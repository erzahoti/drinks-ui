import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  constructor(private http: HttpClient){ }

  findAll(): Observable<any> {
   return this.http.get('http://localhost:8080/drinks');
  }

  addToBucket(drink: any): Observable<any> {
    return this.http.post('http://localhost:8080/bucket/add', drink);
  }
}
