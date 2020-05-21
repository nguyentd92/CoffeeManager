import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

import { TableItemComponent, FoodItemComponent } from './components';

import { MenuOrderContainerComponent } from './containers/menu-order-container/menu-order-container.component';
import { OrderCalculatorComponent } from './components/order-calculator/order-calculator.component';

import { ShopWorkingRoutingModule } from './shop-working-routing.module';
import { ShopWorkingContainerComponent } from './containers';
import { FoodNoteGearComponent } from './components/food-note-gear/food-note-gear.component';

@NgModule({
  declarations: [
    ShopWorkingContainerComponent,
    TableItemComponent,
    MenuOrderContainerComponent,
    FoodItemComponent,
    OrderCalculatorComponent,
    FoodNoteGearComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShopWorkingRoutingModule,
    NzButtonModule,
    NzInputNumberModule,
  ],
})
export class ShopWorkingModule {}
