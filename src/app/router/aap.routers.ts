import {  ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from '../module/employees/employees.component';
import { EmployeesCreateComponent } from '../module/employees-create/employees-create.component';
import { EmployeesDetailsComponent} from '../module/employees-details/employees-details.component'

const appRoutes : Routes = [
    {path:"list", component: EmployeesComponent },
    {path:"add", component: EmployeesCreateComponent},
    { path: 'employee/:id', component: EmployeesDetailsComponent },
    {path:"", redirectTo:"/list", pathMatch:"full"}
];
export const appRouter: ModuleWithProviders =  RouterModule.forRoot(appRoutes)