import { Component, OnInit } from '@angular/core';
import { PermissionService } from 'app/userControls/permission.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoading;
  pagePermission = ['admin', 'view', 'full', 'home', 'reservation', 'setup', 'add', 'jignesh'];

  constructor(private resetPermission: PermissionService) { }

  ngOnInit() {
    this.resetPermission.resetPermissions(this.pagePermission);
  }

}
