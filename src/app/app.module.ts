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

@NgModule({
  declarations: [
    AppComponent,
    FormidableComponent,
    ProductsComponent,
    HashPipe,
    MainComponent,
    AboutComponent,
    SigininComponent
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
