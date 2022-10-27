import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { DetailComponent } from './components/product/detail/detail.component';
import { ListComponent } from './components/product/list/list.component';
import { ListItemComponent } from './components/product/list-item/list-item.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SuccessComponent } from './components/checkout/success/success.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastNoAnimationModule } from 'ngx-toastr';
import { CheckoutinfoComponent } from './components/checkout/checkoutinfo/checkoutinfo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    NavbarComponent,
    DetailComponent,
    ListComponent,
    ListItemComponent,
    NotFoundComponent,
    SuccessComponent,
    CheckoutComponent,
    CheckoutinfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ToastNoAnimationModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
