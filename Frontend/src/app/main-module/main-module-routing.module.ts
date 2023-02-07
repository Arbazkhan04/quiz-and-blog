import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main-components/about/about.component';
import { BlogsComponent } from './main-components/blogs/blogs.component';
import { ContactUsComponent } from './main-components/contact-us/contact-us.component';
import { HomeComponent } from './main-components/home/home.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [{ path: '', component: MainModuleComponent,
children:[
  {path:'' , component:HomeComponent},
  {path:'home' , component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'blogs', component:BlogsComponent},
  {path:'contact-us', component:ContactUsComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
