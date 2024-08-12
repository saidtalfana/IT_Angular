import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './Component/Main/signin/signin.component';
import { AddEquipmentComponent } from './Component/Dashboard/add-equipment/add-equipment.component';
import { AddFailureComponent } from './Component/Dashboard/add-failure/add-failure.component';
import { AddTechnicianComponent } from './Component/Dashboard/add-technician/add-technician.component';
import { AddUserComponent } from './Component/Dashboard/add-user/add-user.component';
import { ChartComponent } from './Component/Dashboard/chart/chart.component';
import { DashboardComponent } from './Component/Dashboard/dashboard/dashboard.component';
import { LogoutComponent } from './Component/Dashboard/logout/logout.component';
import { ShowUserComponent } from './Component/Dashboard/show-user/show-user.component';
import { ShowEquipmentComponent } from './Component/Dashboard/show-equipment/show-equipment.component';
import { ShowTechnicianComponent } from './Component/Dashboard/show-technician/show-technician.component';
import { ShowTicketComponent } from './Component/Technician/show-ticket/show-ticket.component';
import { TechnicianComponent } from './Component/Technician/technician/technician.component';
import { UpdateTicketComponent } from './Component/Technician/update-ticket/update-ticket.component';
import { AddTicketComponent } from './Component/User/add-ticket/add-ticket.component';
import { UserComponent } from './Component/User/user/user.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './Component/Main/signup/signup.component'
import { MainComponent } from './Component/Main/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Component/Main/home/home.component';
import { Interciptor } from './interciptor/interciptor';




@NgModule({
  declarations: [
      AppComponent,
      AddEquipmentComponent,
      AddFailureComponent,
      AddTechnicianComponent,
      AddUserComponent,
      ChartComponent,
      DashboardComponent,
      LogoutComponent,
      ShowEquipmentComponent,
      ShowTechnicianComponent,
      ShowUserComponent,
      HomeComponent,
      MainComponent,
      SigninComponent,
      SignupComponent,
      ShowTicketComponent,
      TechnicianComponent,
      UpdateTicketComponent,
      AddTicketComponent,
      ShowTicketComponent,
      UserComponent,
      MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,

    
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interciptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }