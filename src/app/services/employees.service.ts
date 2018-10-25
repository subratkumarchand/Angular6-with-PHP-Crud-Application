import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {employeeType} from '../interface/employees.type';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private _http : HttpClient) { 

  }

 getEmployees() : Observable<employeeType []>{
  return this._http.get<employeeType []>("http://localhost/api/employee.php");
 }
  
 saveEmployees(employee:employeeType){
  return  this._http.post("http://localhost/api/employee.php", JSON.stringify(employee) );
 }  
 deleteEmployees(id:string){
   const url:string = "http://localhost/api/employee.php?id="+ id;
   return this._http.delete(url);
}
updateEmployee(employee:employeeType){
  return this._http.put("http://localhost/api/employee.php",employee);
}

getDetailsEmployee(id:number) : Observable<employeeType []>{
  return this._http.get<employeeType []>("http://localhost/api/employee.php");
 }

}