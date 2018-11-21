import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FakeProductComponent } from './components/fake-product/fake-product.component';
import { IonicModule } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

let Modules = [HeaderComponent, FooterComponent, FakeProductComponent];
@NgModule({
  imports: [
    IonicModule
  ],
  declarations: [Modules], 
  exports: [Modules]
})
export class SharedModule { }
