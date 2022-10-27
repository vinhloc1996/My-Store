import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart, CheckoutInfo } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  cart?: Cart;

  constructor(private cartService: CartService, private route: Router) {}

  ngOnInit(): void {
    this.cart = this.cartService.cartInfo.getValue();
  }

  placeOrder = (checkoutInfo: CheckoutInfo) => {
    this.cartService.updateCartInfo(checkoutInfo);
    this.route.navigateByUrl(`checkout/success/${this.cart?.cartId}`);
  };
}
