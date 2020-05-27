import { Injectable } from '@angular/core';
import { BillEntity, OrderItem } from 'src/app/core';
import { NzModalService } from 'ng-zorro-antd';
import { UpsertBillComponent, BillViewComponent } from '../components';

@Injectable()
export class ShopWorkingService {
  constructor(private nzModalService: NzModalService) {}

  openEditModal(bill: BillEntity) {
    this.nzModalService.create({
      nzTitle: `Cập nhật hoá đơn số ${bill._id}`,
      nzContent: UpsertBillComponent,
      nzGetContainer: () => document.body,
      nzOnOk: () => console.log('Update Success'),
    });
  }

  openBillViewModal(bill: BillEntity) {
    this.nzModalService.create({
      nzTitle: `Hoá đơn số ${bill._id}`,
      nzContent: BillViewComponent,
      nzGetContainer: () => document.body,
      // nzOnOk: () => console.log('Update Success'),
    });
  }

  calBillTotal(bill: BillEntity): BillEntity {
    const subTotal = bill.orderItems.reduce(
      (total, e) => this.calOrderItemValue(e) + total,
      0
    );

    const discountValue = this.calDiscountValue(bill);
    const total = bill.subTotal;

    return {
      ...bill,
      discountValue,
      subTotal,
      total,
    };
  }

  private calOrderItemValue(orderItem: OrderItem) {
    return orderItem.quantity * orderItem.size.M;
  }

  private calDiscountValue(bill) {
    return bill.discountValue || 0;
  }
}
