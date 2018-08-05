import {  ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesActionComponent } from './employees-action/employees-action.component';

const appRoutes : Routes = [
    {path:"list", component: EmployeesComponent },
    {path:"add", component: EmployeesActionComponent},
    {path:"", redirectTo:"/list", pathMatch:"full"}
];
export const appRouter: ModuleWithProviders =  RouterModule.forRoot(appRoutes)