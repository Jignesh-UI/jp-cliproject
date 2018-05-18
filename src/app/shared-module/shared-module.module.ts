import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from 'app/common/popup/popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppErrorHandler } from 'app/commonErrors/app-error-handler';
import { ApiListService } from 'app/userControls/api-list.service';
import { LoadingSpinnerComponent } from 'app/common/ui/loading-spinner/loading-spinner.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { PermissionService } from 'app/userControls/permission.service';
import { DatePickerModule } from 'angular-io-datepicker';
import { OverlayModule } from 'angular-io-overlay';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule, OverlayModule,
    DatePickerModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxPaginationModule
  ],
  declarations: [PopupComponent, LoadingSpinnerComponent],
  exports: [
    PopupComponent,
    LoadingSpinnerComponent,
    OverlayModule,
    DatePickerModule,
    NgxPermissionsModule,
    BsDatepickerModule,
    ModalModule,
    AccordionModule,
    NgxPaginationModule
  ],
  providers: [
    PermissionService,
    ApiListService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class SharedModuleModule {}
