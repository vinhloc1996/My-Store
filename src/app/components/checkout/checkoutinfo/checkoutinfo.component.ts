import { Component, EventEmitter, Output } from '@angular/core';
import { CheckoutInfo } from 'src/app/models/cart.model';

@Component({
  selector: 'app-checkoutinfo',
  templateUrl: './checkoutinfo.component.html',
  styleUrls: ['./checkoutinfo.component.css'],
})
export class CheckoutinfoComponent {
  @Output() placeOrder: EventEmitter<CheckoutInfo> = new EventEmitter();

  constructor() {}
  address?: string;
  fullname?: string;
  email?: string;
  phone?: string;

  checkout = () => {
    this.placeOrder.emit({
      address: this.address,
      email: this.email,
      fullname: this.fullname,
      phone: this.phone,
    });
  };
}
