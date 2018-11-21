import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HighlightModule, HighlightOptions } from 'ngx-highlightjs';
import { HomePage } from './home.page';
import { ProductService } from '../services/product-service/product.service';

const options : HighlightOptions =  {
  theme: 'dark'
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HighlightModule.forRoot(options),
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
