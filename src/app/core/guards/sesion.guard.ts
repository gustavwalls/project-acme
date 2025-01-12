import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sesionGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);

  try {
    const token = cookieService.get('token');
    const role = cookieService.get('role');

    if (!token || !role) {
      router.navigate(['/auth']);
      return false;
    }

    const url = state.url;

    if (role === 'operario' && url.includes('/reports')) {
      router.navigate(['/products']);
      return false;
    }

    if (role === 'supervisor' && url.includes('/products')) {
      router.navigate(['/reports']);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error 🔴🔴🔴🔴', error);
    router.navigate(['/auth']);
    return false;
  }
};
