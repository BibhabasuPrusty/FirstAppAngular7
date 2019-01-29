import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {EmployeeService} from './employee.service';
import {IEmployee} from './employee.model';


@Component({

    templateUrl: './productDetails.component.html'

})

export class ProductDetailsComponent implements OnInit {

    id:Number;
    details:IEmployee[];
    // name:String;
    // desc:String;
    // image:String;

    constructor(private _route:ActivatedRoute,private _prodService:EmployeeService,private _router:Router)
    {
    
    }



    ngOnInit():void{

        this.id=this._route.snapshot.params['id'];
        this._prodService.getproductDetails(this.id)
        .subscribe((item)=> this.details =item);
       
    }

   OnBack():void
   {
    this._router.navigate(['./products']);

   }

}


 // ngOnInit():void{

    //     this.id=this._route.snapshot.params['id'];
    //     this._route
    //     .queryParams
    //     .subscribe((data)=>{
    //      this.name=data['name'];
    //      this.desc=data['description'];
    //      this.image=data['img'];
    //     });
    // }