import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';

export const productsRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
   
  },
  {
    path: 'create',
    component: CreateProductComponent
  },
  {
    path: 'edit/:id',
    component: CreateProductComponent
  }
];
