import { Injectable } from '@angular/core';
import * as data from '../../assets/data.json';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ReadDataService {
  private jsonData: Product[];
  constructor() {
    this.jsonData = data;
  }

  getData = () => this.jsonData;
}
