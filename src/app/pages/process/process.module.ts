import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessRoutingModule } from './process-routing.module';
import { MCheckinComponent } from './m-checkin/m-checkin.component';
import { ECheckinComponent } from './e-checkin/e-checkin.component';

@NgModule({
  declarations: [MCheckinComponent, ECheckinComponent],
  imports: [
    CommonModule,
    ProcessRoutingModule
  ]
})
export class ProcessModule { }
