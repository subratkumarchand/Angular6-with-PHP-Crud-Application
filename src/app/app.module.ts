import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './module/employees/employees.component';
import { EmployeesCreateComponent } from './module/employees-create/employees-create.component';
import {HttpClientModule} from '@angular/common/http';
import { EditComponent } from './module/edit/edit.component';
import { appRouter } from './router/aap.routers';
import { SearchComponent } from './module/search/search.component';
import { HeaderComponent } from './module/header/header.component';
import { EmployeesDetailsComponent } from './module/employees-details/employees-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeesCreateComponent,
    EditComponent,
    SearchComponent,
    HeaderComponent,
    EmployeesDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    appRouter,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}


	