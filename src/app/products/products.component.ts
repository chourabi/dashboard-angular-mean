import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [ 
    { title:'manga',price:8000, addDate: new Date() , phone: 77889966 },
    { title:'pinaples',price:500.50, addDate: new Date() , phone: 55889966 },
    { title:'apple',price:4, addDate: new Date(), phone:44552233 }
];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // do not so this , use the uppercase pipe
  toUpper(str:string){
    return str.toUpperCase();
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/auth'])
  }

}
