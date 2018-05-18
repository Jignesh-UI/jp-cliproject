import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from './../../login/login-service.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  @Input() title;
  @Input() pageTitle;
  userName: string;
  checkUserLoggedIn = false;

  constructor(private loginService: LoginService) {
      loginService.getLoggedInName.subscribe(name => this.changeName(name));
  }
  private changeName(name: string): void {
    this.userName = name;
    if (this.userName) {
      this.checkUserLoggedIn = true;
    } else {
      this.checkUserLoggedIn = false;
    }
  }
  ngOnInit() {  }
  logout() {
    this.checkUserLoggedIn = false;
    this.loginService.logout();
  }
}
