import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input()
  product: ProductModel;
  @Output()
  addedToCart = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit(): void { }

  onAdd(): void {
    this.addedToCart.emit(this.product);
  }

  onBuy(): void {
    console.log('product was bought');
  }
}
