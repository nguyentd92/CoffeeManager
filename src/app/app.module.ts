import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { MainLayoutModule } from './share/main-layout/main-layout.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { IconsProviderModule, NgZorroAntdModule } from './share';
import { HttpsInterceptor } from './core/utils/https.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, CoreModule } from './core';
import { AppLocalDbModule } from './app-local-db.module';
import { MomentModule } from 'ngx-moment';
import 'moment/locale/vi';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { entityConfig, defaultDataServiceConfig } from './core/store/entity-metadata';

registerLocaleData(vi);

const devModules = environment.production
  ? []
  : [
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production,
      }),
    ];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    MainLayoutModule,

    HttpClientModule,
    AppLocalDbModule,
    StoreModule.forRoot(reducers, {}),
    CoreModule,
    NgZorroAntdModule,
    MomentModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    ...devModules,
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsInterceptor,
      multi: true,
    },
    {
      provide: DefaultDataServiceConfig,
      useValue: defaultDataServiceConfig
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
