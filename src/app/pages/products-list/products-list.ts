import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../services/product'; // Service
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule],
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss'
})

export class ProductsList implements OnInit, OnDestroy  {
  private productService = inject(Product)

  private subscription: Subscription | undefined;
  produtos: any[] = [];

     ngOnInit(): void {
       this.subscription = this.productService.getProducts().subscribe({
         next: (data) => {
           this.produtos = data;
           console.log('Dados recebidos:', this.produtos);
         },
         error: (error) => {
           console.error('Erro ao receber dados:', error);
         },
         complete: () => {
           console.log('Requisição completada');
         }
       });
     }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

