import { Observable } from 'rxjs';

export interface ICreateOffline {
  createOffline(): Observable<any>;
}
