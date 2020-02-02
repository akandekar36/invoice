import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicModule} from './basic/basic.module';
import {GuardGuard} from './shared/auth/auth.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren:'./basic/basic.module#BasicModule',
    // canActivate:[GuardGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
