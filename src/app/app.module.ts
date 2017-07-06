import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Headers, Response } from '@angular/http';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './common/site-header/site-header.component';
import { SiteFooterComponent } from './common/site-footer/site-footer.component';
import { TopNavComponent } from './common/top-nav/top-nav.component';

import { routes } from './route/route-routing.module';

import { LoginModule } from './login/login.module';
import { HomeModule } from './domains/home/home.module';
import { CalendarModule } from './domains/calendar/calendar.module';
import { AccountingModule } from './domains/accounting/accounting.module';
import { SetupModule } from './domains/setup/setup.module';
import { ReportsModule } from './domains/reports/reports.module';
import { ReservationModule } from './domains/reservation/reservation.module';
import { LoginService } from 'app/login/login-service.service';
import { AuthGuard } from 'app/login/authguard.guard';

@NgModule({
  declarations: [
    AppComponent, SiteHeaderComponent, TopNavComponent, SiteFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    LoginModule,
    HomeModule,
    ReservationModule,
    SetupModule,
    CalendarModule,
    AccountingModule,
    ReportsModule
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
