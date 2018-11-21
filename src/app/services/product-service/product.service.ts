import { HttpService } from './../http.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends HttpService {

 constructor(
   public http: HttpClient
 ) {
    super(http);
 }

 getProduct(handle){
    return this.get(`/products/${handle}`)
 }

}
