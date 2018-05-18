import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpModule, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder, CheckboxControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { UserNvDataService } from '../../../userControls/reservation/services/user-nv-data.service';
import { UserLocationNvDataService } from '../../../userControls/reservation/services/user-location-nv-data.service';
import { ReservationStatusNvDataService } from '../../../userControls/reservation/services/reservation-status-nv-data.service';
import { RentalClassDataService } from '../../../userControls/reservation/services/rental-class-data.service';
import { NgxPaginationModule, PaginationControlsDirective } from 'ngx-pagination';
import { LoadingSpinnerComponent } from 'app/common/ui/loading-spinner/loading-spinner.component';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { RentalClassInterface } from 'app/domains/reservation/view-reservation/rental-class-interface';
import { ApiListService } from 'app/userControls/api-list.service';
import { AppError } from 'app/commonErrors/app-error';
import { BadInput } from 'app/commonErrors/bad-input';
import { PermissionService } from 'app/userControls/permission.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent implements OnInit {
  userNVData = [];
  userID;
  pickupLocationID;
  reservationStatusID;
  pickupDatetime;
  returnDatetime;
  dispatchedDatetime;
  assetNumber;
  reservationNumber;
  noteSubject;
  isExactMatch;
  isIncludeClosed;
  userLocationNVData = [];
  reservationStatusNvData = [];
  rentalClassData: RentalClassInterface[];
  error;
  showSpinner = true;
  selectedRentalClass: number[];
  rentalClassOptions: IMultiSelectOption[];
  apiURL = 'v1/ReservationSearch/';
  reservationData = [];
  reservationSearchCriteria: IReservationSearchCriteria;

  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block', // form-control
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true
  };
  colorTheme = 'theme-default';

  bsConfig: Partial<BsDatepickerConfig>;


  pagePermission = ['admin', 'view', 'full', 'home', 'reservation', 'setup', 'add', 'jignesh',
    'createReservation', 'allowReservationSubNavigation'];

  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];

  public constructor(
    private _userNVDataService: UserNvDataService,
    private _userLocationNvDataService: UserLocationNvDataService,
    private _reservationStatusNvDataService: ReservationStatusNvDataService,
    private _rentalClassDataService: RentalClassDataService,
    private apiService: ApiListService,
    private http: Http,
    private resetPermission: PermissionService
  ) {}

  ngOnInit(): void {
    this.resetPermission.resetPermissions(this.pagePermission);
    this.loadData();
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
  }

  loadData(): any {
    this._userNVDataService.getData().subscribe(user => {
      this._userLocationNvDataService.getData().subscribe(location => {
        this._reservationStatusNvDataService
          .getData()
          .subscribe(reservationStatus => {
            this._rentalClassDataService.getData().subscribe(rentalClass => {
              this.rentalClassData = rentalClass;
              this.reservationStatusNvData = reservationStatus;
              this.userLocationNVData = location;
              this.userNVData = user;
              this.convertRentClassOptions();
            });
          });
      });
    });
  }

  onChange() {
    console.log(this.selectedRentalClass);
  }

  convertRentClassOptions() {
    this.rentalClassOptions = [];
    this.rentalClassData.forEach(rentClass => {
      this.rentalClassOptions.push({
        id: rentClass.classID,
        name: rentClass.class
      });
    });
  }

  onChangeUserName(userId) {
    this.userID = userId;
    this._userLocationNvDataService.getData(userId).subscribe(location => {
      this._rentalClassDataService.getData(null).subscribe(rentalClass => {
        this.rentalClassData = rentalClass;
        this.userLocationNVData = location;
        this.convertRentClassOptions();
      });
    });
  }

  onChangeLocation(locationId) {
    this.pickupLocationID = locationId;
    this._rentalClassDataService.getData(locationId).subscribe(rentalClass => {
      this.rentalClassData = rentalClass;
      this.convertRentClassOptions();
    });
  }

  onChangeReservationStatus(reservationStatusID) {
    this.reservationStatusID = reservationStatusID;
  }

  onSearch() {
    const searchModel = {
      UserID: this.userID,
      PickupLocationID: this.pickupLocationID,
      ReservationStatusID: this.reservationStatusID,
      ClassIDs: this.selectedRentalClass.toString(),
      PickupDatetime: this.pickupDatetime,
      ReturnDatetime: this.returnDatetime,
      DispatchedDatetime: this.dispatchedDatetime,
      AssetNumber: this.assetNumber,
      ReservationNumber: this.reservationNumber,
      NoteSubject: this.noteSubject,
      IsExactMatch: this.isExactMatch,
      IsIncludeClosed: this.isIncludeClosed
    };

    this.apiService
      .getDataWithParams(this.apiURL + 'GetReservation', searchModel)
      .subscribe(
        data => (this.reservationData = data),
        (error: AppError) => {
          if (error instanceof BadInput) {
          } else {
            throw error;
          }
        }
      );
    this.showSpinner = false;
  }
}
interface IReservationSearchCriteria {
  userID: number;
  name: string;
}
