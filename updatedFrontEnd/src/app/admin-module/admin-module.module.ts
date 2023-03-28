import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { CreateQuizComponent } from './admin-component/create-quiz/create-quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizAnalysticsComponent } from './admin-component/quiz-analystics/quiz-analystics.component';


@NgModule({
  declarations: [
    AdminModuleComponent,
    AdminComponentComponent,
    DashboardComponent,
    CreateQuizComponent,
    QuizAnalysticsComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModuleModule { }
