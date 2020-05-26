import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './share/main-layout/main-layout.component';
import { ConnectionGuard } from './core';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'shop-working',
        loadChildren: () =>
          import('./modules/shop-working/shop-working.module').then(
            (m) => m.ShopWorkingModule
          ),
      },
      {
        path: '',
        canActivate: [ConnectionGuard],
        canLoad: [ConnectionGuard],
        children: [
          {
            path: 'system-manager',
            loadChildren: () =>
              import('./modules/system-manager/system-manager.module').then(
                (m) => m.SystemManagerModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
