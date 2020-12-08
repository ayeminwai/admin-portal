import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ECheckinComponent } from './e-checkin/e-checkin.component';
import { AuthGuard } from 'src/app/core';
import { MCheckinComponent } from './m-checkin/m-checkin.component';

const routes: Routes = [
  { path: 'm-checkin', component: MCheckinComponent, canActivate: [AuthGuard]},
  { path: 'e-checkin', component: ECheckinComponent, canActivate: [AuthGuard]},  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }
