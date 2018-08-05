import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';
import { employeeType } from '../employees/employees.type';

@Component({
  selector: 'app-employees-action',
  templateUrl: './employees-action.component.html',
  styleUrls: ['./employees-action.component.css']
})
export class EmployeesActionComponent implements OnInit {
  public message: object = {};
  public create: boolean = false;
  public titl: string = " create an employee";
  designations = [
    { id: 1, name: "software engineer" },
    { id: 2, name: "software developer" },
    { id: 3, name: "databae engineer" },
    { id: 4, name: "software architecture" },
    { id: 5, name: "software designer" }
  ];
  constructor(private _employeesSrvc: EmployeesService, private _router: Router) {

  }
  ngOnInit() {
  }
  submitCompany(employee) {
    //let ss = JSON.stringify(employee);    
    //console.log(ss);
    this._employeesSrvc.saveEmployees(employee)
      .subscribe((resp) => {
        this.message = resp;
        this.create = true
      }, (error) => {
        console.log(error);
      })
  }
  goBack() {
    this._router.navigate(['list']);
  }


}

