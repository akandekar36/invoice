import { Component } from '@angular/core';
import {ServiceService} from './shared/service/service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Invoice';
  constructor(private _service:ServiceService,private router:Router){}
  logout(){
    if (confirm("Are you sure to logout ?")){
    this._service.logoutUser();
    this.router.navigate(['/']);
  }
  }
}
