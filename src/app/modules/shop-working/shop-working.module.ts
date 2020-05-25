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
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { NzMenuModule, NzDropDownModule, NzModalModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    ShopWorkingContainerComponent,
    TableItemComponent,
    MenuOrderContainerComponent,
    FoodItemComponent,
    OrderCalculatorComponent,
    FoodNoteGearComponent,
    OrderItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShopWorkingRoutingModule,
    NzButtonModule,
    NzInputNumberModule,
    NzInputModule,
    NzIconModule,
    NzCheckboxModule,
    NzSelectModule,
    NzTagModule,
    NzMenuModule,
    NzDropDownModule,
    NzModalModule
  ],
})
export class ShopWorkingModule {}
