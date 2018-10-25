import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { employeeType } from '../../interface/employees.type';
@Component({
  //selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  employeesList: employeeType[] = [];
  public editId = {};
  public deleteMessage: boolean = false;
  public message: object = {};
  constructor(private _employeesSrvc: EmployeesService) {
  }
  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    this._employeesSrvc.getEmployees()
      .subscribe((resp) => {
        console.log(resp)
        this.employeesList = resp
      }, (error) => {
        console.log(error)
      }, () => {

      })
  }
  delete(employees) {
    if (confirm("Are you sure want to delete " + employees.Name)) {
      let id = employees.id;
      return this._employeesSrvc.deleteEmployees(id)
        .subscribe((resp) => {
          console.log(resp);
          this.deleteMessage = true;
          this.message = resp;
          this.getEmployees();
        }, (error) => {
          console.log(error);
        }, () => {

        })
    }
  }

  edit(employees: any) {
    this.editId = employees;
  }

}


