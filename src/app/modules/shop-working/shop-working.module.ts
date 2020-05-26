import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShopWorkingRoutingModule } from './shop-working-routing.module';

import { shopWorkingComponents } from './components';

import {
  shopWorkingContainer,
} from './containers';
import { MomentModule } from 'ngx-moment';
import { ShopWorkingService } from './services/shop-working.service';
import { NgZorroAntdModule } from 'src/app/share';
import { RouterModule } from '@angular/router';
import { ShopWorkingComponent } from './shop-working.component';

@NgModule({
  declarations: [
    ShopWorkingComponent,
    ...shopWorkingContainer,
    ...shopWorkingComponents,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShopWorkingRoutingModule,
    RouterModule,
    MomentModule,
    NgZorroAntdModule,
  ],
  providers: [ShopWorkingService],
})
export class ShopWorkingModule {}
