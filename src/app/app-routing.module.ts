import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {  customerAuthGuard } from './services/auth/customer-auth.guard';
import { adminAuthGuard } from './services/auth/admin-auth.guard';
import { TrackOrderComponent } from './track-order/track-order.component';

const routes: Routes = [


{path:"" , component:DashboardComponent},
{path:"dashboard" ,   component:DashboardComponent},
{path:"login" ,   component:LoginComponent},
{path:"signup" ,   component:SignupComponent},
{path:"forgot-password " ,   component:ForgotpasswordComponent},
{path:"track-order" ,    component:TrackOrderComponent},
{ path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),  canActivate:[customerAuthGuard] }, 
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) ,  canActivate:[adminAuthGuard]},
{path:"**" ,   component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
