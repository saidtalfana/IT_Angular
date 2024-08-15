import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './Component/Main/signin/signin.component';
import { DashboardComponent } from './Component/Dashboard/dashboard/dashboard.component';
import { UserComponent } from './Component/User/user/user.component';
import { TechnicianComponent } from './Component/Technician/technician/technician.component';
import { AddEquipmentComponent } from './Component/Dashboard/add-equipment/add-equipment.component';
import { ShowEquipmentComponent } from './Component/Dashboard/show-equipment/show-equipment.component';
import { MainComponent } from './Component/Main/main/main.component';
import { AddTicketComponent } from './Component/User/add-ticket/add-ticket.component';
import { ShowTicketComponent } from './Component/User/show-ticket/show-ticket.component';
import { UpdateTicketComponent } from './Component/Dashboard/update-ticket/update-ticket.component';
import { UpdateTicketTechComponent } from './Component/Technician/update-ticket-tech/update-ticket-tech.component';
import { LogoutComponent } from './Component/Dashboard/logout/logout.component';
import { AllTicketComponent } from './Component/Dashboard/all-ticket/all-ticket.component';
import { AddFailureComponent } from './Component/Dashboard/add-failure/add-failure.component';
import { ShowTechnicianComponent } from './Component/Dashboard/show-technician/show-technician.component';
import { ShowUserComponent } from './Component/Dashboard/show-user/show-user.component';
import { SideBarComponent } from './Component/Dashboard/side-bar/side-bar.component';
import { HomeComponent } from './Component/Main/home/home.component';
import { SignupComponent } from './Component/Main/signup/signup.component';
import { NavComponent } from './Component/User/nav/nav.component';


  const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    { path: 'technician', component: TechnicianComponent },
    { path: 'addEquipment', component: AddEquipmentComponent },
    { path: 'addFailure', component: AddFailureComponent },
    { path: 'allTicket', component: AllTicketComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'logOut', component: LogoutComponent },
    { path: 'showEquipment', component: ShowEquipmentComponent },
    { path: 'showTechnician', component: ShowTechnicianComponent },
    { path: 'showUser', component: ShowUserComponent },
    { path: 'sideBar', component: SideBarComponent },
    { path: 'updateTicket', component: UpdateTicketComponent },
    { path: 'home', component: HomeComponent },
    { path: 'main', component: MainComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'technician', component: TechnicianComponent },
    { path: 'addTicket', component: AddTicketComponent },
    { path: 'addTicket', component: AddTicketComponent },
    { path: 'nav', component: NavComponent },
    { path: 'showTicket', component: ShowTicketComponent },
    { path: 'user', component: UserComponent },

    { path: 'edit-equipment/:id', component: AddEquipmentComponent },
    { path: 'edit-ticket/:id', component: UpdateTicketComponent },
    { path: 'ticket_id/:id', component: UpdateTicketTechComponent },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: '**', redirectTo: '/main' }
  ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
