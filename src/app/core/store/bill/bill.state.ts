import { BillEntity } from '../../entities';

export type BillSort = 'asc' | 'desc' | null;
export type BillStatus = 'idle' | 'loading' | 'error';

export interface DrinkState {
  items: BillEntity[];
  currentItem: BillEntity;
  status: BillStatus;
  error?: string;
  sort: BillSort;
}
