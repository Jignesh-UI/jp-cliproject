import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { BaseService } from './base.service'
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

interface UserLocationNVInterface {
  locationID: number;
  locationName: string;
  isObsolete: boolean;
}

@Injectable()
export class UserLocationNvDataService {
  userrLocationNVAPIPath = 'http://172.25.52.97/MotorPoolWebApi/v1/UserLocationNV/';
  // http://localhost/MotorPoolWebApi/v1/UserLocationNV/GetLocation?userID=2199
  headerFile = this.userrLocationNVAPIPath + 'GetLocation';
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    // super(http);
    this.headers = new Headers({
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: 'Basic c29oaWxwYW5jaG9saTpzb2hpbHBhbmNob2xp',
      Accept: 'q=0.8;application/json;q=0.9'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getData(userID?): Observable<UserLocationNVInterface[]> {
    let requestURL = this.headerFile;
    if (userID != null && userID !== undefined && userID !== '') {
      requestURL = this.headerFile + '?userID=' + userID;
    }
    const headers = new Headers();
    return this.http
      .get(requestURL, this.options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    const errMsg = error.message
      ? error.message
      : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
