import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: `
  <div class="loadingContainer" *ngIf="loading" style=""></div>
  <div class="spinner" *ngIf="loading">
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
  </div>

  `,
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {
  @Input() loading: boolean;
  constructor() {}
  ngOnInit() {}
}
