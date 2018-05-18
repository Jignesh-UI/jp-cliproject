import { Component, OnInit, Input, Output } from '@angular/core';
import { PermissionService } from 'app/userControls/permission.service';

@Component({
  selector: 'app-view-reservation',
  templateUrl: './view-reservation.component.html',
  styleUrls: ['./view-reservation.component.css']
})
export class ViewReservationComponent implements OnInit {

  pagePermission = ['admin', 'view', 'home', 'search', 'full', 'reservation', 'setup',
    'createReservation', 'viewReservation'];

  constructor(private resetPermission: PermissionService) { }


  ngOnInit() {
    this.resetPermission.resetPermissions(this.pagePermission);
  }

}
