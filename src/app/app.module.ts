import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {EmployeeComponent} from './Employees/employee.component';
import { MyUpperPipe } from './Employees/myUpper.pipe';
import { DiscountedPipe } from './Employees/discount.pipe';
import { EmployeeSearchPipe } from './Employees/empSearch.pipe';
import { StarComponent } from './Employees/Shared/star.component';
import { EmployeeService } from './Employees/employee.service';
import { IEmployee } from './Employees/employee.model';

@NgModule({

 //all compnents and pipes
 declarations:[
    AppComponent,
    EmployeeComponent,
    MyUpperPipe,
    DiscountedPipe,
    EmployeeSearchPipe,
    StarComponent

],

//all modules
imports:[
    BrowserModule,
    FormsModule
],

//only first component
bootstrap:[
    AppComponent
],

//
providers:[EmployeeService]

})

export class AppModule
{  
 

}

