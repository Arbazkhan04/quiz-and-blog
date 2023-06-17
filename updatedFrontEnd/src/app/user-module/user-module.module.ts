import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Router } from '@angular/router';
import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserModuleComponent } from './user-module.component';
import { DashboardComponent } from './user-component/dashboard/dashboard.component';
import { NavbarComponent } from './user-component/navbar/navbar.component';
import { MathsComponent } from './user-component/practise/child-component/maths/maths.component';
import { PhysicsComponent } from './user-component/practise/child-component/physics/physics.component';
import { ComputerComponent } from './user-component/practise/child-component/computer/computer.component';
import { ChemistryComponent } from './user-component/practise/child-component/chemistry/chemistry.component';


@NgModule({
  declarations: [
    UserModuleComponent,
    DashboardComponent,
    NavbarComponent,
    MathsComponent,
    PhysicsComponent,
    ComputerComponent,
    ChemistryComponent,
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    RouterModule,
  ]
})
export class UserModuleModule { }
