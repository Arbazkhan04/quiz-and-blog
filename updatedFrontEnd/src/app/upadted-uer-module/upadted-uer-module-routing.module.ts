import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpadtedUerModuleComponent } from './upadted-uer-module.component';
import { DashboardComponent } from './user-componet/dashboard/dashboard.component';
import { FullTestComponent } from './user-componet/full-test/full-test.component';
import { PracticeComponentComponent } from './user-componet/practice-component/practice-component.component';
import { MathComponent } from './user-componet/practice-component/child-component/math/math.component';
import { ChemistryComponent } from './user-componet/practice-component/child-component/chemistry/chemistry.component';
import { ComputerComponent } from './user-componet/practice-component/child-component/computer/computer.component';
import { ChildComponentComponent } from './user-componet/practice-component/child-component/child-component.component';

const routes: Routes = [{ path: '', component: UpadtedUerModuleComponent,
 children:[
  {path:'',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'full-test',component:FullTestComponent},
  {path:'practice',component:PracticeComponentComponent,
  children:[
    {path:'',component:ChildComponentComponent,
    children:[
      {path:'math',component:MathComponent},
      {path:'chemsitry',component:ChemistryComponent},
      {path:'computer',component:ComputerComponent}
    ]
  }
  ]
},

 ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpadtedUerModuleRoutingModule { }
