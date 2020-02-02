import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormControlName } from '@angular/forms';
import { NgControl } from '@angular/forms';
import { ServiceService } from 'src/app/shared/service/service.service';
import { invoice } from 'src/app/shared/model/invoice';
import { branch } from 'src/app/shared/model/branch';
import { course } from 'src/app/shared/model/course';
import { student } from 'src/app/shared/model/student';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  ds: boolean = true;
  ds1: boolean = true;

  // fb = new FormBuilder();
  // invoiceObj2 = this.fb.group({});

  fb=new FormBuilder();
  invoiceObj2=this.fb.group({
    students: ['',Validators.required],
    invoicedate: ['',Validators.required],
    branchName:['',Validators.required],
    courseName:['',Validators.required],
    startDate:['',Validators.required],
    endDate:['',Validators.required],
    certifiacteIssue:[false,Validators.required],
    invoiceRest:['',Validators.required],
    invoiceRef1:['',Validators.required],
    invoiceRef2:['',Validators.required],
    amount:['',Validators.required],
    cgst:['',Validators.required],
    sgst:['',Validators.required],
    totalAmount:['',Validators.required],
    tds:['',Validators.required],
    netAmount:['',Validators.required]
   })

   invoiceObj3=this.fb.group({
    students: ['',[Validators.required]],
    invoicedate: ['',[Validators.required]],
    branchName:['',[Validators.required]],
    courseName:['',[Validators.required]],
    startDate:['',[Validators.required]],
    endDate:['',[Validators.required]],
    certifiacteIssue:[false,[Validators.required]],
    invoiceRest:['',[Validators.required]],
    invoiceRef1:['',[Validators.required]],
    invoiceRef2:['',[Validators.required]],
    amount:['',[Validators.required]],
    cgst:['',[Validators.required]],
    sgst:['',[Validators.required]],
    totalAmount:['',[Validators.required]],
    tds:['',[Validators.required]],
    netAmount:['',[Validators.required]]
   })



  invoice1: invoice[] = [];
  student1: student[] = [];
  branch1: branch[] = [];
  course1: course[] = [];
  //  dropdownList = [];
  //   selectedItems = [];
  //   dropdownSettings = {};


  constructor(private _service: ServiceService) { }

  ngOnInit() {
    this.fetchInvoice();
  }
  fetchInvoice() {
    // this._service.getInvoice().subscribe(res=>{
    //   this.invoice1=res.map((inv)=>{
    //     return ({...inv})
    //   });
    //   console.log(this.invoice1);
    // });

    this._service.getStudent().subscribe(stud => {
      this.student1 = stud.map((sd) => {
        return ({ ...sd })
      });
      console.log(this.student1);
    });

    this._service.getCourse().subscribe(cour => {
      this.course1 = cour.map((cor) => {
        return ({ ...cor })
      });
      console.log(this.course1);
    });

    this._service.getBranch().subscribe(bar => {
      this.branch1 = bar.map((br) => {
        return ({ ...br })
      });
      console.log(this.branch1);
    });

    // this.dropdownList = [
    //   {"id":1,"itemName":"India"},
    //   {"id":2,"itemName":"Singapore"},
    //   {"id":3,"itemName":"Australia"},
    //   {"id":4,"itemName":"Canada"},
    //   {"id":5,"itemName":"South Korea"},
    //   {"id":6,"itemName":"Germany"},
    //   {"id":7,"itemName":"France"},
    //   {"id":8,"itemName":"Russia"},
    //   {"id":9,"itemName":"Italy"},
    //   {"id":10,"itemName":"Sweden"}
    // ];
    // this.selectedItems = [
    //         {"id":2,"itemName":"Singapore"},
    //         {"id":3,"itemName":"Australia"},
    //         {"id":4,"itemName":"Canada"},
    //         {"id":5,"itemName":"South Korea"}
    //     ];
    // this.dropdownSettings = { 
    //           singleSelection: false, 
    //           text:"Select Countries",
    //           selectAllText:'Select All',
    //           unSelectAllText:'UnSelect All',
    //           enableSearchFilter: true,
    //           classes:"myclass custom-class"
    //         };            





  }
  insert() {
    console.log("ready to invoice");
  }
  done() {
    console.log("done work");
  }
  //  onItemSelect(item: any) {
  //   console.log(item);
  //   console.log(this.selectedItems);
  // }
  // OnItemDeSelect(item: any) {
  //   console.log(item);
  //   console.log(this.selectedItems);
  // }
  // onSelectAll(items: any) {
  //   console.log(items);
  // }
  // onDeSelectAll(items: any) {
  //   console.log(items);
  // }
  register() {
    console.log(this.invoiceObj2.value);
    let std=this.invoiceObj2.controls['students'].value;
    this.invoiceObj2.patchValue({
      students: std.join(',')
    })
    this.invoiceObj3=this.invoiceObj2;

    console.log(this.invoiceObj3.value);

    this._service.postInvoice(this.invoiceObj3.value).subscribe(
      ()=>{
        alert("Added successfully");
        console.log(this.invoiceObj3.value);
        // this.invoiceObj.reset();
      }
    )

    this.invoiceObj2.reset();
  }
  calculate() {
    let cgst1: number = ((this.invoiceObj2.controls['amount'].value) * 9) / 100;
    this.invoiceObj2.controls['cgst'].setValue(cgst1);

    let sgst1: number = ((this.invoiceObj2.controls['amount'].value) * 9) / 100;
    this.invoiceObj2.controls['sgst'].setValue(sgst1);

    let tia1: number = this.invoiceObj2.controls['amount'].value + cgst1 + sgst1;
    this.invoiceObj2.controls['totalAmount'].setValue(tia1);

    let tds1: number = ((this.invoiceObj2.controls['amount'].value) * 10) / 100;
    this.invoiceObj2.controls['tds'].setValue(tds1);

    let net1: number = tia1 - tds1;
    this.invoiceObj2.controls['netAmount'].setValue(net1);

    console.log(net1);
  }
  select() {
    // console.log("Akshay");
    // console.log(this.invoiceObj.controls['in_rest'].value);
    let rest: string = this.invoiceObj2.controls['invoiceRest'].value;
    if (rest == "two") {
      // this.invoiceObj2.controls['invoice_previous'].setValue(1);
      this.ds = false;
    } else {
      if (rest == "three") {
        // this.invoiceObj2.controls['invoice_previous'].setValue(2);
        this.ds = false;
        this.ds1 = false;
      }
      else {
        if (rest == "one") {
          // this.invoiceObj2.controls['invoice_previous'].setValue(0); 
          this.ds = true;
          this.ds1 = true;
        }
        else {
          // this.invoiceObj.controls['invoice_previous'].setValue(0); 
          this.ds = true;
          this.ds1 = true;
        }
      }
    }
    console.log(rest);
  }

}

