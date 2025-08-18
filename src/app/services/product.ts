import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../interfaces/products.interface'

@Injectable({
  providedIn: 'root'
})
export class Product {

  private http = inject(HttpClient)
  private apiUrl = 'https://fakestoreapi.com/products'

  // Todos os produtos
  getProducts(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.apiUrl)
  }

  // Por ID
  getProductById(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`)
  }

}
