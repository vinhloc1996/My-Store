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

  addressError?: string;
  fullnameError?: string;
  emailError?: string;
  phoneError?: string;

  checkout = () => {
    this.placeOrder.emit({
      address: this.address,
      email: this.email,
      fullname: this.fullname,
      phone: this.phone,
    });
  };

  validateFullName = (fullname: string) => {
    if (!fullname) {
      this.fullnameError = 'FullName is required';
      return;
    }
    if (fullname.length < 2) {
      this.fullnameError = 'FullName is required atleast 2 characters';
      return;
    }
    this.fullnameError = '';
  };

  validateAddress = (address: string) => {
    if (!address) {
      this.addressError = 'Address is required';
      return;
    }
    if (address.length < 10) {
      this.addressError = 'Address is required atleast 10 characters';
      return;
    }
    this.addressError = '';
  };

  validatePhone = (phone: string) => {
    if (!phone) {
      this.phoneError = 'Phone is required';
      return;
    }
    if (phone.length < 8) {
      this.phoneError = 'Phone is required atleast 8 characters';
      return;
    }
    var reg = new RegExp('^[0-9]{8,15}$');
    if (!reg.test(phone)) {
      this.phoneError =
        'Phone must contain only number and length between 8 to 15 ';
      return;
    }
    this.phoneError = '';
  };

  validateEmail = (email: string) => {
    if (!email) {
      this.emailError = 'Email is required';
      return;
    }
    if (email.length < 4) {
      this.emailError = 'Email is required atleast 4 characters';
      return;
    }
    var reg = new RegExp('^\\S+@\\S+$');
    if (!reg.test(email)) {
      this.emailError = 'Email must contain @';
      return;
    }
    this.emailError = '';
  };
}
