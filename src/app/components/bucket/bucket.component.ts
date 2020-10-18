import { Component, OnInit } from '@angular/core';
import {BucketService} from '../../services/bucket.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})

export class BucketComponent implements OnInit {

  displayedColumns: string[] = ['Bucket Order', 'Drink', 'Price', 'Quantity'];
  bucket: any;
  isApplyDiscountDisabled: boolean;
  discountCode: string;
  paymentType: string;
  isPayDisabled = true;
  constructor(private bucketService: BucketService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getBucket();
  }

  getBucket(): void {
    this.bucketService.getBucket()
      .subscribe(
        data => {
          this.bucket = data;
        },
        error => {
          console.log(error);
        });
  }

  applyDiscount(): void{
    if (this.discountCode) {
      this.bucketService.applyDiscount(this.bucket, this.discountCode)
        .subscribe(
          data => {
            this.bucket = data;
            this.snackBar.open('Discount applied Successfully!', 'Success', {
              duration: 2000,
            });
          },
          error => {
            this.snackBar.open('Discount not found!', 'Error', {
              duration: 2000,
            });
          });
    }
  }

  updateQuantity(event, element): void {
    element.quantity = +event.target.value;
    this.bucketService.updateQuantity(element, this.bucket)
      .subscribe(
        data => {
          this.bucket = data;
          if (data.finalTotalPrice > 10 && this.paymentType === 'CASH') {
            this.isPayDisabled = true;
          }
        },
        error => {
          this.snackBar.open('Something went wrong!!', 'Error', {
            duration: 2000,
          });
        });
  }

  gotToDrinks(): void {
    this.router.navigate(['drinks']);
  }

  selectPaymentType(event): void {
    this.paymentType = event.value;
    this.isPayDisabled = false;
  }

  pay(): void {
      this.bucketService.pay(this.paymentType, this.bucket)
        .subscribe(
          data => {
            this.snackBar.open('Paid successfully!', 'Success', {
              duration: 2000,
            });
            this.bucket = data;
            this.gotToDrinks();
          },
          error => {
            this.snackBar.open('Something went wrong!', 'Error', {
              duration: 2000,
            });
          });
  }
}
