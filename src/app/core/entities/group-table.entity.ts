import { TableEntity } from './table.entity';

export class GroupTableEntity {
  _id: string;
  name: string;
  order: number;
  table?: TableEntity[];
}
