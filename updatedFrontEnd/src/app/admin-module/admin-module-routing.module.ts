import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppendQuizComponent } from './admin-component/append-quiz/append-quiz.component';
import { CreateQuizComponent } from './admin-component/create-quiz/create-quiz.component';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { QuizAnalysticsComponent } from './admin-component/quiz-analystics/quiz-analystics.component';
import { AdminModuleComponent } from './admin-module.component';

const routes: Routes = [{ path: '', component: AdminModuleComponent,
children:[
  {path:'',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'createquiz',component:CreateQuizComponent},
  {path:'quiz-analystic',component:QuizAnalysticsComponent},
  {path:'append-quiz',component:AppendQuizComponent}
] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
