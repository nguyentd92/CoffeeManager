import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store';
import * as fromAppStore from 'src/app/core/store/app-state';
import { NzMessageService } from 'ng-zorro-antd';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConnectionGuard implements CanActivate, CanLoad {
  private createMessage(): void {
    this.message.create('error', `Không thể truy cập với Offline Mode`);
  }

  constructor(
    private appStore: Store<AppState>,
    private message: NzMessageService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.appStore.pipe(select(fromAppStore.selectConnection)).pipe(
      tap((e) => {
        if (!e) {
          this.createMessage();
        }
      })
    );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.appStore.pipe(select(fromAppStore.selectConnection)).pipe(
      tap((e) => {
        if (!e) {
          this.createMessage();
        }
      })
    );
  }
}
