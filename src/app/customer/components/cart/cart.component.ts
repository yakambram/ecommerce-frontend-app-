import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: any[] = [];
  totalAmount: number = 0;
  constructor(public cartService: CartService,
    private router:Router) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      console.log(items);
      this.cartItems = items;
      this.calculateTotalAmount();
    });
  }
  calculateTotalAmount() {
    this.totalAmount = this.cartItems.reduce((total, item) => total + (item.product.productPrice * item.quantity), 0);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  removeItem(product: any) {
    this.cartService.removeItem(product);
  }

  placeOrder() {
    this.router.navigateByUrl('customer/payment');
}
}
