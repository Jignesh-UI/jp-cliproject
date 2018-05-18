import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login-service.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  isLoading;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {}

  signIn(loginobject) {
    this.isLoading = true;
    this.loginService.login(loginobject).subscribe(
      result => {
        if (result) {
          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/setup/']);
        } else {
          this.invalidLogin = true;
        }
        this.isLoading = false;
      },
      (error) => {
        this.invalidLogin = true;
        this.isLoading = false;
      }
    );
  }
}
