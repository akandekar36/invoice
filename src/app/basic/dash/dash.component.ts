import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/service/service.service';
import { invoice } from 'src/app/shared/model/invoice';
import { branch } from 'src/app/shared/model/branch';
import { course } from 'src/app/shared/model/course';
import { student } from 'src/app/shared/model/student';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor(private _service: ServiceService) { }
  invoice1: invoice[] = [];
  student1: student[] = [];
  branch1: branch[] = [];
  course1: course[] = [];

  ngOnInit() {
    this.fetchInvoice();
  }
  fetchInvoice() {
    this._service.getInvoice().subscribe(res => {
      this.invoice1 = res.map((inv) => {
        return ({ ...inv })
      });
      console.log(this.invoice1);
    });

    this._service.getBranch().subscribe(res => {
      this.branch1 = res.map((bar) => {
        return ({ ...bar })
      });
      console.log(this.branch1);

    });

    this._service.getCourse().subscribe(res => {
      this.course1 = res.map((cour) => {
        return ({ ...cour })
      });
      console.log(this.course1);
    });

    this._service.getStudent().subscribe(res=>{
      this.student1=res.map((stu)=>{
        return({...stu})
      });
      console.log(this.student1);
    });

    console.log(this.invoice1);



  }
  



}
