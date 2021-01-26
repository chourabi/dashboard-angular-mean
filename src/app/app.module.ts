import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormidableComponent } from './formidable/formidable.component';
import {  FormsModule ,ReactiveFormsModule  } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    FormidableComponent
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
