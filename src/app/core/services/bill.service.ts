import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './common/crud-service.abstract';
import { of, from } from 'rxjs';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { BillEntity } from '..';
import { ICrudOffline } from './common';
import { BILL_TABLE_NAME } from './common/constants';
import { tap } from 'rxjs/operators';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class BillService extends CrudService implements ICrudOffline {
  constructor(
    httpClient: HttpClient,
    private indexDbService: NgxIndexedDBService,
    private toastService: ToastService
  ) {
    super(
      {
        endpoint: 'bills',
      },
      httpClient
    );
  }

  createOffline(bill: BillEntity) {
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
      this.indexDbService.update(BILL_TABLE_NAME, {
        ...bill,
        isDeleted: true,
        id: +bill._id,
      })
    ).pipe(
      tap(() =>
        this.toastService.success({
          title: 'Xoá hơn đơn thành công',
          content: `Hoá đơn ${bill._id} được tạo vào lúc ${bill.billDate} đã được xoá.`,
        })
      )
    );
  }
}
