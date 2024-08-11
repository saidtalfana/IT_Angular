import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './Component/Main/signin/signin.component';
import { DashboardComponent } from './Component/Dashboard/dashboard/dashboard.component';
import { UserComponent } from './Component/User/user/user.component';
import { TechnicianComponent } from './Component/Technician/technician/technician.component';

const routes: Routes = [
  { path: 'login', component: SigninComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'technician', component: TechnicianComponent },
  // { path: 'login', component: SigninComponent },

  // { path: 'signup', component: SignUpComponent, canActivate: [AuthGuard], data: { expectedRole: Role.ADMIN } },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { expectedRole: Role.ADMIN } },
  // { path: 'technician', component: DashTechnicianComponent, canActivate: [AuthGuard], data: { expectedRole: Role.TECHNICIAN } },
  // { path: 'user', component: DashUserComponent, canActivate: [AuthGuard], data: { expectedRole: Role.USER } },
  // { path: 'access-denied', component: AuthGuardComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' } // Optional: redirect to login if the path is empty
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
