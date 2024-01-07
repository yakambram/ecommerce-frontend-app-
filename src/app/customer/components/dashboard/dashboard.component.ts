import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  quantity: number = 0;
  products$: Observable<any>;
  
  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  addToCart(product: any) {
    console.log(product, this.quantity);
    this.cartService.addToCart(product, this.quantity);
  }

  incrementQuantity(product: any) {
    this.quantity++;
    this.cartService.updateQuantity(product, this.quantity);
  }

  decrementQuantity(product: any) {
    if (product.quantity > 1) {
      this.quantity--;
      this.cartService.updateQuantity(product, this.quantity);
    }
  }

}
