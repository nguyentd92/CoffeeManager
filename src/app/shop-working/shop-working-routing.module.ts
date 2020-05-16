import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopWorkingContainerComponent } from './containers';

const routes: Routes = [
  {
    path: "",
    component: ShopWorkingContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopWorkingRoutingModule { }
