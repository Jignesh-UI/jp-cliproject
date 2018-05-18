import { Injectable } from '@angular/core';
import { LoginService } from './login-service.service';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) {}
  canActivate() {
    if (this.loginService.isLoggedIn && this.loginService.loggedInUser.role.split(';')[0] === 'admin') {
      return true;
    } else {
      this.router.navigate(['access-denied']);
      return false;
    }
  }
}
