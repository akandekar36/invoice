import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { branch } from '../model/branch';
import { course } from '../model/course';
import { student } from '../model/student';
import { invoice } from '../model/invoice';
import { Login } from '../model/Login';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseURL: string = "http://localhost:3000/invoice";
  studentURL: string = "http://localhost:3000/student";
  courseURL: string = "http://localhost:3000/course";
  branchURL: string = "http://localhost:3000/branch";
  loginURL: string = "http://localhost:3000/login";

  constructor(private _http: HttpClient) { }
  getInvoice() {
    return this._http.get<invoice[]>(this.baseURL);
  }
  getStudent() {
    return this._http.get<student[]>(this.studentURL);
  }
  getCourse() {
    return this._http.get<course[]>(this.courseURL);
  }
  getBranch() {
    return this._http.get<branch[]>(this.branchURL);
  }


  postInvoice(emp: invoice) {
    return this._http.post(this.baseURL, emp);
  }
  postStudent(std: student) {
    return this._http.post(this.studentURL, std);
  }
  postCourse(cor: course) {
    return this._http.post(this.courseURL, cor);
  }
  postBranch(bar: branch) {
    return this._http.post(this.branchURL, bar);
  }

  putinvoice(inv: invoice) {
    const apiURL = `${this.baseURL}/${inv.students}`;
    return this._http.put(apiURL, inv);
  }
  putStudent(stud: student) {
    const apiURL = `${this.studentURL}/${stud.id}`;
    return this._http.put(apiURL, stud);
  }
  putCourse(cor: course) {
    const apiURL = `${this.courseURL}/${cor.id}`;
    return this._http.put(apiURL, cor);
  }
  putBranch(bar: branch) {
    const apiURL = `${this.branchURL}/${bar.id}`;
    return this._http.put(apiURL, bar);
  }

  getSingleStudent(id:number){
    const apiURL = `${this.baseURL}/${id}`;
    return this._http.get<student>(apiURL);
  }
  getSingleCourse(id:number){
    const apiURL = `${this.baseURL}/${id}`;
    return this._http.get<course>(apiURL);
  }
  getSingleBranch(id:number){
    const apiURL = `${this.baseURL}/${id}`;
    return this._http.get<branch>(apiURL);
  }
  getSingleInvoice(id:string){
    const apiURL = `${this.baseURL}/${id}`;
    return this._http.get<invoice>(apiURL);
  }




  deleteInvoice(id: number) {
    const apiURL = `${this.baseURL}/${id}`;
    return this._http.delete(apiURL);
  }
  deleteStudent(id: number) {
    const apiURL = `${this.studentURL}/${id}`;
    return this._http.delete(apiURL);
  }
  deleteCourse(id: number) {
    const apiURL = `${this.courseURL}/${id}`;
    return this._http.delete(apiURL);
  }
  deletebranch(id: number) {
    const apiURL = `${this.branchURL}/${id}`;
    return this._http.delete(apiURL);
  }


  getUserLogins() {
    return this._http.get<Login[]>(this.loginURL);
  }
  logoutUser() {
    return sessionStorage.clear();
  }
}

