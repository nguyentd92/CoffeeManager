import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BillState, BillEntity } from 'src/app/core';
import * as fromBillStore from 'src/app/core/store/bill';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-today-logs-container',
  templateUrl: './today-logs-container.component.html',
  styleUrls: ['./today-logs-container.component.sass'],
})
export class TodayLogsContainerComponent implements OnInit {
  
  currentBill: BillEntity = null;

  @ViewChild('menu', {static: false}) menu

  constructor(
    private billStore: Store<BillState>,
    private modal: NzModalService
  ) {}

  get bills$() {
    return this.billStore.pipe(select(fromBillStore.selectBills));
  }

  ngOnInit() {
    this.billStore.dispatch(fromBillStore.getBillsOffline());
  }

  onClick(bill: BillEntity) {
    this.currentBill = bill    
  }

  showConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Bạn có chắc chắn muốn xoá?',
      nzContent: `Xoá hoá đơn số ${this.currentBill._id}, được tạo vào lúc ${this.currentBill.startTime}`,
      nzOnOk: () =>
        this.billStore.dispatch(
          fromBillStore.deleteBillOffline({ data: this.currentBill })
        ),
    });
  }

  onRightClick(bill, event) {
    event.preventDefault();

    event.target.click(bill)
  }
}
