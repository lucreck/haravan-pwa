import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../services/product-service/product.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { Slides } from '@ionic/angular';
import { CartService } from '../services/cart-service/cart.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  product;
  product_handle;

  selected_variant_id;
  selected_quantity;

  slideOpts = {
    effect: 'coverflow'
  };
  @ViewChild(Slides) slides: Slides;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
    public toastController: ToastController
  ) {
    this.route.paramMap.pipe(
      take(1)
    ).subscribe((params: ParamMap) => {
      this.product_handle = params.get('handle');
      this.productService.getProduct(this.product_handle).toPromise().then(data => {
        this.product = data["product"];
        console.log(this.product)
      });
    });
  }

  goToSlideIndex(index) {
    this.slides.slideTo(index)
  }

  addToCart(id, quantity) {
    this.cartService.addProductToCart(id, quantity).then(item => {
      console.log()
      this.presentToast(`Đã thêm ${quantity} ${item.body.product_title} vào giỏ thành công!`, "dark" );
    }).catch(err => {
      this.presentToast('Thất bại, xin vui lòng thử lại!', "danger");
    })
  }

  async presentToast(mes, color) {
    const toast = await this.toastController.create({
      message: mes,
      duration: 3000,
      position: "top",
      color: color,
      mode: "ios"
    });
    toast.present();
  }

  ngOnInit() {
  }

}
