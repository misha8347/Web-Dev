import { Component, OnInit } from '@angular/core';

import { products, Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit{
  products: Product[];
  selectedProducts: Product[];
  categories = [];


  constructor() {
    this.products = products;
    this.selectedProducts = [];
  }

  ngOnInit(): void{
  }

  public selectedCategory: any;
  getFilteredProducts(){
    console.log(this.selectedCategory);
    this.selectedProducts = this.products.filter((x) => x.category == this.selectedCategory && !x.isDeleted);
  }

  onNewTaskRemove(index: number) {
    var product = this.products.find((product) => product.id === index);
    if(product){
      product.isDeleted = true;
    }
    this.products = this.products.filter((x) => x.id != index);
    this.selectedProducts = this.selectedProducts.filter((x) => x.id !== index);
  }

  getCategories(products: Product[]): string[]{
    var arr = new Array();
    for(let product of products){
      arr.push(product.category);
    }
    let unique = [...new Set(arr)];
    return unique; 
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
