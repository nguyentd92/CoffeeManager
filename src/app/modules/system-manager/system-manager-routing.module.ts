import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemManagerComponent } from './system-manager.component';

const routes: Routes = [
  {
    path: '',
    component: SystemManagerComponent,
    children: [
      {
        path: 'drink-crud',
        loadChildren: () =>
          import('./drink-crud/drink-crud.module').then(
            (m) => m.DrinkCrudModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemManagerRoutingModule {}
