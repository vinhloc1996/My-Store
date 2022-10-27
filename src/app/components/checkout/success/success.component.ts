import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}
  cartId: string | null = null;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.cartId = params.get('id');
      if (this.cartService.cartInfo.getValue().cartId != this.cartId) {
        this.route.navigate(['/404']);
      } else {
        this.cartService.clearCart();
      }
    });
  }
}
