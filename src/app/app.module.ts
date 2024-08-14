import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './Component/Main/signin/signin.component';
import { AddEquipmentComponent } from './Component/Dashboard/add-equipment/add-equipment.component';
import { ChartComponent } from './Component/Dashboard/chart/chart.component';
import { DashboardComponent } from './Component/Dashboard/dashboard/dashboard.component';
import { LogoutComponent } from './Component/Dashboard/logout/logout.component';
import { ShowUserComponent } from './Component/Dashboard/show-user/show-user.component';
import { ShowEquipmentComponent } from './Component/Dashboard/show-equipment/show-equipment.component';
import { ShowTechnicianComponent } from './Component/Dashboard/show-technician/show-technician.component';
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
import { AddFailureComponent } from './Component/Dashboard/add-failure/add-failure.component';
import { AllTicketComponent } from './Component/Dashboard/all-ticket/all-ticket.component';
import { ShowTicketComponent } from './Component/User/show-ticket/show-ticket.component';




@NgModule({
  declarations: [
      AppComponent,
      AddEquipmentComponent,
     
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
      TechnicianComponent,
      UpdateTicketComponent,
      AddTicketComponent,
      ShowTicketComponent,
      UserComponent,
      MainComponent,
      AddFailureComponent,
      AllTicketComponent,
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