import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { CreateQuizComponent } from './admin-component/create-quiz/create-quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizAnalysticsComponent } from './admin-component/quiz-analystics/quiz-analystics.component';
import { AppendQuizComponent } from './admin-component/append-quiz/append-quiz.component';
import { SideBarComponent } from './admin-component/side-bar/side-bar.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AdminModuleComponent,
    AdminComponentComponent,
    DashboardComponent,
    CreateQuizComponent,
    QuizAnalysticsComponent,
    AppendQuizComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule
  ]
})
export class AdminModuleModule { }
