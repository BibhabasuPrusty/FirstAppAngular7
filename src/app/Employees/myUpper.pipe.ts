import {Pipe,PipeTransform} from '@angular/core';


@Pipe({

name:'myUpper'

})

export class MyUpperPipe implements PipeTransform
{
 transform(value:string,x:string,y:string)
 {
     if(x=='upper')
    value=value.toUpperCase();
    else
    value=value.toLowerCase();
    return value;
 }

}