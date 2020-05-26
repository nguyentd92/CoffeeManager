import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { ShopWorkingRoutingModule } from './shop-working-routing.module';

import {
  TableItemComponent,
  FoodItemComponent,
  OrderCalculatorComponent,
  LeftNavItemComponent,
  FoodNoteGearComponent,
  OrderItemComponent,
} from './components';

import {
  ShopWorkingContainerComponent,
  TodayLogsContainerComponent,
  MenuOrderContainerComponent,
} from './containers';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzMenuModule, NzDropDownModule, NzModalModule } from 'ng-zorro-antd';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    ShopWorkingContainerComponent,
    TableItemComponent,
    MenuOrderContainerComponent,
    FoodItemComponent,
    OrderCalculatorComponent,
    FoodNoteGearComponent,
    OrderItemComponent,
    LeftNavItemComponent,
    TodayLogsContainerComponent,
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
    NzModalModule,
    MomentModule,
  ],
})
export class ShopWorkingModule {}
