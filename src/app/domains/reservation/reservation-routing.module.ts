import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationComponent } from './reservation.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { ViewReservationComponent } from './view-reservation/view-reservation.component';
import { BatchReservationComponent } from './batch-reservation/batch-reservation.component';
import { QuickDispatchComponent } from './quick-dispatch/quick-dispatch.component';
import { ActionRequiredComponent } from './action-required/action-required.component';
import { AuthGuard } from 'app/login/auth.guard';
import { RoleGuard } from 'app/login/role-guard.service';

const reservationroutes: Routes = [
  {
    path: 'reservation', component: ReservationComponent, canActivate: [AuthGuard, RoleGuard], children: [
      { path: 'r_createReservation', component: CreateReservationComponent },
      { path: 'r_viewReservation', component: ViewReservationComponent },
      { path: 'r_batchReservation', component: BatchReservationComponent },
      { path: 'r_quickDispatch', component: QuickDispatchComponent },
      { path: 'r_actionRequired', component: ActionRequiredComponent },
      { path: '', redirectTo: 'r_createReservation', pathMatch: 'full' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(reservationroutes)],
  exports: [RouterModule]
})

export class ReservationRoutingModule { }

export const reservationRoutedComponent = [
  ReservationComponent
];
