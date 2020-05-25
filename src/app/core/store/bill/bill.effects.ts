import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import * as billActions from './bill.actions';
import { BillEntity } from '../..';
import { BillService } from '../../services/bill.service';

@Injectable()
export class billEffects {
  @Effect() loadBills$ = createEffect(() =>
    this.actions$.pipe(
      ofType(billActions.getBills),
      mergeMap(() => this.billService.getAll()),
      map(({ data }) =>
        billActions.getBillsSuccess({ data: data as BillEntity[] })
      ),
      catchError((error) => of(billActions.getBillsFailed({ error })))
    )
  );

  @Effect() loadBuildOffline$ = createEffect(() =>
    this.actions$.pipe(
      ofType(billActions.getBillsOffline),
      mergeMap(() => this.billService.getAllOffline()),
      map((data) =>
        billActions.getBillsOfflineSuccess({ data: data as BillEntity[] })
      ),
      catchError((error) => of(billActions.getBillsOfflineFailed({ error })))
    )
  );

  loadBill$ = createEffect(() =>
    this.actions$.pipe(
      ofType(billActions.getBill),
      mergeMap(({ id }) => this.billService.get(id)),
      map(({ data }) =>
        billActions.getBillSuccess({ data: data as BillEntity })
      ),
      catchError((error) => of(billActions.getBillFailed({ error })))
    )
  );

  createBillOnline$ = createEffect(() =>
    this.actions$.pipe(
      ofType(billActions.createBillOnline),
      mergeMap((bill) => this.billService.create(bill)),
      map(({ data }) => billActions.createBillOnlineSuccess({ data: data })),
      catchError((error) => of(billActions.createBillOnlineFailed({ error })))
    )
  );

  createBillOffline$ = createEffect(() => {
    let data = null;

    return this.actions$.pipe(
      ofType(billActions.createBillOffline),
      mergeMap((bill) => {
        data = bill;
        return this.billService.createOffline(bill);
      }),
      map((index) =>
        billActions.createBillOfflineSuccess({ data: { ...data, _id: index } })
      ),
      catchError((error) => of(billActions.createBillOfflineFailed({ error })))
    );
  });

  updateBillOnline$ = createEffect(() =>
    this.actions$.pipe(
      ofType(billActions.updateBillOnline),
      mergeMap((bill) => this.billService.update(bill._id, bill)),
      map(({ data }) =>
        billActions.updateBillOnlineSuccess({ data: data as BillEntity })
      ),
      catchError((error) => of(billActions.updateBillOnlineFailed({ error })))
    )
  );

  updateBillOffline$ = createEffect(() =>
    this.actions$.pipe(
      ofType(billActions.updateBillOffline),
      mergeMap((bill) => this.billService.updateOffline(bill._id, bill)),
      map(({ data }) =>
        billActions.updateBillOfflineSuccess({ data: data as BillEntity })
      ),
      catchError((error) => of(billActions.updateBillOfflineFailed({ error })))
    )
  );

  deleteBillOnline$ = createEffect(() =>
    this.actions$.pipe(
      ofType(billActions.deleteBillOnline),
      mergeMap((bill) => this.billService.delete(bill._id)),
      map(({ _id }: any) => billActions.deleteBillOnlineSuccess({ _id })),
      catchError((error) => of(billActions.updateBillOnlineFailed({ error })))
    )
  );

  deleteBillOffline$ = createEffect(() =>
    this.actions$.pipe(
      ofType(billActions.deleteBillOffline),
      mergeMap(({data}) => this.billService.deleteOffline(data)),
      map(({ _id }: any) => billActions.deleteBillOfflineSuccess({ _id })),
      catchError((error) => of(billActions.deleteBillOfflineFailed({ error })))
    )
  );

  constructor(private actions$: Actions, private billService: BillService) {}
}
