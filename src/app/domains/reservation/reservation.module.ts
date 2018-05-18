import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccordionModule, ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReservationComponent } from './reservation.component';

import { ActionRequiredComponent } from './action-required/action-required.component';
import { BatchReservationComponent } from './batch-reservation/batch-reservation.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { QuickDispatchComponent } from './quick-dispatch/quick-dispatch.component';
import { ViewReservationComponent } from './view-reservation/view-reservation.component';
import { ReservationRoutingModule, reservationRoutedComponent } from './reservation-routing.module';
import { ReservationNavigationComponent } from 'app/userControls/reservation/reservation-navigation/reservation-navigation.component';
import { SharedModuleModule } from 'app/shared-module/shared-module.module';
import { UserNvDataService } from '../../userControls/reservation/services/user-nv-data.service';
import { UserLocationNvDataService } from '../../userControls/reservation/services/user-location-nv-data.service';
import { RentalClassDataService } from '../../userControls/reservation/services/rental-class-data.service';
import { ReservationStatusNvDataService } from '../../userControls/reservation/services/reservation-status-nv-data.service';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';


@NgModule({
  imports: [
    CommonModule, ReservationRoutingModule,
    BrowserModule, FormsModule, ReactiveFormsModule, NgxPaginationModule,
    AccordionModule.forRoot(), ModalModule.forRoot(),
    SharedModuleModule,
    MultiselectDropdownModule
  ],
  declarations: [
    reservationRoutedComponent,
    ActionRequiredComponent,
    BatchReservationComponent,
    CreateReservationComponent,
    QuickDispatchComponent,
    ViewReservationComponent,
    ReservationNavigationComponent
  ],
   providers: [
      UserNvDataService, 
      UserLocationNvDataService,
      RentalClassDataService,
      ReservationStatusNvDataService
  ]
})
export class ReservationModule { }
