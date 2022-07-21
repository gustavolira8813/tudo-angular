import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlannerComponent } from './planner/planner.component';
import { CardTodoComponent } from './dashboard/card-todo/card-todo.component';
import { CardProgressComponent } from './dashboard/card-progress/card-progress.component';
import { CardCompletedComponent } from './dashboard/card-completed/card-completed.component';
import { MenuComponent } from './menu/menu.component';
import { TaskComponent } from './dashboard/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    PlannerComponent,
    CardTodoComponent,
    CardProgressComponent,
    CardCompletedComponent,
    MenuComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
