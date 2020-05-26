import { GroupTableEntity } from './group-table.entity';

export enum TableStatus {
  Empty = 'Empty', // Table is Empty
  Requesting = 'Requesting', // Table is Requesting
  Idle = 'Idle', // Table is Idle
}

export class TableEntity {
  _id: string;
  name: string;
  groupTableId: string;
  group: GroupTableEntity;
  status: TableStatus;
}
