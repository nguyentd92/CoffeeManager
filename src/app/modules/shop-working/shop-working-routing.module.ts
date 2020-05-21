import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ShopWorkingContainerComponent,
  MenuOrderContainerComponent,
} from './containers';

const routes: Routes = [
  {
    path: 'order',
    component: MenuOrderContainerComponent,
  },  
  {
    path: '',
    component: ShopWorkingContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopWorkingRoutingModule {}
