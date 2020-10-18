import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DrinksComponent} from './components/drinks/drinks.component';
import {BucketComponent} from './components/bucket/bucket.component';

const routes: Routes = [
  { path: '', redirectTo: 'drinks', pathMatch: 'full' },
  { path: 'drinks', component: DrinksComponent },
  { path: 'bucket', component: BucketComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DrinksComponent, BucketComponent];
