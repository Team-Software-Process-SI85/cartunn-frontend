import { Component } from '@angular/core';
import {Product} from "../../../products/model/product.entity";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  title: string = 'List Items';
  divDataSafe: boolean = false;
  cart: Product[] = [];
  total: number = 0;

  constructor() { }


  showDataSafe() {
    this.divDataSafe = !this.divDataSafe;
  }


  addToCart(product: Product): void {
    this.cart.push(product);
    this.calculateTotal();
  }


  removeFromCart(product: Product): void {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
      this.calculateTotal();
    }
  }


  calculateTotal(): void {
    this.total = this.cart.reduce((sum, product) => sum + product.price, 0);
  }


  clearCart(): void {
    this.cart = [];
    this.total = 0;
  }
}
