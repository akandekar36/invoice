import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BasicModule } from './basic/basic.module';
// import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
// import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // NgMultiSelectDropDownModule,
    // AngularMultiSelectModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
