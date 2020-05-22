import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICrudService } from './crud-service.interface';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private httpClient: HttpClient) {}
}
