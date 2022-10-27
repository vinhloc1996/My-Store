import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}
  cart?: Cart;

  ngOnInit(): void {
    this.cart = this.cartService.cartInfo.getValue();
  }

  removeProductFromCart(id: number | undefined) {
    this.cartService.removeProductFromCart(
      this.cart?.productList.find(p => p.product.id == id)
    );
  }
}
