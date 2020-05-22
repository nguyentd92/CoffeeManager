import { Injectable } from '@angular/core';
import { CrudService, MetaCrud } from './common/crud-service.abstract';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DrinkService extends CrudService {
  constructor(httpClient: HttpClient) {
    super(
      {
        endpoint: 'drinks',
      },
      httpClient
    );
  }
}
