import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Headers, Response, HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { CalendarComponent } from './domains/calendar/calendar.component';
import { AccountingComponent } from './domains/accounting/accounting.component';
import { ReportsComponent } from './domains/reports/reports.component';
import { SiteHeaderComponent } from './common/site-header/site-header.component';
import { SiteFooterComponent } from './common/site-footer/site-footer.component';
import { TopNavComponent } from './common/top-nav/top-nav.component';
import { routes } from './route/route-routing.module';
import { HomeComponent } from './domains/home/home.component';
import { LoginModule } from './login/login.module';
import { SetupModule } from './domains/setup/setup.module';
import { ReservationModule } from 'app/domains/reservation/reservation.module';
import { SharedModuleModule } from 'app/shared-module/shared-module.module';
import { RoleGuard } from './login/role-guard.service';
import { AuthGuard } from './login/auth.guard';
import { LoginService } from './login/login-service.service';
import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt';
import { AccessDeniedComponent } from './common/access-denied/access-denied.component';
import { NgxPermissionsModule } from 'ngx-permissions';

export function getAuthHttp(http) {
  return new AuthHttp( new AuthConfig({ tokenName: 'token' }), http );
}

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    TopNavComponent,
    SiteFooterComponent,
    CalendarComponent,
    AccountingComponent,
    ReportsComponent,
    HomeComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routes,
    LoginModule,
    SetupModule,
    ReservationModule,
    SharedModuleModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [ LoginService, AuthGuard, RoleGuard,
    { provide: AuthHttp, useFactory: getAuthHttp, deps: [Http] }
  ],
  bootstrap: [AppComponent],
  exports: [SharedModuleModule]
})
export class AppModule {}
