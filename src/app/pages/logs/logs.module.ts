import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsRoutingModule } from './logs-routing.module';
import { LogTriggerComponent } from './log-trigger/log-trigger.component';
import { LogCravingComponent } from './log-craving/log-craving.component';
import { LogFeelingsComponent } from './log-feelings/log-feelings.component';

@NgModule({
  declarations: [LogTriggerComponent, LogCravingComponent, LogFeelingsComponent],
  imports: [
    CommonModule,
    LogsRoutingModule
  ]
})
export class LogsModule { }
