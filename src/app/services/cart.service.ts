import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(product: any, quantity: number = 1) {
    const existingCartItem = this.cartItemsSubject.value.find(item => item.product.productName === product.productName);
    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      this.cartItemsSubject.next([...this.cartItemsSubject.value, { product, quantity }]);
    }
  }

  incrementQuantity(product: any) {
    product.quantity++;
    this.cartItemsSubject.next([...this.cartItemsSubject.value]); // Trigger change detection
  }

  decrementQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
      this.cartItemsSubject.next([...this.cartItemsSubject.value]); // Trigger change detection
    }
  }

  removeItem(product: any) {
    const updatedCartItems = this.cartItemsSubject.value.filter(item => item.product.id !== product.id);
    this.cartItemsSubject.next(updatedCartItems);
  }

  clearCart() {
    this.cartItemsSubject.next([]);
  }
  updateQuantity(product: any, quantity: number) {
    const updatedCartItems = this.cartItemsSubject.value.map(item => {
      if (item.product.id === product.id) {
        item.quantity = quantity;
      }
      return item;
    });

    this.cartItemsSubject.next(updatedCartItems);
  }

  getCartItemCount(): number {
    return this.cartItemsSubject.value.reduce((total, item) => total + item.quantity, 0);
  }
}
