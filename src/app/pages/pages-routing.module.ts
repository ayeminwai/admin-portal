import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightsComponent } from './flights/flights.component';
import { ProfileComponent } from './profile/profile.component';
import { StaysComponent } from './stays/stays.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'flights', component: FlightsComponent},
  { path: 'stays', component: StaysComponent},
  { path: 'car-rental', component: CarRentalComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
