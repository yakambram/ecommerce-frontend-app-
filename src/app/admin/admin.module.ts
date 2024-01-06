import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { BrandComponent } from './components/brand/brand.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AnalyticsComponent,
    CategoryComponent,
    ProductComponent,
    OrdersComponent,
    CouponsComponent,
    BrandComponent,
    SubCategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
