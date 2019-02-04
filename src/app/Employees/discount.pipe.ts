import {Pipe,PipeTransform} from '@angular/core'
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
name:'discounted'

})

export class DiscountedPipe implements PipeTransform
{

transform(value:number,x :number)
transform(value:number,x :number)
{
    value=value-x;
    return value;
}


}