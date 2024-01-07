import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { BrandComponent } from './components/brand/brand.component';
import { CategoryComponent } from './components/category/category.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { ProductComponent } from './components/product/product.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { adminAuthGuard } from '../services/auth/admin-auth.guard';

const routes: Routes = [
  { path: '', component: AdminComponent , canActivate:[adminAuthGuard]},
  { path:'dashboard', component:DashboardComponent,  canActivate:[adminAuthGuard]},
  { path:'analytics',component:AnalyticsComponent,  canActivate:[adminAuthGuard]},
  { path:'brand',component:BrandComponent,  canActivate:[adminAuthGuard]},
  { path:'category',component:CategoryComponent,  canActivate:[adminAuthGuard]},
  { path:'sub-category',component:SubCategoryComponent,  canActivate:[adminAuthGuard]},
  { path:'product',component:ProductComponent,  canActivate:[adminAuthGuard]},
  { path:'orders',component:OrdersComponent,  canActivate:[adminAuthGuard]},
  { path:'coupons',component:CouponsComponent,  canActivate:[adminAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
