import { DrinkEntity } from '../../entities';

export type DrinkSort = 'asc' | 'desc' | null;
export type DrinkStatus = 'idle' | 'loading' | 'error';

export interface DrinkState {
  items: DrinkEntity[];
  currentItem: DrinkEntity;
  status: DrinkStatus;
  error?: string;
  sort: DrinkSort;
}
