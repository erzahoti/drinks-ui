import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BucketService {

  constructor(private http: HttpClient){ }

  getBucket(): Observable<any> {
    return this.http.get(environment.api + '/bucket/read');
  }

  addToBucket(drink: any): Observable<any> {
    return this.http.post(environment.api + '/bucket/add', drink);
  }

  applyDiscount(bucket: any, discountCode): Observable<any> {
    return this.http.post(environment.api + '/bucket/apply_discount/' + discountCode, bucket);
  }

  updateQuantity(bucketOrder: any, bucket: any): Observable<any> {
    const jsonBody = {
      bucketOrder, bucket
    };
    return this.http.put(environment.api + '/bucket/update', jsonBody);
  }

  pay(paymentType: string, bucket: any): Observable<any> {
    const jsonBody = {
       bucket, paymentType
    };
    return this.http.put(environment.api + '/bucket/pay', jsonBody);
  }
}
