import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { TableEntity, TableStatus } from 'src/app/core';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.sass'],
})
export class TableItemComponent implements OnInit {
  @Input() data: TableEntity;

  @HostBinding('class.idle')
  get isIdle() {
    if (!this.data) return false;

    return this.data.status === TableStatus.Idle;
  }

  @HostBinding('class.requesting')
  get isRequesting() {
    if (!this.data) return false;

    return (this.data.status as any) === TableStatus.Requesting;
  }

  constructor() {}

  ngOnInit(): void {}
}
