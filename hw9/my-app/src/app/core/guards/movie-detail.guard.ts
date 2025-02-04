import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { inject } from '@angular/core';

export const movieDetailGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authService = inject(AuthService);

  let plan: string = authService.registrationData.plan;

  if (authService.username != null && (plan == "ADMIN" || plan == "SUPER")) {
    return true;
  }
  router.navigate(['/signup/register-plan']);
  return false;

};
