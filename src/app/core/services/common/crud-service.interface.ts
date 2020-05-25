import { Observable } from 'rxjs';
import { IResponse } from '../../common/response.interface';

export interface ICrudService {
  getAll(): Observable<IResponse>;
  get(id: string): Observable<IResponse>;
  create(entity: any): Observable<IResponse>;
  update(id: string, entity: any): Observable<IResponse>;
  delete(id: string): Observable<IResponse>;
}
