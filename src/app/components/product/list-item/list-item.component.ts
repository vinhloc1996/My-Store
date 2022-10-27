import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
  @Input() product?: Product;
  private _cartService: CartService;

  //Font-Awesome
  faCartPlus = faCartPlus;

  constructor(cartService: CartService) {
    this._cartService = cartService;
  }

  addProductToCart(id?: number): void {
    this._cartService.addProductToCart({ productId: id || 0, quantity: 1 });
  }
}
