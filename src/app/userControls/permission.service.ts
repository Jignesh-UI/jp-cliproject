import { Injectable } from '@angular/core';
import { BaseClassService } from 'app/userControls/base-class.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NotFoundError } from 'app/commonErrors/not-found-error';
import { BadInput } from 'app/commonErrors/bad-input';
import { AppError } from 'app/commonErrors/app-error';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable()
export class PermissionService {

  constructor(private permissionsService: NgxPermissionsService) { }

  resetPermissions(newPermission) {
    this.permissionsService.flushPermissions();
    this.permissionsService.addPermission(newPermission);
  }

}
