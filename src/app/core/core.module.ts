import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMessageModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store';

@NgModule({
  declarations: [],
  imports: [CommonModule, NzMessageModule, HttpClientModule, EffectsModule.forRoot(effects)],

})
export class CoreModule {}
