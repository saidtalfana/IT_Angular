import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './Component/Main/signin/signin.component';
import { DashboardComponent } from './Component/Dashboard/dashboard/dashboard.component';
import { UserComponent } from './Component/User/user/user.component';
import { TechnicianComponent } from './Component/Technician/technician/technician.component';
import { ChartComponent } from './Component/Dashboard/chart/chart.component';
import { AddEquipmentComponent } from './Component/Dashboard/add-equipment/add-equipment.component';


  const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    { path: 'technician', component: TechnicianComponent },
    { path: 'chart', component: ChartComponent },
    { path: 'add', component: AddEquipmentComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
  ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
