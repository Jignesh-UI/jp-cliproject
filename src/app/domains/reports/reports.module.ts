import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccordionModule, ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';


import { ReportsComponent } from './reports.component';


@NgModule({
  imports: [
    CommonModule, BrowserModule, FormsModule, ReactiveFormsModule, NgxPaginationModule,
    AccordionModule.forRoot(), ModalModule.forRoot()
  ],
  declarations: [ReportsComponent]
})
export class ReportsModule { }
