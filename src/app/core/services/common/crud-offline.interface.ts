import { Observable } from 'rxjs';

export interface ICrudOffline {
  getAllOffline(): Observable<any>;

  getOffline(id: string) : Observable<any>;

  createOffline(data: any): Observable<any>;

  updateOffline(id: string, data: any): Observable<any>;

  deleteOffline(data: any): Observable<any>;
}
