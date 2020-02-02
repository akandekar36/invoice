import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';
// import {InvoiceComponent} from './invoice/invoice.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { Stu1Component } from './stu1/stu1.component';
import {StudentComponent} from './student/student.component';




@NgModule({
  declarations: [InvoiceComponent, LoginComponent, DashComponent, Stu1Component,StudentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BasicRoutingModule
  ],
  exports: [InvoiceComponent,LoginComponent,DashComponent,Stu1Component,StudentComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BasicModule { }
