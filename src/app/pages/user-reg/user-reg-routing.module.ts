import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from 'src/app/core';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent, canActivate: [AuthGuard]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class UserRegRoutingModule { }
