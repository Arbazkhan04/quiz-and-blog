import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule) }, 

  { path: 'mian-module', loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule) }, 

  { path: 'admin-module', canActivate :[AuthGuard], loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule) },
  { path: 'ManagementModule', loadChildren: () => import('./management-module/management-module.module').then(m => m.ManagementModuleModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
