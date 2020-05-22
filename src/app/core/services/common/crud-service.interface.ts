import { Observable } from 'rxjs';

export interface ICrudService {
  getAll(): Observable<any>;
  get(id: string): Observable<any>;
  create(entity: any): Observable<any>;
  update(id: string, entity: any): Observable<any>;
  delete(id: string): Observable<any>;
}
