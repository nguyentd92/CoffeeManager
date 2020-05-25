import { createReducer, on } from '@ngrx/store';
import * as billActions from './bill.actions';
import { DrinkState } from './bill.state';
const initialState: DrinkState = {
  items: [],
  currentItem: null,
  status: 'idle',
  error: '',
  sort: null,
};

export const todoReducer = createReducer(
  initialState,

  // GetAll Actions

  on(billActions.getBills, (state) => ({ ...state, status: 'loading' })),
  on(billActions.getBillsSuccess, (state, { data }) => ({
    ...state,
    items: data,
  })),
  on(billActions.getBillFailed, (state, { error }) => ({
    ...state,
    error: error.message,
    status: 'error',
  })),

  // Get Actions

  on(billActions.getBill, (state) => ({ ...state, status: 'loading' })),
  on(billActions.getBillSuccess, (state, { data }) => ({
    ...state,
    currentItem: data,
    status: 'idle',
  })),
  on(billActions.getBillFailed, (state, { error }) => ({
    ...state,
    status: 'error',
    error: error.message,
  })),

  //   Creating Actions

  on(billActions.createBillOnline, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(billActions.createBillOfflineSuccess, (state, { data }) => ({
    ...state,
    items: [...state.items, data],
    status: 'idle',
  })),
  on(billActions.createBillOfflineFailed, (state, { error }) => ({
    ...state,
    status: 'error',
    error: error.message,
  })),

  on(billActions.createBillOffline, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(billActions.createBillOfflineSuccess, (state, { data }) => ({
    ...state,
    items: [...state.items, data],
    status: 'idle',
  })),
  on(billActions.createBillOfflineFailed, (state, { error }) => ({
    ...state,
    status: 'error',
    error: error.message,
  })),

  // Updating Actions

  on(billActions.updateBillOnline, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(billActions.updateBillOnlineSuccess, (state, { data }) => {
    const items = [...state.items];

    items[data._id] = data;

    return {
      ...state,
      items,
      status: 'idle',
    };
  }),
  on(billActions.updateBillOnlineFailed, (state, { error }) => ({
    ...state,
    status: 'error',
    error: error.message,
  })),

  on(billActions.updateBillOffline, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(billActions.updateBillOfflineSuccess, (state, { data }) => {
    const items = [...state.items];

    items[data._id] = data;

    return {
      ...state,
      items,
      status: 'idle',
    };
  }),
  on(billActions.updateBillOfflineFailed, (state, { error }) => ({
    ...state,
    status: 'error',
    error: error.message,
  })),

  //   Deleting Actions

  on(billActions.deleteBillOnline, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(billActions.deleteBillOnlineSuccess, (state, { _id }) => {
    const items = [...state.items];

    const index = items.findIndex((todo) => todo._id == _id);

    items.splice(index, 1);

    return {
      ...state,
      items,
      status: 'idle',
    };
  }),
  on(billActions.deleteBillOnlineFailed, (state, { error }) => ({
    ...state,
    status: 'error',
    error: error.message,
  })),

  on(billActions.deleteBillOffline, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(billActions.deleteBillOfflineSuccess, (state, { _id }) => {
    const items = [...state.items];

    const index = items.findIndex((todo) => todo._id == _id);

    items.splice(index, 1);

    return {
      ...state,
      items,
      status: 'idle',
    };
  }),
  on(billActions.deleteBillOfflineFailed, (state, { error }) => ({
    ...state,
    status: 'error',
    error: error.message,
  }))
);
