import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ThemeModule } from '../@theme/theme.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { FlightsComponent } from './flights/flights.component';
import { StaysComponent } from './stays/stays.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [DashboardComponent, PagesComponent, PageNotFoundComponent, FlightsComponent, StaysComponent, CarRentalComponent, ProfileComponent],
  imports: [
    CommonModule, ThemeModule, PagesRoutingModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class PagesModule { }
