import { Component, OnInit } from '@angular/core';
import { mobileProducts } from '../../const/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  selectedEvent = "available products"
  productArr = mobileProducts;
  constructor() { }

  ngOnInit(): void {
  }

}
