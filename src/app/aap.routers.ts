import {  ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesCreateComponent } from './employees-create/employees-create.component';
import { EmployeesDetailsComponent} from './employees-details/employees-details.component'

const appRoutes : Routes = [
    {path:"list", component: EmployeesComponent },
    {path:"add", component: EmployeesCreateComponent},
    { path: 'employee/:id', component: EmployeesDetailsComponent },
    {path:"", redirectTo:"/list", pathMatch:"full"}
];
export const appRouter: ModuleWithProviders =  RouterModule.forRoot(appRoutes)