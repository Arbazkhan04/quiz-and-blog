import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementModuleComponent } from './management-module.component';
import { AdminLoginComponent } from './management-component/admin/admin-login/admin-login.component';
import { AdminRegisterComponent } from './management-component/admin/admin-register/admin-register.component';

const routes: Routes = [
  {
    path: '', component: ManagementModuleComponent,
    children: [
      { path: 'login', component: AdminLoginComponent },
      { path: 'sing-up', component: AdminRegisterComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementModuleRoutingModule { }
