import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../services/product';
import { Produto } from '../../interfaces/products.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetail implements OnInit {

  productId: string | null = null;
  product: Produto | undefined;
  productService = inject(Product);

  constructor(private route: ActivatedRoute){};


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productId = id;

    if(id){
      this.productService.getProductById(+id).subscribe(data =>{
        this.product = data;
      })
    }
  }

  handleAddToCart(){
    if(this.product){
      // this.cartService.addItem(this.product)
      console.log('Produto adicionado!', this.product.title);
    }
  }

}
