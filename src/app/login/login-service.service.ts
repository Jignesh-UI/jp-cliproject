import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable()
export class LoginService {
  currentUser: any;
  isLoading;
  jwt = new JwtHelper();
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private http: Http, private router: Router, private permissionsService: NgxPermissionsService) {
    const token = localStorage.getItem('token');
    if (token) {
      this.currentUser = this.jwt.decodeToken(token);
    }
  }
  login(loginobject) {
    const url = 'http://172.25.52.107/MotorPoolWebApi/api/login/login';
    const headers = new Headers({
      'Content-Type': 'application/json; charset=utf-8'
    });
    this.isLoading = true;
    return this.http.post(url, JSON.stringify(loginobject), { headers: headers })
      .map(response => {
        const result = JSON.parse(response.json());
        if (result && result.token) {
          const perm = ['admin', 'view', 'full', 'home', 'reservation',  'setup', 'add'];
          this.permissionsService.loadPermissions(perm);
          localStorage.setItem('token', result.token);
          this.getLoggedInName.emit(this.jwt.decodeToken(result.token).unique_name);
          this.isLoading = false;
          return true;
        } else {
          this.isLoading = false;
          return false;
        }
      });
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.currentUser = null;
    this.permissionsService.flushPermissions();
  }
  isLoggedIn() {
    return tokenNotExpired('token');
  }
  get loggedInUser() {
    const token = localStorage.getItem('token');
    this.getLoggedInName.emit(this.jwt.decodeToken(token).unique_name);
    if (!token) {
      return null;
    }
    return new JwtHelper().decodeToken(token);
  }
}
