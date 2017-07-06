import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpModule, Http, RequestOptions, Response } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AssetsDataService } from '../../../../userControls/setup/services/assets-data.service';
import { NgxPaginationModule, PaginationControlsDirective } from 'ngx-pagination';
import { LoadingSpinnerComponent } from 'app/common/ui/loading-spinner/loading-spinner.component';


@Component({
  moduleId: module.id,
  templateUrl: 'asset-status.component.html',
  styleUrls: ['asset-status.component.css'],
  providers: [LoadingSpinnerComponent]
})

export class AssetStatusComponent implements OnInit {

  @Input() id: string;
  @Input() maxSize: number;
  @Output() pageChange: EventEmitter<number>;
  showSpinner = true;
  form: FormGroup;

  assetStatusData = [];
  error;
  pageSize: number;
  assetStatus;
  assetStatusFilter;
  assetStatusDesc;
  modalPopUpTitle = 'Asset Status';
  public constructor(private _assetDataService: AssetsDataService, private http: Http) { }

  public ngOnInit(): void {
    this.pageSize = 5;
    this._assetDataService.getData().subscribe(resAssetData => this.assetStatusData = resAssetData,
      (error) => this.error = error);
    this._assetDataService.getData().subscribe(() => this.showSpinner = false);
  }
  onEdit(obj): any {
    this.modalPopUpTitle = 'Modify Asset Status';
    this.assetStatus = obj.assetsStatus;
    this.assetStatusDesc = obj.assetStatusDescription;
  }
  addData(): any {
    this.modalPopUpTitle = 'Add Asset Status';
    this.assetStatus = '';
    this.assetStatusDesc = '';
  }

  onSubmit(): any {

  }

  deleteUser(deleteObjId): any {

    this._assetDataService.deleteData(deleteObjId)
      .subscribe(resAssetData => this.assetStatusData = resAssetData,
      (error) => this.error = error);


    // this._assetDataService.deleteData(deleteObjId).subscribe(
    //   response => {
    //     if (response) {
    //       alert(`The user could not be deleted, server Error.`);
    //     } else {
    //       this.assetStatusData = response;
    //     }
    //   },
    //   error => {
    //     console.log(this.assetStatusData);
    //     // console.log(response);
    //     alert(`The user could not be deleted, server Error.`);
    //   }
    // );

  }

}
