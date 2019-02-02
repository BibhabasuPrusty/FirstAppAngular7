import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
//import {EmployeeComponent} from './Employees/employee.component';
//import { MyUpperPipe } from './Employees/myUpper.pipe';
//import { DiscountedPipe } from './Employees/discount.pipe';
//import { EmployeeSearchPipe } from './Employees/empSearch.pipe';
//import { StarComponent } from './Employees/Shared/star.component';
//import { EmployeeService } from './Employees/employee.service';
import { IEmployee } from './Employees/employee.model';
import { HomeComponent } from './Home/home.component';
import { OrderComponent } from './Order/order.component';
import { ProductDetailsComponent } from './Employees/productDetail.component';
import { NotFoundComponent } from './Employees/Shared/Notfound.component';
import { ProductModule } from './Employees/product.module';
//import { SharedModule } from './Employees/Shared/shared.module';

@NgModule({

 //all compnents and pipes
 declarations:[
    AppComponent,
    //EmployeeComponent,
    //MyUpperPipe,
    //DiscountedPipe,
    //EmployeeSearchPipe,
    //StarComponent,
    HomeComponent,
    OrderComponent,
    //ProductDetailsComponent,
    NotFoundComponent

],

//all modules
imports:[
    BrowserModule,
    FormsModule,
     RouterModule.forRoot([
         
        // {path: 'products', component: EmployeeComponent},
        // {path: 'products/:id', component: ProductDetailsComponent},
         {path: 'orders', component: OrderComponent},
        {path: 'home', component: HomeComponent},
        {path: '', redirectTo: 'home' , pathMatch: 'full'},
        {path: '**', component: NotFoundComponent},

         
     ]),

     HttpClientModule,
     ProductModule
    
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

