import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccordionModule, ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReservationComponent } from './reservation.component';

import { ReservationRoutingModule, reservationRoutedComponent } from './reservation-routing.module';
import { ReservationNavigationComponent } from 'app/userControls/reservation/navigation/reservation-navigation.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { ViewReservationComponent } from './view-reservation/view-reservation.component';
import { BatchReservationComponent } from './batch-reservation/batch-reservation.component';
import { QuickDispatchComponent } from './quick-dispatch/quick-dispatch.component';
import { ActionRequiredComponent } from './action-required/action-required.component';

@NgModule({
  imports: [
    CommonModule, BrowserModule, FormsModule, ReactiveFormsModule, NgxPaginationModule,
    ReservationRoutingModule, AccordionModule.forRoot(), ModalModule.forRoot()
  ],
  declarations: [
    reservationRoutedComponent,
    ReservationComponent,
    ReservationNavigationComponent,
    CreateReservationComponent,
    ViewReservationComponent,
    BatchReservationComponent,
    QuickDispatchComponent,
    ActionRequiredComponent]
})
export class ReservationModule { }
