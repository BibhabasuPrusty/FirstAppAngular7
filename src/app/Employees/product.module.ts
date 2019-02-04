import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'

import { ProductDetailsComponent } from './productDetail.component';
import { EmployeeComponent } from './employee.component';

import { MyUpperPipe } from './myUpper.pipe';
import { DiscountedPipe } from './discount.pipe';
import { EmployeeSearchPipe } from './empSearch.pipe';

import { EmployeeService } from './employee.service';
import { SharedModule } from './Shared/shared.module';
import { RouterGaurds } from './product.gaurds';


@NgModule(
    {
      declarations:[
        EmployeeComponent,
        MyUpperPipe,
        DiscountedPipe,
        EmployeeSearchPipe,
        ProductDetailsComponent


      ],
      imports:[
               CommonModule,
               FormsModule,
               RouterModule.forChild([

                {path: 'products', component: EmployeeComponent},
                {path: 'products/:id',canActivate:[RouterGaurds], component: ProductDetailsComponent},
                
               ]),
               SharedModule

      ],
providers:[EmployeeService,
          RouterGaurds 

]





    }
)



export class ProductModule
{  
 

}
