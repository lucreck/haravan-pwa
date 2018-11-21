import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../services/collection-service/collection.service';
import { Router} from '@angular/router';
import { CartService } from '../services/cart-service/cart.service';
import { ProductService } from '../services/product-service/product.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.page.html',
  styleUrls: ['./collection.page.scss'],
})
export class CollectionPage implements OnInit {
  collection;
  constructor(
    public collectionService: CollectionService,
    public cartService: CartService,
    public productService: ProductService,
    private router: Router
  ) { 
    this.loadData();
  }

  loadData(){
    this.collectionService.getCollectionByHandle('all').toPromise().then(data =>{
      this.collection = data;
    }).catch(err => {
      console.log(err)
    })
  }

  goToProductDetail(handle){
    this.router.navigateByUrl(`/products/${handle}`)
  }

  addToCart(id){
    // this.cartService.addProductToCart(id, 1).toPromise().then(data =>{
    //   console.log(data)
    // }).catch(err =>{
    //   console.log(err)
    // })
  }

  ngOnInit() {
  }

}
