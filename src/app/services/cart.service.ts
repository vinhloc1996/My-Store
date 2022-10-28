import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {
  AddProductToCartDTO,
  Cart,
  CartOperation,
  CheckoutInfo,
  TotalProductPrice,
} from '../models/cart.model';
import { v4 as uuid } from 'uuid';
import { ReadDataService } from './read-data.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //Store the value of buyer and total amount
  cartInfo: BehaviorSubject<Cart>;
  _dataService: ReadDataService;
  constructor(dataService: ReadDataService, private toastr: ToastrService) {
    this._dataService = dataService;
    this.cartInfo = new BehaviorSubject<Cart>(this.initNewCart());
  }

  initNewCart = (): Cart => {
    return {
      cartId: uuid(),
      totalPrice: 0,
      productList: [],
      totalQty: 0,
    };
  };

  //Get/Set method for checkoutInfo
  addProductToCart = (product: AddProductToCartDTO) => {
    const productData = this._dataService.getProductById(product.productId);
    if (!productData) {
      throw new Error(
        `Could not find the product with the id ${product.productId}`
      );
    }

    const productPrice: TotalProductPrice = {
      product: productData,
      quantity: product.quantity,
      totalPrice: productData.price * product.quantity,
    };

    this.updateCart(productPrice);
  };

  removeProductFromCart = (productPrice: TotalProductPrice | undefined) => {
    if (!productPrice) {
      return;
    }
    this.updateCart(productPrice, CartOperation.Delete);
  };

  private updateCart = (
    productPrice: TotalProductPrice,
    operation: CartOperation = CartOperation.AddUpdate
  ) => {
    let currentCart: Cart = this.cartInfo.getValue();
    // let currentProductInCart: TotalProductPrice | undefined = currentCart.productList?.find(x => x.productId == productPrice.productId);
    let currentProductInCart: number = currentCart.productList.findIndex(
      x => x.product.id == productPrice.product.id
    );
    console.log(1, productPrice.product.id, currentCart);
    console.log(2, currentProductInCart);
    if (productPrice.quantity == 0) {
      operation = CartOperation.Delete;
    }

    switch (operation) {
      case CartOperation.AddUpdate:
        if (currentProductInCart > -1) {
          currentCart.productList[currentProductInCart].quantity +=
            productPrice.quantity;
          currentCart.totalPrice += productPrice.totalPrice;
          currentCart.totalQty += productPrice.quantity;
          alert(
            `Product ${currentCart.productList[currentProductInCart].product.name} has been updated in cart`
          );
          this.toastr.success(
            `Product ${currentCart.productList[currentProductInCart].product.name} has been updated in cart`,
            `Updated product`
          );
        } else {
          currentCart.productList?.push(productPrice);
          currentCart.totalPrice += productPrice.totalPrice;
          currentCart.totalQty += productPrice.quantity;
          alert(`Product ${productPrice.product.name} has been added to cart`);
          this.toastr.success(
            `Product ${productPrice.product.name} has been added to cart`,
            `Added product`
          );
        }
        break;
      case CartOperation.Delete:
        if (currentProductInCart > -1) {
          const name =
            currentCart.productList[currentProductInCart].product.name;
          currentCart.totalPrice -=
            currentCart.productList[currentProductInCart].totalPrice;
          currentCart.totalQty -=
            currentCart.productList[currentProductInCart].quantity;
          currentCart.productList.splice(currentProductInCart, 1);
          alert(`Product ${name} has been removed from cart`);
          // this.toastr.success(
          //   `Product ${currentCart.productList[currentProductInCart].product.name} has been removed from cart`,
          //   `Deleted product`
          // );
        }
        break;
    }
    this.cartInfo.next(currentCart);
  };

  updateCartInfo = (checkoutInfo: CheckoutInfo) => {
    let currentCart: Cart = this.cartInfo.getValue();
    currentCart.checkoutInfo = checkoutInfo;
    this.cartInfo.next(currentCart);
  };

  clearCart = () => {
    this.cartInfo.next(this.initNewCart());
  };
}
