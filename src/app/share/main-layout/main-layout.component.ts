import { Component, OnInit } from '@angular/core';
import { RouterInfo, AppState, selectConnection } from 'src/app/core';
import { Store, select } from '@ngrx/store';
import { interval, Subscription } from 'rxjs';

const MAIN_ROUTES: RouterInfo[] = [
  {
    title: 'Cửa hàng',
    path: '/shop-working',
  },
  {
    title: 'Hệ thống',
    path: '/system-manager',
  },
  // {
  //   title: 'Báo cáo',
  //   path: '/',
  // },
  // {
  //   title: 'Cài đặt',
  //   path: '/',
  // },
  // {
  //   title: 'Quản lý',
  //   path: '/',
  // },
  // {
  //   title: 'Trợ giúp',
  //   path: '/',
  // },
];

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass'],
})
export class MainLayoutComponent implements OnInit {
  routes = MAIN_ROUTES;
  currentTime = new Date();
  timeSubs: Subscription;

  constructor(private appStore: Store<AppState>) {
  }

  ngOnInit(): void {
    interval(60000).subscribe(() => this.currentTime = new Date())
  }

  get connection$() {
    return this.appStore.pipe(select(selectConnection));
  }
}
