import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CollectionPage } from './collection.page';
import { CollectionService } from '../services/collection-service/collection.service';
import { ProductService } from '../services/product-service/product.service';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CollectionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    CollectionService,
    ProductService
  ],
  declarations: [CollectionPage]
})
export class CollectionPageModule { }
