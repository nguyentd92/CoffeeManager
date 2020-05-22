import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { SystemManagerRoutingModule } from './system-manager-routing.module';
import { SystemManagerComponent } from './system-manager.component';
import { IconsProviderModule } from 'src/app/share';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [SystemManagerComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    IconsProviderModule,
    SystemManagerRoutingModule,
  ],
})
export class SystemManagerModule {}
