import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import {LoginComponent} from './login/login.component';
import {DashComponent} from './dash/dash.component';
import {Stu1Component} from './stu1/stu1.component';
import {StudentComponent} from './student/student.component';
import {GuardGuard} from '../shared/auth/auth.guard';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'invoice',
    component:InvoiceComponent,
    canActivate:[GuardGuard]
  },
  {
    path:'dash',
    component:DashComponent,
    canActivate:[GuardGuard]
  },
  {
    path:'stu1',
    component:Stu1Component,
    canActivate:[GuardGuard]
  },
  {
    path:'student',
    component:StudentComponent,
    canActivate:[GuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
