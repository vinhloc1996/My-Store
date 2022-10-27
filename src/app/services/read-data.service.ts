import { Injectable } from '@angular/core';
import jsonData from '../../assets/data.json';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ReadDataService {
  private data: Product[];
  constructor() {
    this.data = jsonData;
  }

  getListProduct = (): Product[] => this.data;

  getProductById = (id: number): Product | undefined => {
    return this.data.find(x => x.id == id);
  };
}
