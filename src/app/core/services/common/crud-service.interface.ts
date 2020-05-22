import { Observable } from 'rxjs';

export interface ICrudService {
  getAll(): Observable<any>;
  get(): Observable<any>;
  create(): Observable<any>;
  update(): Observable<any>;
  delete(): Observable<any>;
}
