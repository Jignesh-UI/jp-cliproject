import { Injectable } from '@angular/core';
import { BaseClassService } from 'app/userControls/base-class.service';
import { Http, Response } from '@angular/http';

@Injectable()
export class ApiListService extends BaseClassService {
  constructor(http: Http) {
    super('http://172.25.52.107/MotorPoolWebApi/', http);
  }
}
