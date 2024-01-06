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

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path:'dashboard', component:DashboardComponent},
  {path:'analytics',component:AnalyticsComponent},
  {path:'brand',component:BrandComponent},
  {path:'category',component:CategoryComponent},
  {path:'sub-category',component:SubCategoryComponent},
  {path:'product',component:ProductComponent},
  {path:'orders',component:OrdersComponent},
  {path:'coupons',component:CouponsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
