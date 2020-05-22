import { NgModule } from '@angular/core';
import { NzButtonModule, NzIconModule, NzTableModule, NzModalModule } from 'ng-zorro-antd';

@NgModule({
  exports: [
    NzButtonModule,
    NzIconModule,
    NzTableModule,
    NzModalModule
  ]
})
export class CrudPackagesModule { }
