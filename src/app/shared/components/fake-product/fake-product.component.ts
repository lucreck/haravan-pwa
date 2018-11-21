import { Component, OnInit } from '@angular/core';
import { fakeLoading } from '../../../helpers/animations';

@Component({
  selector: 'app-fake-product',
  templateUrl: './fake-product.component.html',
  styleUrls: ['./fake-product.component.scss'],
  animations: [
    fakeLoading
  ]
})
export class FakeProductComponent implements OnInit {
  isPresent = 'start';
  constructor() { 
    this.isPresent = "loop-state";
    
  }

  ngOnInit() {
  }
}
