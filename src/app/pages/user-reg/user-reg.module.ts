import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegRoutingModule } from './user-reg-routing.module';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    UserRegRoutingModule
  ]
})
export class UserRegModule { }
