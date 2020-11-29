import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, HeaderComponent, SidebarComponent } from './components';
import { RouterModule } from '@angular/router';
const COMPONENTS = [
  FooterComponent, HeaderComponent, SidebarComponent
]
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule],
  exports: [...COMPONENTS]
})
export class ThemeModule { }
