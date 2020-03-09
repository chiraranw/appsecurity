import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor(private auth: AuthService, private route: Router) { }
  canActivate(): boolean {
    //If the person is not authenticated, send then to login page.
    if (!this.auth.isAuthenticated()) {
      this.route.navigate(['/login']);
    }
    return true;
  }
}
