import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './common/crud-service.abstract';
import { ICreateOffline } from './common';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BillService extends CrudService implements ICreateOffline {
  constructor(httpClient: HttpClient) {
    super(
      {
        endpoint: 'bills',
      },
      httpClient
    );
  }

  createOffline() {
    return of([1, 2, 3]);
  }

  
}
