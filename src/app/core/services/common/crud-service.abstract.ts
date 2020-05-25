import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICrudService } from './crud-service.interface';
import { map } from 'rxjs/operators';
import { IResponse } from '../../common/response.interface';

export interface MetaCrud {
  endpoint: string;
}

export class CrudService implements ICrudService {
  meta: MetaCrud;
  httpClient: HttpClient;

  constructor(meta: MetaCrud, httpClient: HttpClient) {
    this.meta = meta;
    this.httpClient = httpClient;
  }

  getAll() {
    return this.httpClient
      .get(this.meta.endpoint)
      .pipe(map((res) => res as IResponse));
  }

  get(id: string) {
    return this.httpClient
      .get(`${this.meta.endpoint}/${id}`)
      .pipe(map((res) => res as IResponse));
  }

  create(entity: any) {
    return this.httpClient
      .post(`${this.meta.endpoint}`, entity)
      .pipe(map((res) => res as IResponse));
  }

  update(id: string, entity: any) {
    return this.httpClient
      .put(`${this.meta.endpoint}/${id}`, entity)
      .pipe(map((res) => res as IResponse));
  }

  delete(id: string) {
    return this.httpClient
      .delete(`${this.meta.endpoint}/${id}`)
      .pipe(map((res) => res as IResponse));
  }
}
