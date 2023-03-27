import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { MainComponentsComponent } from './main-components/main-components.component';
import { HomeComponent } from './main-components/home/home.component';
import { HeaderComponent } from './main-components/header/header.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    MainComponentsComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
