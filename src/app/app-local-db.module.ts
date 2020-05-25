import { NgModule } from '@angular/core';

import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { BILL_TABLE_NAME } from './core/services/common';

const dbConfig: DBConfig = {
  name: 'Coffee',
  version: 1,
  objectStoresMeta: [
    {
      store: BILL_TABLE_NAME,
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'phone', keypath: 'phone', options: { unique: false } },
        { name: 'discountId', keypath: 'payAt', options: { unique: false } },
        { name: 'discountValue', keypath: 'total', options: { unique: false } },
        { name: 'orderItems', keypath: 'items', options: { unique: false } },
        { name: 'subTotal', keypath: 'discount', options: { unique: false } },
        { name: 'tax', keypath: 'discount', options: { unique: false } },
        { name: 'total', keypath: 'discount', options: { unique: false } },
        { name: 'customer', keypath: 'discount', options: { unique: false } },
        { name: 'counter', keypath: 'discount', options: { unique: false } },
        { name: 'billDate', keypath: 'discount', options: { unique: false } },
        { name: 'isNotSynced', keypath: 'discount', options: { unique: false } },
      ],
    },
  ],
};

@NgModule({
  declarations: [],
  imports: [NgxIndexedDBModule.forRoot(dbConfig)],
})
export class AppLocalDbModule {}
