import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './Component/Main/signin/signin.component';
import { DashboardComponent } from './Component/Dashboard/dashboard/dashboard.component';
import { UserComponent } from './Component/User/user/user.component';
import { TechnicianComponent } from './Component/Technician/technician/technician.component';
import { ChartComponent } from './Component/Dashboard/chart/chart.component';
import { AddEquipmentComponent } from './Component/Dashboard/add-equipment/add-equipment.component';
import { ShowEquipmentComponent } from './Component/Dashboard/show-equipment/show-equipment.component';
import { MainComponent } from './Component/Main/main/main.component';


  const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    { path: 'technician', component: TechnicianComponent },
    { path: 'main', component: MainComponent },
    { path: 'add', component: AddEquipmentComponent },
    { path: 'edit-equipment/:id', component: AddEquipmentComponent },
    { path: 'show-equipment', component: ShowEquipmentComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
  ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
