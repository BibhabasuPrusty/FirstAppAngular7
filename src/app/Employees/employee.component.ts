import {Component,OnInit} from '@angular/core';
import {IEmployee} from './employee.model';
import {EmployeeService} from './employee.service';


@Component({
selector:'app-employee',
templateUrl:'./employee.component.html',
// styles:['thead{color:teal}','h4{color:orange}']
styleUrls:['./employee.component.css']
 

})

export class EmployeeComponent implements OnInit
{
  constructor(private _empService:EmployeeService)
  {}
    Title:String='Employee Details';
    dept:String='Department';
    deptDetails:String='Department Details';
    showTable:Boolean=true;
    showImage:Boolean=true;
    userInput:String;
    products:IEmployee[];
    
    // [{'_id':'5a05dacc734d1d68d42d31f3','productId':1,'productName':'Leaf Rake','productCode':'GDN-0011','releaseDate':'March 19, 2016','description':'Leaf rake with 48-inch wooden handle.','price':19.95,'starRating':2.5,'imageUrl':'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'},
    //  {'_id':'5a05daec734d1d68d42d32ca','productId':2,'productName':'Garden Cart','productCode':'GDN-0023','releaseDate':'March 18, 2016','description':'15 gallon capacity rolling garden cart','price':32.99,'starRating':4.5,'imageUrl':'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'}]

    //  products:any[]=[{'_id':'5a05dacc734d1d68d42d31f3','productId':1,'productName':'Leaf Rake','productCode':'GDN-0011','releaseDate':'March 19, 2016','description':'Leaf rake with 48-inch wooden handle.','price':19.95,'starRating':3.5,'imageUrl':'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'},
    //  {'_id':'5a05daec734d1d68d42d32ca','productId':2,'productName':'Garden Cart','productCode':'GDN-0023','releaseDate':'March 18, 2016','description':'15 gallon capacity rolling garden cart','price':32.99,'starRating':4.2,'imageUrl':'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'}]


     ngOnInit():void{

// this.products=this._empService.getProducts();

     this._empService.getProducts()
    .subscribe((data)=> this.products=data);

    //   this._empService.getProducts()
    // .then((data)=> this.products=data);


     }

     toggleImage():void
     {
       this.showImage=!this.showImage;

     }

     onDataReceive(message:String):void
     {
       this.Title='~~~~~~~~ Product List~~~~~~~'+ message;
     }
}

