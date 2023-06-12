import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementModuleRoutingModule } from './management-module-routing.module';
import { ManagementModuleComponent } from './management-module.component';
import { ManagementComponentComponent } from './management-component/management-component.component';
import { AdminLoginComponent } from './management-component/admin/admin-login/admin-login.component';
import { AdminRegisterComponent } from './management-component/admin/admin-register/admin-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManagementModuleComponent,
    ManagementComponentComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
  ],
  imports: [
    CommonModule,
    ManagementModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ManagementModuleModule { }
