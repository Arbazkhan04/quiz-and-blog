import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModuleComponent } from './user-module.component';
import { DashboardComponent } from './user-component/dashboard/dashboard.component';
import { PractiseComponent } from './user-component/practise/practise.component';
import { TipsAndStratigiesComponent } from './user-component/tips-and-stratigies/tips-and-stratigies.component';
import { FullTestComponent } from './user-component/full-test/full-test.component';
import { ReviewComponent } from './user-component/review/review.component';
import { MathsComponent } from './user-component/practise/child-component/maths/maths.component';
import { PhysicsComponent } from './user-component/practise/child-component/physics/physics.component';
import { ComputerComponent } from './user-component/practise/child-component/computer/computer.component';
import { ChemistryComponent } from './user-component/practise/child-component/chemistry/chemistry.component';

const routes: Routes = [
  {
    path: '',
    component: UserModuleComponent, children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'user-dashboard',
        component:DashboardComponent
      },
      {
        path:'practise',
        component:PractiseComponent,
        children:[
          {
            path:'math',
            component:MathsComponent
          },
          {
            path:'physics',
            component:PhysicsComponent
          },
          {
            path:'computer',
            component:ComputerComponent
          },
          {
            path:'chemistry',
            component:ChemistryComponent
          },
        ]
      },
      {
        path:'tips-and-strategy',
        component:TipsAndStratigiesComponent
      },
      {
        path:'full-test',
        component:FullTestComponent
      },
      {
        path:'review',
        component:ReviewComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
