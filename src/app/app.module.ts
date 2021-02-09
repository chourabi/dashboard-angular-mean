import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormidableComponent } from './formidable/formidable.component';
import {  FormsModule ,ReactiveFormsModule  } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { HashPipe } from './hash.pipe';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { SigininComponent } from './siginin/siginin.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MapComponent } from './map/map.component'; 

@NgModule({
  declarations: [
    AppComponent,
    FormidableComponent,
    ProductsComponent,
    HashPipe,
    MainComponent,
    AboutComponent,
    SigininComponent,
    ShopComponent,
    CartComponent,
    ProductComponent,
    DetailsComponent,
    NotfoundComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
