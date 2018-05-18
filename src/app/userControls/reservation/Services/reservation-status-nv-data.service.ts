import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

interface ReservationStatusInterface
{
  reservationStatusID: number;
  reservationStatus: string;
}

@Injectable()
export class ReservationStatusNvDataService {
  reservationStatusAPIPath = 'http://172.25.52.97/MotorPoolWebApi/v1/ReservationStatusNV/';
  headerFile = this.reservationStatusAPIPath + 'GetReservationStatus';
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Basic c29oaWxwYW5jaG9saTpzb2hpbHBhbmNob2xp',
      'Accept': 'q=0.8;application/json;q=0.9'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }
  
  getData(): Observable<ReservationStatusInterface[]> {
    const headers = new Headers();
    return this.http.get(this.headerFile, this.options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      (error.status ? `${error.status} - ${error.statusText}` : 'Server error');
    console.log(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
