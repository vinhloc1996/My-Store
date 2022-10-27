import { Product } from './product.model';

export interface Cart {
  cartId: string;
  fullname?: string;
  productList: TotalProductPrice[];
  checkoutInfo?: CheckoutInfo;
  totalPrice: number;
  totalQty: number;
}

export interface TotalProductPrice {
  product: Product;
  quantity: number;
  totalPrice: number;
}

export interface AddProductToCartDTO {
  productId: number;
  quantity: number;
}

export interface PaymentInfo {
  cardnumber: string;
  //some extra info
}

export enum CartOperation {
  AddUpdate = 'Add|Update',
  Delete = 'Delete',
}

export interface CheckoutInfo {
  fullname?: string;
  address?: string;
  email?: string;
  phone?: string;
}
