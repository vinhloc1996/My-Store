import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ReadDataService } from 'src/app/services/read-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  private _dataService: ReadDataService;
  products: Product[] = [];
  productGrid: Product[][] = [];
  constructor(dataService: ReadDataService) {
    this._dataService = dataService;
  }

  divideProducts = (): Product[][] => {
    let grid: Product[][] = [];
    let rows: Product[] = [];
    for (let index = 0; index < this.products.length; index++) {
      rows.push(this.products[index]);
      if (rows.length % 3 == 0 || index + 1 == this.products.length) {
        grid.push(rows);
        rows = [];
      }
    }

    return grid;
  };

  ngOnInit(): void {
    this._dataService.getListProduct()?.subscribe(products => {
      if (!products) {
        return;
      }
      this.products = products;
    });
  }
}
