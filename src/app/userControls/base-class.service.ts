import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NotFoundError } from 'app/commonErrors/not-found-error';
import { BadInput } from 'app/commonErrors/bad-input';
import { AppError } from 'app/commonErrors/app-error';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class BaseClassService {
  headers: Headers;
  options: RequestOptions;

  constructor(private url: string, private http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: 'Basic c29oaWxwYW5jaG9saTpzb2hpbHBhbmNob2xp',
      Accept: 'q=0.8;application/json;q=0.9'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getData(APIurl) {
    const headers = new Headers();
    return this.http
      .get(this.url + APIurl, this.options)
      .map(response => response.json())
      .catch(this.handleError);
  }

  getDataWithParams(APIurl, resource: any) {
    const headers = new Headers();
    return this.http
      .post(this.url + APIurl, JSON.stringify(resource), this.options)
      .map(response => response.json())
      .catch(this.handleError);
  }

  addNewData(APIurl, resource: any) {
    const headers = new Headers();
    return this.http
      .post(this.url + APIurl, JSON.stringify(resource), this.options)
      .map(response => response.json())
      .catch(this.handleError);
  }

  updateData(APIurl, objData) {
    const headers = new Headers();
    return this.http
      .put(this.url + APIurl, JSON.stringify(objData), this.options)
      .map(() => {})
      .catch(this.handleError);
  }

  deleteRecord(APIurl, objData) {
    const headers = new Headers();
    return this.http
      .delete(this.url + APIurl + objData, this.options)
      .map(() => {})
      .catch(this.handleError);
  }

  collectPermission(APIurl) {
    const headers = new Headers();
    return this.http
      .get(this.url + APIurl, this.options)
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 100) {
      return Observable.throw(new BadInput(error.json()));
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError(error.json()));
    }
    return Observable.throw(new AppError(error.json()));
  }
}
