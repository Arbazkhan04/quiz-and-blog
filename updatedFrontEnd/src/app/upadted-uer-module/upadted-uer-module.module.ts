import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpadtedUerModuleRoutingModule } from './upadted-uer-module-routing.module';
import { UpadtedUerModuleComponent } from './upadted-uer-module.component';
import { UserComponetComponent } from './user-componet/user-componet.component';
import { DashboardComponent } from './user-componet/dashboard/dashboard.component';
import { FullTestComponent } from './user-componet/full-test/full-test.component';
import { NavbarComponent } from './user-componet/navbar/navbar.component';
import { PracticeComponentComponent } from './user-componet/practice-component/practice-component.component';
import { ComputerComponent } from './user-componet/practice-component/child-component/computer/computer.component';
import { ChemistryComponent } from './user-componet/practice-component/child-component/chemistry/chemistry.component';
import { MathComponent } from './user-componet/practice-component/child-component/math/math.component';
import { PhysicsComponent } from './user-componet/practice-component/child-component/physics/physics.component';
import { RouterModule } from '@angular/router';
import { ChildComponentComponent } from './user-componet/practice-component/child-component/child-component.component';


@NgModule({
  declarations: [
    UpadtedUerModuleComponent,
    UserComponetComponent,
    DashboardComponent,
    FullTestComponent,
    NavbarComponent,
    PracticeComponentComponent,
    ChemistryComponent,
    PhysicsComponent,
    MathComponent,
    ComputerComponent,
    ChildComponentComponent
  ],
  imports: [
    CommonModule,
    UpadtedUerModuleRoutingModule,
    RouterModule
  ]
})
export class UpadtedUerModuleModule { }
