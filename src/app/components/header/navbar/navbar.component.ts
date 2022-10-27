import { Component, OnInit } from '@angular/core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  private _cartService: CartService;
  cartInfo?: Cart;
  faCartArrowDown = faCartArrowDown;

  constructor(cartService: CartService) {
    this._cartService = cartService;
  }

  ngOnInit(): void {
    this._cartService.cartInfo.subscribe(c => {
      if (!c) {
        return;
      }
      this.cartInfo = c;
    });
  }
}
