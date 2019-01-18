import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from './app.component';
import {EmployeeComponent} from './Employees/employee.component';

@NgModule({

 //all compnents and pipes
 declarations:[
    AppComponent,
    EmployeeComponent

],

//all modules
imports:[
    BrowserModule
],

//only first component
bootstrap:[
    AppComponent
],

//
providers:[]

})

export class AppModule
{  



}

