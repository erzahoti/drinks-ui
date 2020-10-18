import { Component, OnInit } from '@angular/core';
import {DrinksService} from '../../services/drinks.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  drinks: any;
  constructor(private drinkService: DrinksService,  private router: Router,  private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.drinkService.findAll()
      .subscribe(
        data => {
          this.drinks = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });

  }

  addToBucket(drink: any): void {
    this.drinkService.addToBucket(drink).subscribe(
      data => {
        console.log(data);
        this.snackBar.open('Added Successfully', 'Drink', {
          duration: 2000,
          panelClass: 'l-snackbar-success'
        });
      }, error => {
      console.log(error);
    });
  }

  goToBucket(): void {
    this.router.navigate(['bucket']);
  }


}
