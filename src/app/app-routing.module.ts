import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { FormidableComponent } from './formidable/formidable.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { SigininComponent } from './siginin/siginin.component';


const routes: Routes = [
  {
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
  { path: 'auth', component: SigininComponent },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
