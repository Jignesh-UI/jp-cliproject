import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { AccordionModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { SetupRoutingModule, setupRoutedComponent } from './setup-routing.module';
import { NavigationComponent } from '../../userControls/setup/navigation/navigation.component';
import { SetupComponent } from './setup.component';
import { AssetStatusComponent } from './assets/asset-status/asset-status.component';
import { LocationComponent } from './location/location/location.component';
import { GlobalFieldsComponent } from './global-fields/global-fields/global-fields.component';
import { GlobalSettingsComponent } from './global-settings/global-settings/global-settings.component';
import { RentalClassComponent } from './assets/rental-class/rental-class.component';
import { ManageAssetsComponent } from './assets/manage-assets/manage-assets.component';
import { TransferAssetsComponent } from './assets/transfer-assets/transfer-assets.component';
import { ManageAssetAvailabilityComponent } from './assets/manage-asset-availability/manage-asset-availability.component';
import { RentalHoursComponent } from './location/rental-hours/rental-hours.component';
import { RentalPriceComponent } from './location/rental-price/rental-price.component';
import { AapaComponent } from './location/aapa/aapa.component';
import { OtherSettingsComponent } from './location/other-settings/other-settings.component';
import { TaxChargeComponent } from './global-fields/tax-charge/tax-charge.component';
import { OtherChargeComponent } from './global-fields/other-charge/other-charge.component';
import { ReasonComponent } from './global-fields/reason/reason.component';
import { LicenseComponent } from './global-fields/license/license.component';
import { AssetsDataService } from '../../userControls/setup/services/assets-data.service';
import { ModalPopupComponent } from './assets/asset-status/modal-popup/modal-popup.component';
import { AssetsFilterPipe } from './assets/asset-status/assets-filter.pipe';
import { LoadingSpinnerComponent } from 'app/common/ui/loading-spinner/loading-spinner.component';

@NgModule({
  imports: [
    CommonModule, BrowserModule, FormsModule, ReactiveFormsModule, SetupRoutingModule, NgxPaginationModule,
    AccordionModule.forRoot(), ModalModule.forRoot()
  ],
  declarations: [
    SetupComponent,
    setupRoutedComponent,
    NavigationComponent,
    AssetStatusComponent,
    LocationComponent,
    GlobalFieldsComponent,
    GlobalSettingsComponent,
    RentalClassComponent,
    ManageAssetsComponent,
    TransferAssetsComponent,
    ManageAssetAvailabilityComponent,
    RentalHoursComponent,
    RentalPriceComponent,
    AapaComponent,
    OtherSettingsComponent,
    TaxChargeComponent,
    OtherChargeComponent,
    ReasonComponent,
    LicenseComponent,
    ModalPopupComponent,
    AssetsFilterPipe,
    LoadingSpinnerComponent
  ],
  providers: [AssetsDataService],
  exports: []
})
export class SetupModule { }
