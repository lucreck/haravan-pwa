import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service/cart.service';
import { IItem, ICart } from '../interfaces/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart;
  item: IItem;

  constructor(
    private cartService: CartService
  ) { 
    this.cartService.getCart().then(data => {
      this.cart = data;
      console.log(data)
    })
  }

  changeItem(id, quantity){
    this.cartService.changeItem(id, quantity).then(res => {
      this.cart = res["body"];
    })
  }

  ngOnInit() {
  }

}
