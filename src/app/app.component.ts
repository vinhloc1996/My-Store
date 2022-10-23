import { Component, OnInit } from '@angular/core';
import { ReadDataService } from './services/read-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //pass data down to product list component
  private _dataService: ReadDataService;
  constructor(dataService: ReadDataService) {
    this._dataService = dataService;
  }

  ngOnInit(): void {
      
  }
  
  title = 'MyStore';


}