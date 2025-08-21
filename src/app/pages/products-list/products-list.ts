import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../services/product';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule, ProductCard],
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss'
})

export class ProductsList implements OnInit {
  private productService = inject(Product)

  private subscription: Subscription | undefined;
  produtos: any[] = [];
  private limit = 8;
  private productsLoadedCount = 8;

  loadProducts(): void {
    this.subscription = this.productService.getProducts(this.productsLoadedCount).subscribe(data => {
      this.produtos = data;
    });
  }

  loadMore(): void {
    this.productsLoadedCount += this.limit;
    this.productService.getProducts(this.productsLoadedCount).subscribe(data => {
      this.produtos = data;
    });
  }

    ngOnInit(): void {
      this.loadProducts();
    }

    ngOnDestroy(): void {
      if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

