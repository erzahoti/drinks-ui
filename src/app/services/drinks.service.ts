import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  constructor(private http: HttpClient){ }

  findAll(): Observable<any> {
   return this.http.get(environment.api + '/drinks');
  }

  addToBucket(drink: any): Observable<any> {
    return this.http.post(environment.api + '/bucket/add', drink);
  }
}
