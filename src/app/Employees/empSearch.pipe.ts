import {Pipe,PipeTransform} from '@angular/core';
import {IEmployee} from './employee.model';

import { pipe } from '@angular/core/src/render3';


@Pipe({

name:'empSearch'
})


export class EmployeeSearchPipe implements PipeTransform
{
transform(value:IEmployee[],userInput:string)
{
  userInput=userInput?userInput.toLowerCase():null;
  return userInput ? value.filter((emp:IEmployee)=>(emp.productName.toLowerCase().indexOf(userInput) !== -1)):value;

}

}