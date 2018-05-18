import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../domains/home/home.component';
import { ReservationComponent } from '../domains/reservation/reservation.component';
import { CalendarComponent } from '../domains/calendar/calendar.component';
import { AccountingComponent } from '../domains/accounting/accounting.component';
import { SetupComponent } from '../domains/setup/setup.component';
import { ReportsComponent } from '../domains/reports/reports.component';
import { LoginComponent } from 'app/login/login.component';
import { AuthGuard } from '../login/auth.guard';
import { RoleGuard } from '../login/role-guard.service';
import { AccessDeniedComponent } from '../common/access-denied/access-denied.component';

export const router: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: 'reservation', component: ReservationComponent, canActivate: [AuthGuard, RoleGuard] },
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
  { path: 'accounting', component: AccountingComponent, canActivate: [AuthGuard] },
  // { path: 'setup', component: SetupComponent },
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
