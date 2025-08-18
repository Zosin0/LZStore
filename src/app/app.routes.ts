import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes & Pages
import { Header } from './components/header/header';
import { ProductCard } from './components/product-card/product-card';

import { ProductsList } from './pages/products-list/products-list';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
  {path: 'home', component: ProductsList},
  {path: 'produtos', component: ProductsList},
  {path: 'product/:id', component: ProductDetail }

];
