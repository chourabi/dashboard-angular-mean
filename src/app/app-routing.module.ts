import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { FormidableComponent } from './formidable/formidable.component';
import { MainComponent } from './main/main.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ShopComponent } from './shop/shop.component';
import { SigininComponent } from './siginin/siginin.component';


const routes: Routes = [
  /*{
    path: '', canActivate:[AuthGuard], component: MainComponent, children: [
      { path: 'fomi', component: FormidableComponent },
      { path: 'pro', component: ProductsComponent },

    ]
  },

  {
    path: 'products', canActivate:[AuthGuard], component: MainComponent, children: [
      { path: 'fomi', component: FormidableComponent },
      { path: 'pro', component: ProductsComponent },
      { path: '', component: ProductsComponent },
    ]
  },

  { path: 'about', canActivate:[AuthGuard], component: AboutComponent },
  { path: 'auth', component: SigininComponent },*/
  

  { path:'' , component:ShopComponent },
  { path:'shop' , component:ShopComponent },
  { path:'cart' , component:CartComponent },
  { path:'details/:id' , component:DetailsComponent },
  { path:'**' , component:NotfoundComponent },
  
  
  
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
