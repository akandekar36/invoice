import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from 'src/app/shared/service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin = new FormGroup({
    user: new FormControl(''),
    pass: new FormControl('')
  })
  constructor(private _service: ServiceService, private _router: Router) { }
  ngOnInit() {
  }
  login() {
    let user = this.userLogin.controls['user'].value;
    let pass = this.userLogin.controls['pass'].value;
    this._service.getUserLogins().subscribe(res => {
      let data = res;
      console.log(data);
      let isLogin = data.some(d => d.uname == user && d.pass == pass)
      console.log(isLogin);
      if(isLogin){
        sessionStorage.setItem('user',user);
        this._router.navigate(['/dash']);
      }
    })
    this.userLogin.reset();
  }
}
