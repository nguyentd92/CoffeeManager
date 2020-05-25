import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './common/crud-service.abstract';
import { of, from } from 'rxjs';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { BillEntity } from '..';
import { ICrudOffline } from './common';
import { BILL_TABLE_NAME } from './common/constants';
import { tap } from 'rxjs/operators';

const testBill: BillEntity = {
  phone: '0935418749',
  table: 20,
  startTime: new Date(),
  discountId: null,
  discountValue: 0,
  orderItems: [],
  subTotal: 300000,
  billDate: new Date(),
  tax: 0,
  customer: {
    id: 'AB877231',
    name: 'Ms Trang',
  },
  counter: {
    id: 'NV231332',
    name: 'Ms Huyền',
  },
  total: 300000,
};

@Injectable({
  providedIn: 'root',
})
export class BillService extends CrudService implements ICrudOffline {
  constructor(
    httpClient: HttpClient,
    private indexDbService: NgxIndexedDBService
  ) {
    super(
      {
        endpoint: 'bills',
      },
      httpClient
    );
  }

  createOffline(bill: BillEntity = testBill) {
    const record: BillEntity = { ...bill, isNotSynced: true };
    return from(this.indexDbService.add(BILL_TABLE_NAME, record));
  }

  getAllOffline() {
    return from(this.indexDbService.getAll(BILL_TABLE_NAME)).pipe(
      tap((e) => console.log('offline', e))
    );
  }

  getOffline(id: string) {
    return from(this.indexDbService.getByID(BILL_TABLE_NAME, id));
  }

  updateOffline(id: string, bill: BillEntity) {
    return from(this.indexDbService.update(BILL_TABLE_NAME, bill));
  }

  deleteOffline(bill: BillEntity) {
    return from(
      this.indexDbService.update(BILL_TABLE_NAME, {...bill, isDeleted: true, id: bill._id })
    );
  }
}
