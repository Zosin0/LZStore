import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes & Pages
import { Header } from './components/header/header';
import { ProductCard } from './components/product-card/product-card';

import { ProductsList } from './pages/products-list/products-list';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
  {path: '', component: Home },
  {path: 'products', component: ProductsList, canActivate: [authGuard] },
  {path: 'product/:id', component: ProductDetail, canActivate: [authGuard]},
  {path: 'login', component: Login }

];
