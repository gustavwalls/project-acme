import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { sesionGuard } from './core/guards/sesion.guard';

export const routes: Routes = [
    {
        path:'auth',
        loadChildren: ()=>import('./modules/auth/auth.routes').then(m => m.authRoutes)
    },
    {
        path:'',
        component:HomePageComponent,
        loadChildren: () => import(`./modules/home/home.routes`).then(m => m.homeRoutes),
        canActivate: [sesionGuard]
    },
    {
        path: '**',
        redirectTo: '/auth/login'
      }
];
