import { Component, OnInit } from '@angular/core';
import { shopWorkingRouter } from './common/shop-working-router';
import { Router } from '@angular/router';
import { RouterInfo } from 'src/app/core';

@Component({
  selector: 'app-shop-working',
  templateUrl: './shop-working.component.html',
  styleUrls: ['./shop-working.component.sass'],
})
export class ShopWorkingComponent {
  private routes = shopWorkingRouter;

  constructor(private router: Router) {}

  get showRoutes(): RouterInfo[] {
    const routes = this.routes.map(e => ({
      ...e,
      isCurrent: this.router.url.includes(e.path)
    }))

    return routes
  }
}
