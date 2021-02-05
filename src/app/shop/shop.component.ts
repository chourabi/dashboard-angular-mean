import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {


  products = [
    {
      title:"banana 2",
      description:" this is an awesome banana with low price !",
      price:60,
      id:2,
      picture:"http://pngimg.com/uploads/banana/banana_PNG825.png"
    },
    {
      title:"banana 1",
      description:" this is an awesome banana with low price !",
      price:40,
      id:1,
      picture:"http://pngimg.com/uploads/banana/banana_PNG825.png"
    },
    {
      title:"banana 3",
      description:" this is an awesome banana with low price !",
      price:100,
      id:3,
      picture:"http://pngimg.com/uploads/banana/banana_PNG825.png"
    },
    {
      title:"banana 4",
      description:" this is an awesome banana with low price !",
      price:120,
      id:4,
      picture:"http://pngimg.com/uploads/banana/banana_PNG825.png"
    },
    

  ];


  filtredProducts = [];

  constructor() { }

  ngOnInit(): void {
    this.filtredProducts = this.products;
  }

  updateProducts(event){
    this.filtredProducts = [];

    const v = event.target.value;

    if (v == "2") {
      this.products.map((p)=>{
        if (p.price < 100) {
          this.filtredProducts.push(p);
        }
      })
    }else{
      this.products.map((p)=>{
        if (p.price >= 100) {
          this.filtredProducts.push(p);
        }
      })
    }
    
  }

}
