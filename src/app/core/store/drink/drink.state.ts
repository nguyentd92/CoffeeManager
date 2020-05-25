import { DrinkEntity } from '../../entities';
import { EntityState } from '@ngrx/entity';

export type DrinkSort = 'asc' | 'desc' | null;
export enum DrinkStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  ERROR = 'error'
}

export interface DrinkState extends EntityState<DrinkEntity> {
  ids: string[]
  entities: {
    [id: string]: DrinkEntity
  };
  currentEntity: DrinkEntity;
  status: DrinkStatus;
  error?: string;
  sort: DrinkSort;
}