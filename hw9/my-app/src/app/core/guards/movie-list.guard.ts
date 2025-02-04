import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class movieListGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.authService.username == null) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
