import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { HomeComponent } from './main-components/home/home.component';
import { AboutComponent } from './main-components/about/about.component';
import { ContactUsComponent } from './main-components/contact-us/contact-us.component';
import { BlogsComponent } from './main-components/blogs/blogs.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
