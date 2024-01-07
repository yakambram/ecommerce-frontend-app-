import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ProfileComponent } from './components/profile/profile.component';
import { customerAuthGuard } from '../services/auth/customer-auth.guard';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { path: '', component: CustomerComponent, canActivate:[customerAuthGuard] },
  {path:'dashboard', component:DashboardComponent, canActivate:[customerAuthGuard]},
  {path:'cart',component:CartComponent, canActivate:[customerAuthGuard]},
  {path:'my_orders',component:OrdersComponent, canActivate:[customerAuthGuard]},
  {path:'wishlist',component:WishlistComponent, canActivate:[customerAuthGuard]},
  {path:'profile',component:ProfileComponent, canActivate:[customerAuthGuard]},
  {path:'payment',component:PaymentComponent, canActivate:[customerAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
