import * as billActions from './bill.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { BillEntity } from '../..';
import { BillState, BillStatus } from './bill.state';

export const billAdapter = createEntityAdapter<BillEntity>();

const initialState: BillState = billAdapter.getInitialState({
  ids: [],
  entities: {},
  currentEntity: null,
  status: BillStatus.IDLE,
  error: '',
  sort: 'asc',
});

export const billReducer = createReducer(
  initialState,

  //   Get All Actions
  on(billActions.getBills, (state) => ({
    ...state,
    status: BillStatus.LOADING,
  })),
  on(billActions.getBillsSuccess, (state, { data }) =>
    billAdapter.addAll(data, { ...state, status: BillStatus.IDLE })
  ),
  on(billActions.getBillsFailed, (state, { error }) => ({
    ...state,
    error: error.message,
    status: BillStatus.ERROR,
  })),

  // Get Single
  on(billActions.getBill, (state) => ({
    ...state,
    status: BillStatus.LOADING,
  })),
  on(billActions.getBillSuccess, (state, { data }) => ({
    ...state,
    status: BillStatus.IDLE,
    currentEntity: data as BillEntity,
  })),
  on(billActions.getBillFailed, (state, { error }) => ({
    ...state,
    status: BillStatus.ERROR,
    error: error.message,
  })),

  // Create Bill Online
  on(billActions.createBillOnline, (state) => ({
    ...state,
    status: BillStatus.LOADING,
  })),
  on(billActions.createBillOnlineSuccess, (state, { data }) =>
    billAdapter.addOne(data, {
      ...state,
      status: BillStatus.IDLE,
    })
  ),
  on(billActions.createBillOnlineFailed, (state, { error }) => ({
    ...state,
    error: error.message,
    status: BillStatus.ERROR,
  })),

  // Create Bill Offline
  on(billActions.createBillOffline, (state) => ({
    ...state,
    status: BillStatus.LOADING,
  })),
  on(billActions.createBillOfflineSuccess, (state, { data }) =>
    billAdapter.addOne(data, {
      ...state,
      status: BillStatus.IDLE,
    })
  ),
  on(billActions.createBillOfflineFailed, (state, { error }) => ({
    ...state,
    error: error.message,
    status: BillStatus.ERROR,
  })),

  //   Update Bill Online
  on(billActions.updateBillOnline, (state) => ({
    ...state,
    status: BillStatus.LOADING,
  })),
  on(billActions.updateBillOnlineSuccess, (state, { data }) =>
    billAdapter.updateOne(
      {
        id: data._id,
        changes: data,
      },
      {
        ...state,
        status: BillStatus.IDLE,
      }
    )
  ),
  on(billActions.updateBillOnlineFailed, (state, { error }) => ({
    ...state,
    error: error.message,
    status: BillStatus.ERROR,
  })),

  //   Update Bill Offline
  on(billActions.updateBillOffline, (state) => ({
    ...state,
    status: BillStatus.LOADING,
  })),
  on(billActions.updateBillOfflineSuccess, (state, { data }) =>
    billAdapter.updateOne(
      {
        id: data._id,
        changes: data,
      },
      {
        ...state,
        status: BillStatus.IDLE,
      }
    )
  ),
  on(billActions.updateBillOfflineFailed, (state, { error }) => ({
    ...state,
    error: error.message,
    status: BillStatus.ERROR,
  })),

  //   Delete Bill Online
  on(billActions.deleteBillOnline, (state) => ({
    ...state,
    status: BillStatus.LOADING,
  })),
  on(billActions.deleteBillOnlineSuccess, (state, { _id }) =>
    billAdapter.removeOne(_id, {
      ...state,
      status: BillStatus.IDLE,
    })
  ),
  on(billActions.deleteBillOnlineFailed, (state, { error }) => ({
    ...state,
    error: error.message,
    status: BillStatus.ERROR,
  })),

  //   Delete Bill Offline
  on(billActions.deleteBillOffline, (state) => ({
    ...state,
    status: BillStatus.LOADING,
  })),
  on(billActions.deleteBillOfflineSuccess, (state, { _id }) =>
    billAdapter.removeOne(_id, {
      ...state,
      status: BillStatus.IDLE,
    })
  ),
  on(billActions.deleteBillOfflineFailed, (state, { error }) => ({
    ...state,
    error: error.message,
    status: BillStatus.ERROR,
  }))
);