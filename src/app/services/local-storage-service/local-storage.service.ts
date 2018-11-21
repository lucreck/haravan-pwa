import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private storage: Storage) {
     
  }

  setCartCookie(data){
    return this.storage.set('cart_cookie', data);
  }

  getCartCookie(){
    return this.storage.get("cart_cookie")
  }

  
}
