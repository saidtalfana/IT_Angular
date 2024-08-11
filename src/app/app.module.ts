import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './component/signup/signup.component';
import { SigninComponent } from './component/signin/signin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserComponent } from './component/user/user.component';
import { HomeComponent } from './component/home/home.component';
import { AddUserComponent } from './Component/Dashboard/add-user/add-user.component';
import { AddTechnicianComponent } from './Component/Dashboard/add-technician/add-technician.component';
import { AddEquipmentComponent } from './Component/Dashboard/add-equipment/add-equipment.component';
import { AddFailureComponent } from './Component/Dashboard/add-failure/add-failure.component';
import { ShowUserComponent } from './Component/Dashboard/show-user/show-user.component';
import { ShowTechnicianComponent } from './Component/Dashboard/show-technician/show-technician.component';
import { ShowEquipmentComponent } from './Component/Dashboard/show-equipment/show-equipment.component';
import { ChartComponent } from './Component/Dashboard/chart/chart.component';
import { LogoutComponent } from './Component/Dashboard/logout/logout.component';
import { HeaderComponent } from './Component/Main/header/header.component';
import { MainComponent } from './Component/Main/main/main.component';
import { ShowTicketComponent } from './Component/Technician/show-ticket/show-ticket.component';
import { UpdateTicketComponent } from './Component/Technician/update-ticket/update-ticket.component';
import { TechnicianComponent } from './Component/Technician/technician/technician.component';
import { AddTicketComponent } from './Component/User/add-ticket/add-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent,
    UserComponent,
    HomeComponent,
    AddUserComponent,
    AddTechnicianComponent,
    AddEquipmentComponent,
    AddFailureComponent,
    ShowUserComponent,
    ShowTechnicianComponent,
    ShowEquipmentComponent,
    ChartComponent,
    LogoutComponent,
    HeaderComponent,
    MainComponent,
    ShowTicketComponent,
    UpdateTicketComponent,
    TechnicianComponent,
    AddTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
