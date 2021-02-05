import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products = [];
  total=0;

  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.products = this.cart.productsInCart;

    this.products.map((p)=>{
      this.total+=p.price;
    })
  }

}
