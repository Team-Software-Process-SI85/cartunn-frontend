import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products-api/products.service";
import { Product } from "../../model/product.entity";

@Component({
  selector: 'app-card-products',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class ProductsCardComponent implements OnInit {
  title: string = 'Products';
  products: Product[] = [];
  total: number = 0;

  constructor(private productApiService: ProductsService) { }

  ngOnInit(): void {
    this.productApiService.getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
        this.calculateTotal();
      });
  }


  calculateTotal(): void {
    this.total = this.products.reduce((sum, product) => sum + product.price, 0);
  }
}
