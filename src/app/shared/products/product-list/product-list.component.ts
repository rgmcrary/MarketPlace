import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';

// import * as fromProduct from '../store/recipe.reducers';
import {ProductItemComponent} from './product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
