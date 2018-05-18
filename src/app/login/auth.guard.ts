import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from 'app/login/login-service.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(protected router: Router, protected loginService: LoginService) {}

  canActivate(route, state: RouterStateSnapshot) {
    if (this.loginService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
