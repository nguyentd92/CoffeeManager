import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinkCrudComponent } from './drink-crud.component';
import { Routes, RouterModule } from '@angular/router';
import { CrudPackagesModule } from '../common';

const routes: Routes = [
  {
    path: '',
    component: DrinkCrudComponent,
  },
];

@NgModule({
  declarations: [DrinkCrudComponent],
  imports: [CommonModule, CrudPackagesModule, RouterModule.forChild(routes)],
})
export class DrinkCrudModule {}
