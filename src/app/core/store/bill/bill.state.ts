import { BillEntity } from '../../entities';
import { EntityState } from '@ngrx/entity';

export type BillSort = 'asc' | 'desc' | null;
export enum BillStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  ERROR = 'error'
}

export interface BillState extends EntityState<BillEntity> {
  ids: string[],
  entities: {
    [id: string]: BillEntity
  }
  currentEntity: BillEntity;
  status: BillStatus; 
  error?: string;
  sort: BillSort;
}