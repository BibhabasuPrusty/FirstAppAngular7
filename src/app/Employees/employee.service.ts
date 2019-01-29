import {Injectable} from '@angular/core';
import {IEmployee} from './employee.model';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
//import {Http} from '@angular/http';

@Injectable()
   

export class EmployeeService
{
   
  private _productURL='https://ngproductsparam.herokuapp.com/api/getProductDetails';
 constructor(private _http:HttpClient)
 {}

  getProducts():Observable<IEmployee[]>
  {
   return this._http.get<IEmployee[]>(this._productURL);   
   
  //  [{'_id':'5a05dacc734d1d68d42d31f3','productId':1,'productName':'Leaf Rake','productCode':'GDN-0011','releaseDate':'March 19, 2016','description':'Leaf rake with 48-inch wooden handle.','price':19.95,'starRating':2.5,'imageUrl':'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'},
  //   {'_id':'5a05daec734d1d68d42d32ca','productId':2,'productName':'Garden Cart','productCode':'GDN-0023','releaseDate':'March 18, 2016','description':'15 gallon capacity rolling garden cart','price':32.99,'starRating':4.5,'imageUrl':'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'}]

  }

// getProducts():Promise<IEmployee[]>
//   {
//    return this._http.get<IEmployee[]>(this._productURL)
//    .toPromise()
//    .then((res) => res.json());
   

  //}

  getproductDetails(id:Number): Observable<IEmployee[]>{

    
    return this._http.get<IEmployee[]>(`${this._productURL}?productId=${id}`);
  }


}    