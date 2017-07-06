import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login-service.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  passwprd;
  loginValidationSummary;
  constructor(private router: Router, private user: LoginService) { }

  ngOnInit() {
  }

  onSubmit(e) {
    e.preventDefault();
    this.username = e.target.elements[0].value;
    this.passwprd = e.target.elements[1].value;
    if (this.username === 'admin' && this.passwprd === 'admin') {
      this.user.setUserLoggedIn();
      this.router.navigate(['home']);
    } else {
      this.loginValidationSummary = 'Incorrect username or password. Enter valid credentials and try again.';
    }

  }

}
