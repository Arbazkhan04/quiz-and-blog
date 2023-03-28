import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './management-component/login/login.component';
import { SingUpComponent } from './management-component/sing-up/sing-up.component';
import { ManagementModuleComponent } from './management-module.component';

const routes: Routes = [{ path: '', component: ManagementModuleComponent ,
children:[
  {path:'login',component:LoginComponent},
  {path:'sing-up',component:SingUpComponent},
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementModuleRoutingModule { }
