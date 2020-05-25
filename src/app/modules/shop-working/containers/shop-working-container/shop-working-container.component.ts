import { Component, OnInit } from '@angular/core';
import { BillState, BillEntity } from 'src/app/core';
import { Store, select } from '@ngrx/store';
import * as fromBillStore from 'src/app/core/store/bill';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

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

@Component({
  selector: 'app-shop-working-container',
  templateUrl: './shop-working-container.component.html',
  styleUrls: ['./shop-working-container.component.sass'],
})
export class ShopWorkingContainerComponent implements OnInit {
  showMenu = true;
  menuX = 0;
  menuY = 0;

  confirmModal?: NzModalRef;

  constructor(
    private billStore: Store<BillState>,
    private modal: NzModalService
  ) {}

  get bills$() {
    return this.billStore.pipe(select(fromBillStore.selectBills));
  }

  ngOnInit(): void {
    this.billStore.dispatch(fromBillStore.getBillsOffline());
  }

  onRightClick(event) {
    event.preventDefault();

    console.log(event);

    const { pageX, pageY } = event;

    this.menuX = pageX;
    this.menuY = pageY;

    this.showMenu = true;
  }

  showConfirm(bill: BillEntity): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Bạn có chắc chắn muốn xoá?',
      nzContent:
        'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>
        this.billStore.dispatch(
          fromBillStore.deleteBillOffline({ data: bill })
        ),
    });
  }

  addBill() {
    this.billStore.dispatch(fromBillStore.createBillOffline(testBill));
  }
}
