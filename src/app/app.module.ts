import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { CheckoutComponent } from './components/form/checkout/checkout.component';
import { DetailComponent } from './components/product/detail/detail.component';
import { ListComponent } from './components/product/list/list.component';
import { ListItemComponent } from './components/product/list-item/list-item.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    NavbarComponent,
    CheckoutComponent,
    DetailComponent,
    ListComponent,
    ListItemComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
