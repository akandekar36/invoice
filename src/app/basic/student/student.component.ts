import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormControlName } from '@angular/forms';
import { ServiceService } from 'src/app/shared/service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { student } from 'src/app/shared/model/student';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  fb = new FormBuilder();
  stuObj = this.fb.group({
    id: ['', [Validators.required]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    contact: ['', [Validators.required]],
    branch: ['', [Validators.required]]
  })
  student1: student[] = [];
  iden: number;

  constructor(private _service: ServiceService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.fetchstu();
  }
  fetchstu() {
    this._service.getStudent().subscribe(res => {
      this.student1 = res.map((st) => {
        return ({ ...st })

      });
      console.log(this.student1);
    });
  }
  insert() {
    // alert("Done");
    console.log(this.stuObj.value);
    this._service.postStudent(this.stuObj.value).subscribe(() => {
      alert("Student Added Successfully");
    })
    this.stuObj.reset();
  }

  delete(sid: student) {
    if (confirm("Are you sure want to delete " + sid.name + "?")) {
      this._service.deleteStudent(sid.id).toPromise().then(
        () => {
          this.fetchstu();
        }
      )
    }
  }

  editstu(ide: number) {
    this._route.paramMap.subscribe(params => this.iden = ide);
    this._service.getSingleStudent(this.iden).subscribe(
      res => {
        this.stuObj.setValue({
          ...res
        })
      }
    )
  }


}
