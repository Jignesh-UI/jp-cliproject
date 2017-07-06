import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetupComponent } from './setup.component';

import { AssetStatusComponent } from './assets/asset-status/asset-status.component';
import { RentalClassComponent } from './assets/rental-class/rental-class.component';
import { ManageAssetsComponent } from './assets/manage-assets/manage-assets.component';
import { TransferAssetsComponent } from './assets/transfer-assets/transfer-assets.component';
import { ManageAssetAvailabilityComponent } from './assets/manage-asset-availability/manage-asset-availability.component';

import { LocationComponent } from './location/location/location.component';
import { RentalPriceComponent } from './location/rental-price/rental-price.component';
import { RentalHoursComponent } from './location/rental-hours/rental-hours.component';
import { OtherSettingsComponent } from './location/other-settings/other-settings.component';
import { AapaComponent } from './location/aapa/aapa.component';


import { TaxChargeComponent } from './global-fields/tax-charge/tax-charge.component';
import { OtherChargeComponent } from './global-fields/other-charge/other-charge.component';
import { ReasonComponent } from './global-fields/reason/reason.component';
import { LicenseComponent } from './global-fields/license/license.component';
import { GlobalSettingsComponent } from './global-settings/global-settings/global-settings.component';
import { AuthGuard } from 'app/login/authguard.guard';


const setuproutes: Routes = [
  {
    path: 'setup', component: SetupComponent, canActivate: [AuthGuard], children: [
      { path: 's_assetStatus', component: AssetStatusComponent },
      { path: 's_assetSDetail/:assetStatusID', component: AssetStatusComponent },
      { path: 's_rentalClass', component: RentalClassComponent },
      { path: 's_manageAssets', component: ManageAssetsComponent },
      { path: 's_transferAssets', component: TransferAssetsComponent },
      { path: 's_manageAssetAvailability', component: ManageAssetAvailabilityComponent },
      { path: 's_location', component: LocationComponent },
      { path: 's_l_rentalHours', component: RentalHoursComponent },
      { path: 's_l_rentalPrice', component: RentalPriceComponent },
      { path: 's_l_assetAPA', component: AapaComponent },
      { path: 's_l_otherSettings', component: OtherSettingsComponent },
      { path: 's_g_taxCharge', component: TaxChargeComponent },
      { path: 's_g_otherCharge', component: OtherChargeComponent },
      { path: 's_g_reason', component: ReasonComponent },
      { path: 's_g_license', component: LicenseComponent },
      { path: 's_globalSettings', component: GlobalSettingsComponent },
      { path: '', redirectTo: 's_assetStatus', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(setuproutes)],
  exports: [RouterModule]
})

export class SetupRoutingModule { }

export const setupRoutedComponent = [
  AssetStatusComponent,
  RentalClassComponent,
  ManageAssetsComponent,
  TransferAssetsComponent,
  ManageAssetAvailabilityComponent,
  LocationComponent,
  RentalPriceComponent,
  RentalHoursComponent,
  OtherSettingsComponent,
  AapaComponent,
  TaxChargeComponent,
  OtherChargeComponent,
  ReasonComponent,
  LicenseComponent,
  GlobalSettingsComponent
];
