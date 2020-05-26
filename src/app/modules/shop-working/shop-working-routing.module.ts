import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ShopWorkingContainerComponent,
  MenuOrderContainerComponent,
  TodayLogsContainerComponent,
} from './containers';
import { ShopWorkingComponent } from './shop-working.component';

const routes: Routes = [
  {
    path: '',
    component: ShopWorkingComponent,
    children: [
      {
        path: '',
        component: ShopWorkingContainerComponent,
      },
      {
        path: 'order',
        component: MenuOrderContainerComponent,
      },
      {
        path: 'today-logs',
        component: TodayLogsContainerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopWorkingRoutingModule {}
