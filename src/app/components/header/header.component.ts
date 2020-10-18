import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;
  constructor(private headerService: HeaderService,  private router: Router) { }

  ngOnInit(): void {
    this.headerService.getUser()
      .subscribe(
        data => {
          this.user = data;
        },
        error => {
          console.log(error);
        });
  }

  goToBucket(): void {
    this.router.navigate(['bucket']);
  }

  goToDrinks(): void {
    this.router.navigate(['drinks']);
  }
}
