import { NgModule } from '@angular/core';
import { NzButtonModule, NzIconModule, NzTableModule } from 'ng-zorro-antd';

@NgModule({
  exports: [
    NzButtonModule,
    NzIconModule,
    NzTableModule
  ]
})
export class CrudPackagesModule { }
