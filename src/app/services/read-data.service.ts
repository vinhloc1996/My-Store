import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import jsonData from '../../assets/data.json';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ReadDataService {
  products?: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {}

  getListProduct = (): BehaviorSubject<Product[]> | undefined => {
    this.http
      .get<Product[]>('http://localhost:4200/assets/data.json')
      .subscribe(products => {
        this.products?.next(products);
      });
    return this.products || undefined;
  };

  getProductById = (id: number): Product | undefined =>
    this.products?.getValue().find(p => p.id == id);
}
