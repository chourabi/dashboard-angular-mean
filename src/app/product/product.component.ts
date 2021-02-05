import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() p;


  constructor(private cart:CartService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.p);
    
  }


  addToCart(product){
    this.cart.addProduct(product);
    
  }

  goToDetails(product){
    this.router.navigate(['details/'+product.id , { title : product.title , price : product.price , description:product.description, picture: product.picture  } ]);
  }
}
