import { Component, OnInit } from '@angular/core';
import { RouterInfo } from 'src/app/core';

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

  constructor() {}

  ngOnInit(): void {}
}
