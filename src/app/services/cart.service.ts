import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //Store the value of buyer and total amount
  checkoutInfo = new Subject<number>();

  constructor() { }

  //Get/Set method for checkoutInfo
}
