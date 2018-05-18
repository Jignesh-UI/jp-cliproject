import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpModule, Http, RequestOptions, Response } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder, CheckboxControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { NgxPaginationModule, PaginationControlsDirective } from 'ngx-pagination';
import { LoadingSpinnerComponent } from 'app/common/ui/loading-spinner/loading-spinner.component';
import { ApiListService } from 'app/userControls/api-list.service';
import { AppError } from 'app/commonErrors/app-error';
import { BadInput } from 'app/commonErrors/bad-input';
import { PermissionService } from 'app/userControls/permission.service';
import { BsDatepickerModule } from 'ngx-bootstrap';

@Component({
  moduleId: module.id,
  templateUrl: 'asset-status.component.html',
  styleUrls: ['asset-status.component.css']
})

export class AssetStatusComponent implements OnInit {

  @Output() pageChange: EventEmitter<number>;

  isLoading = false;
  assetStatusData = [];
  error;
  pageSize: number;
  assetStatusID;
  assetStatus = '';
  assetStatusFilter;
  assetStatusDesc;
  modalPopUpTitle = 'Asset Status';
  availableforReservation = false;
  selectedRow: number;
  assetStatusBtnControls = true;
  apiURL = 'v1/AssetStatus/';
  pagePermission = ['admin', 'view', 'full', 'home', 'reservation', 'setup', 'add', 'jignesh'];
  public constructor(private http: Http, private apiService: ApiListService, private resetPermission: PermissionService ) {}

  public ngOnInit(): void {
    this.pageSize = 10;
    this.loadData();
    this.resetPermission.resetPermissions(this.pagePermission);
  }

  loadData(): any {
    this.isLoading = true;
    this.apiService.getData(this.apiURL + 'GetStatus').subscribe(
      resAssetData => (this.assetStatusData = resAssetData, this.isLoading = false),
      (error: AppError) => {this.isLoading = false; if (error instanceof BadInput) { } else { throw error;  } }
    );

  }

  onEdit(obj): any {
    this.assetStatusID = obj.assetStatusID;
    this.modalPopUpTitle = 'Modify Asset Status';
    this.assetStatus = obj.assetsStatus;
    this.assetStatusDesc = obj.assetStatusDescription;
    this.assetStatusBtnControls = false;
  }

  onDelete(obj): any {
    this.isLoading = true;
    this.apiService.deleteRecord( this.apiURL + 'Delete?AssetStatusID=', obj.assetStatusID).subscribe(
        () => (this.loadData(), this.isLoading = false)
      );
  }

  addData(): any {
    this.modalPopUpTitle = 'Add Asset Status';
    this.assetStatusBtnControls = true;
    this.resetForm();
  }

  resetForm(): any {
    this.assetStatus = '';
    this.assetStatusDesc = '';
    this.availableforReservation = false;
  }

  onSubmit(): any {
    if (this.assetStatus.length < 1) {
      return false;
    }
    let availableforReservationValue = 0;
    if (this.availableforReservation) {
      availableforReservationValue = 1;
    } else {
      availableforReservationValue = 0;
    }
    const objData = {
      assetsStatus: this.assetStatus,
      assetStatusDescription: this.assetStatusDesc,
      isObsolete: true,
      isAvailableForReservation: availableforReservationValue
    };
    this.isLoading = true;
    this.apiService.addNewData( this.apiURL + 'Add', objData).subscribe(
      () => (this.loadData(), this.isLoading = false),
      (error: AppError) => { this.isLoading = false; if (error instanceof BadInput) { } else { throw error; } },
      () => this.resetForm()
    );
  }

  onSubmitUpdate(): void {
    let availableforReservationValue = 0;
    if (this.availableforReservation) {
      availableforReservationValue = 1;
    } else {
      availableforReservationValue = 0;
    }
    const objData = {
      assetStatusID: this.assetStatusID,
      assetsStatus: this.assetStatus,
      assetStatusDescription: this.assetStatusDesc,
      isAvailableForReservation: availableforReservationValue,
      isObsolete: true
    };

    this.isLoading = true;
    this.apiService.updateData( this.apiURL + 'UpdateData', objData)
      .subscribe(
        () => (this.loadData(), this.isLoading = false),
        (error: AppError) => {this.isLoading = false; if (error instanceof BadInput) { } else { throw error; } },
        () => this.resetForm()
      );
  }

  setClickedRow(index) {
    this.selectedRow = index;
  }

}
