import { Component, OnInit } from '@angular/core';
import { shopWorkingRouter } from './common/shop-working-router';

@Component({
  selector: 'app-shop-working',
  templateUrl: './shop-working.component.html',
  styleUrls: ['./shop-working.component.sass'],
})
export class ShopWorkingComponent implements OnInit {
  routes = shopWorkingRouter;

  constructor() {}

  ngOnInit(): void {}
}
