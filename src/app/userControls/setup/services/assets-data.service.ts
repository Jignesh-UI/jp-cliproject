import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AssetsDataService {

  // http://172.25.52.107/MotorPoolWebApi/v1/AssetStatus/GetStatus   https://jsonplaceholder.typicode.com/posts/
  // ../../../../assets/localDB/assetStatus.json

  headerFile = '../../../../assets/localDB/assetStatus.json';
  headerFile2 = 'http://172.25.52.107/MotorPoolWebApi/v1/AssetStatus/GetStatus';
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  }

  getData(): Observable<string[]> {

    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get('http://172.25.52.107/MotorPoolWebApi/v1/AssetStatus/GetStatus', {
      headers: headers
    })
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  deleteData(deleteObjId): Observable<string[]> {

    console.log(this.headerFile);

    return this.http.delete(this.headerFile + '/?assetStatusID' + '=' + deleteObjId, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }


  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      (error.status ? `${error.status} - ${error.statusText}` : 'Server error');
    console.log(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
