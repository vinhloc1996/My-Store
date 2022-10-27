import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ReadDataService } from 'src/app/services/read-data.service';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  faCartPlus = faCartPlus;
  private _dataService: ReadDataService;
  private _cartService: CartService;

  productId?: number;
  product?: Product;

  constructor(
    dataService: ReadDataService,
    cartService: CartService,
    private route: ActivatedRoute
  ) {
    this._dataService = dataService;
    this._cartService = cartService;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id') as unknown as number;
    });

    this.product = this._dataService.getProductById(this.productId || 0);
  }

  addProductToCart(id?: number): void {
    this._cartService.addProductToCart({ productId: id || 0, quantity: 1 });
  }
}
