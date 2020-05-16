import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopWorkingRoutingModule } from './shop-working-routing.module';
import { ShopWorkingContainerComponent } from './containers';
import { TableItemComponent } from './components';


@NgModule({
  declarations: [ShopWorkingContainerComponent, TableItemComponent],
  imports: [
    CommonModule,
    ShopWorkingRoutingModule
  ]
})
export class ShopWorkingModule { }
