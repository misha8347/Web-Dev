import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { Product } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  @Input() product!: Product;
  @Output() remove = new EventEmitter();


  ngOnInit(): void {
  }

  share() {
    window.alert('The product has been shared!');
  }

  like(){
    this.product.likesAmount++;
  }

  removeProduct(){
    this.remove.emit(this.product.id);
  }

}
