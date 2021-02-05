import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  productsInCart = [];

  
  constructor() { }


  getProductsLength(){
    return this.productsInCart.length;
  }


  addProduct(p){
    this.productsInCart.push(p);
  }

}
