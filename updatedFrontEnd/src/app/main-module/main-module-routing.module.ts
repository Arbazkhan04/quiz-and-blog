import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './main-components/header/header.component';
import { HomeComponent } from './main-components/home/home.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [{ path: '', component: MainModuleComponent,
children:[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'header',component:HeaderComponent},
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
