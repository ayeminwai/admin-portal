import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core';
import { LoginComponent } from '../login/login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightsComponent } from './flights/flights.component';
import { ProfileComponent } from './profile/profile.component';
import { StaysComponent } from './stays/stays.component';
import { UserRegModule } from './user-reg/user-reg.module';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'flights', component: FlightsComponent, canActivate: [AuthGuard]},
  { path: 'stays', component: StaysComponent, canActivate: [AuthGuard]},
  { path: 'car-rental', component: CarRentalComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'users', loadChildren: () => import('src/app/pages/user-reg/user-reg.module').then(mod => mod.UserRegModule)},
  { path: 'process', loadChildren: () => import('src/app/pages/process/process.module').then(mod => mod.ProcessModule)},
  { path: 'logs', loadChildren: () => import('src/app/pages/logs/logs.module').then(mod => mod.LogsModule)},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
