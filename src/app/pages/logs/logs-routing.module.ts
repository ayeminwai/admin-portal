import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LogTriggerComponent } from './log-trigger/log-trigger.component';
import { AuthGuard } from 'src/app/core';
import { LogCravingComponent } from './log-craving/log-craving.component';
import { LogFeelingsComponent } from './log-feelings/log-feelings.component';

const routes: Routes = [
  { path: 'log-trigger', component: LogTriggerComponent, canActivate: [AuthGuard]},
  { path: 'log-craving', component: LogCravingComponent, canActivate: [AuthGuard]},  
  { path: 'log-feeling', component: LogFeelingsComponent, canActivate: [AuthGuard]},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class LogsRoutingModule { }
