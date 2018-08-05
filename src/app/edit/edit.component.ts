import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { employeeType } from '../employees/employees.type';
import { EmployeesService } from '../employees.service';

declare var $ :any;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private _employeeSrvc: EmployeesService) { 

  }

  @ViewChild('closeBtn') closeBtn: ElementRef;

  ngOnInit() {
  }

  @Input('edit')
  employee:employeeType 

  designations = [
    {id: 1, name: "software engineer"},
    {id: 2, name: "software developer"},
    {id: 3, name: "databae engineer"},
    {id: 4, name: "software architecture"},
    {id: 5, name: "software designer"}
  ];
  Update(employee){  
    //alert(JSON.stringify(employee))
    this._employeeSrvc.updateEmployee(employee)
        .subscribe( (resp)=>{
          //this.closeBtn.nativeElement.click();
          alert("Employee updated Successfully");
          $("#edit").modal("hide")
          console.log(resp)
        },(error)=>{
          console.log(error)
          alert("Somethings error");
        },()=>{

        })
  }

   
}
