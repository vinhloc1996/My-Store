import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SuccessComponent } from './components/checkout/success/success.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailComponent } from './components/product/detail/detail.component';
import { ListComponent } from './components/product/list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'product/:id', component: DetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'checkout/success/:id', component: SuccessComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
