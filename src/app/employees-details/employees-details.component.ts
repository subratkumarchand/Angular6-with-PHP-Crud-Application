import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeesService} from '../employees.service'
@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.css']
})
export class EmployeesDetailsComponent implements OnInit {
 Employees = [];
  constructor(
    private route: ActivatedRoute,
    private EmployeesService: EmployeesService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getEmployeeDetails();
  }
  getEmployeeDetails(): void {
    debugger
    const id = +this.route.snapshot.paramMap.get('id');
    this.EmployeesService.getEmployees()
      .subscribe(
        (resp) => {
         console.log(resp)
         debugger
         this.Employees = resp;
        this.Employees = this.Employees.find(x => x.id == id);
        }, (error) => {
          console.log(error);
        }
      );
  }

}
