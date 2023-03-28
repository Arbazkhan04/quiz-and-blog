import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementModuleRoutingModule } from './management-module-routing.module';
import { ManagementModuleComponent } from './management-module.component';
import { ManagementComponentComponent } from './management-component/management-component.component';
import { LoginComponent } from './management-component/login/login.component';
import { SingUpComponent } from './management-component/sing-up/sing-up.component';


@NgModule({
  declarations: [
    ManagementModuleComponent,
    ManagementComponentComponent,
    LoginComponent,
    SingUpComponent
  ],
  imports: [
    CommonModule,
    ManagementModuleRoutingModule
  ]
})
export class ManagementModuleModule { }
