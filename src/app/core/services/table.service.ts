import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory, EntityCollectionServiceBase } from '@ngrx/data';
import { TableEntity } from '../entities';

@Injectable({
  providedIn: 'root',
})
export class TableService extends EntityCollectionServiceBase<TableEntity> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Table', serviceElementsFactory);
  }
}
