
import { Routes } from '@angular/router';
import { sesionGuard } from '../../core/guards/sesion.guard';

export const homeRoutes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('../products/products.routes').then(m => m.productsRoutes),
    canActivate: [sesionGuard],
  },
  {
    path: 'reports',
    loadChildren: () => import('../reports/reports.routes').then(m => m.reportsRoutes),
    canActivate: [sesionGuard],
  },
  {
    path: '**',
    redirectTo: '/products'
  }
];
