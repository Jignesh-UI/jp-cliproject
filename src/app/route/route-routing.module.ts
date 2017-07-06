import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../domains/home/home.component';
import { ReservationComponent } from '../domains/reservation/reservation.component';
import { CalendarComponent } from '../domains/calendar/calendar.component';
import { AccountingComponent } from '../domains/accounting/accounting.component';
import { SetupComponent } from '../domains/setup/setup.component';
import { ReportsComponent } from '../domains/reports/reports.component';
import { LoginComponent } from 'app/login/login.component';
import { AuthGuard } from 'app/login/authguard.guard';

export const router: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'reservation', component: ReservationComponent, canActivate: [AuthGuard] },
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
  { path: 'accounting', component: AccountingComponent, canActivate: [AuthGuard] },
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
