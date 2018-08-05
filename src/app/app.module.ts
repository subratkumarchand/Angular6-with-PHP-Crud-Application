import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesActionComponent } from './employees-action/employees-action.component';
import {HttpClientModule} from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { appRouter } from './aap.routers';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeesActionComponent,
    EditComponent,
    SearchComponent,
    HeaderComponent
    
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


	