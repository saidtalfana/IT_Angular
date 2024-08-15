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


  const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    { path: 'technician', component: TechnicianComponent },
    { path: 'addTicket', component: AddTicketComponent },
    { path: 'showTicket', component: ShowTicketComponent },
    { path: 'main', component: MainComponent },
    { path: 'add', component: AddEquipmentComponent },
    { path: 'edit-equipment/:id', component: AddEquipmentComponent },
    { path: 'edit-ticket/:id', component: UpdateTicketComponent },
    { path: 'ticket_id/:id', component: UpdateTicketTechComponent },
    { path: 'show-equipment', component: ShowEquipmentComponent },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: '**', redirectTo: '/main' }
  ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
