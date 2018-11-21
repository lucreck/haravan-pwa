import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http.service';
import { tap } from 'rxjs/operators';
import { LocalStorageService } from '../local-storage-service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService extends HttpService {

  private cartCookie = "empty";
  private cartCookiePrivate = "empty";
  

  constructor(
    public http: HttpClient,
    protected localStorage: LocalStorageService
  ) {
    super(http);
  }

  async getHeader() {
    let header;
    await this.localStorage.getCartCookie().then(data => {
      if(data !== null && data !== undefined){
        this.cartCookie = data;
      }
      header = new HttpHeaders({
        'X-Suplo-Haravan-Cookie': this.cartCookie
      })
    })
    return header
  }

  async getCart() {
    let headers = await this.getHeader()
    return await this.get("/cart", {
      headers: headers
    }).toPromise();
  }

  async changeItem(id, quantity){
    let headers = await this.getHeader()
        let payload = {
          id: id,
          quantity: quantity
        }
        let options = {
          observe: "response",
          headers: headers
        }
        return await this.post("/cart/update", payload, options).pipe(
          tap(resp => {
            this.cartCookie = resp.headers.get("x-suplo-haravan-cookie");
          })
        ).toPromise();
  }
 
  async addProductToCart(id, quantity) {
    let headers = await this.getHeader()

    let payload = {
      id: id,
      quantity: quantity
    }
    let options = {
      observe: "response",
      headers: headers
    }
    console.log("options", options)

    return await this.post("/cart/add", payload, options).pipe(
      tap(resp => {
        if(this.cartCookie == "empty"){
          this.cartCookie = resp.headers.get("x-suplo-haravan-cookie");
          this.localStorage.setCartCookie(this.cartCookie).then(data => {
            console.log("stored: ", data)
          })
        }
        // const keys = resp.headers.keys();
        // let headers = keys.map(key =>
        //   `${key}: ${resp.headers.get(key)}`);
        // console.log('header', headers)
        // console.log('body', resp.body)
      })
    ).toPromise();
  }

  clearCart(){
    this.cartCookie = "empty";
    this.localStorage.setCartCookie(this.cartCookie).then(data => {
      console.log("stored: ", data)
    })
  }
}



