import { createAction, props, ActionType } from '@ngrx/store';
import {
  GetAllError,
  GetError,
  CreateError,
  UpdateError,
  DeleteError,
  BillEntity,
} from '../..';
import { BillSort } from './bill.state';

export const CREATE_BILL_OFFLINE = '@Bill/CreateOffline';
export const CREATE_BILL_OFFLINE_SUCCESS = '@Bill/CreateOfflineSuccess';
export const CREATE_BILL_OFFLINE_FAILED = '@Bill/CreateOfflineFailed';

export const CREATE_BILL_ONLINE = '@Bill/CreateOnline';
export const CREATE_BILL_ONLINE_SUCCESS = '@Bill/CreateOnlineSuccess';
export const CREATE_BILL_ONLINE_FAILED = '@Bill/CreateOnLineFailed';

export const GET_BILLS = '@Bill/GetBills';
export const GET_BILLS_SUCCESS = '@Bill/GetBillsSuccess';
export const GET_BILLS_FAILED = '@Bill/GetBillsFailed';

export const GET_BILLS_OFFLINE = '@Bill/GetBillsOffline';
export const GET_BILLS_OFFLINE_SUCCESS = '@Bill/GetBillsOfflineSuccess';
export const GET_BILLS_OFFLINE_FAILED = '@Bill/GetBillsOfflineFailed';

export const GET_BILL = '@Bill/GetBill';
export const GET_BILL_SUCCESS = '@Bill/GetBillSuccess';
export const GET_BILL_FAILED = '@Bill/GetBillFailed';

export const UPDATE_BILL_ONLINE = '@Bill/updateBillOnline';
export const UPDATE_BILL_ONLINE_SUCCESS = '@Bill/updateBillOnlineSuccess';
export const UPDATE_BILL_ONLINE_FAILED = '@Bill/updateBillOnlineFailed';

export const UPDATE_BILL_OFFLINE = '@Bill/updateBillOffline';
export const UPDATE_BILL_OFFLINE_SUCCESS = '@Bill/updateBillOfflineSuccess';
export const UPDATE_BILL_OFFLINE_FAILED = '@Bill/updateBillOfflineFailed';

export const DELETE_BILL_ONLINE = '@Bill/DeleteOnlineBill';
export const DELETE_BILL_ONLINE_SUCCESS = '@Bill/DeleteBillOnlineSuccess';
export const DELETE_BILL_ONLINE_FAILED = '@Bill/DeleteBillOnlineFailed';

export const DELETE_BILL_OFFLINE = '@Bill/DeleteBillOffline';
export const DELETE_BILL_OFFLINE_SUCCESS = '@Bill/DeleteBillOfflineSuccess';
export const DELETE_BILL_OFFLINE_FAILED = '@Bill/DeleteBillOfflineFailed';

export const SORTING_BILLS = '@Bill/Sorting';

// Get List of Bill
export const getBills = createAction(GET_BILLS);
export const getBillsSuccess = createAction(
  GET_BILLS_SUCCESS,
  props<{ data: BillEntity[] }>()
);
export const getBillsFailed = createAction(
  GET_BILLS_FAILED,
  props<{ error: GetAllError }>()
);

// Get List of Bill Offline
export const getBillsOffline = createAction(GET_BILLS_OFFLINE);
export const getBillsOfflineSuccess = createAction(
  GET_BILLS_OFFLINE_SUCCESS,
  props<{ data: BillEntity[] }>()
);
export const getBillsOfflineFailed = createAction(
  GET_BILLS_OFFLINE_FAILED,
  props<{ error: GetAllError }>()
);

// Get Single of Bill
export const getBill = createAction(GET_BILL, props<{ id: string }>());
export const getBillSuccess = createAction(
  GET_BILL_SUCCESS,
  props<{ data: BillEntity }>()
);
export const getBillFailed = createAction(
  GET_BILL_FAILED,
  props<{ error: GetError }>()
);

// Create Bill Online
export const createBillOnline = createAction(
  CREATE_BILL_ONLINE,
  props<BillEntity>()
);
export const createBillOnlineSuccess = createAction(
  CREATE_BILL_ONLINE_SUCCESS,
  props<{ data: BillEntity }>()
);
export const createBillOnlineFailed = createAction(
  CREATE_BILL_ONLINE_FAILED,
  props<{ error: CreateError }>()
);

// Create Bill Offline
export const createBillOffline = createAction(
  CREATE_BILL_OFFLINE,
  props<BillEntity>()
);

export const createBillOfflineSuccess = createAction(
  CREATE_BILL_OFFLINE_SUCCESS,
  props<{ data: BillEntity }>()
);
export const createBillOfflineFailed = createAction(
  CREATE_BILL_OFFLINE_FAILED,
  props<{ error: CreateError }>()
);

// Update Bill Online
export const updateBillOnline = createAction(
  UPDATE_BILL_ONLINE,
  props<BillEntity>()
);
export const updateBillOnlineSuccess = createAction(
  UPDATE_BILL_ONLINE_SUCCESS,
  props<{ data: BillEntity }>()
);
export const updateBillOnlineFailed = createAction(
  UPDATE_BILL_ONLINE_FAILED,
  props<{ error: UpdateError }>()
);

// Update Bill Offline
export const updateBillOffline = createAction(
  UPDATE_BILL_OFFLINE,
  props<BillEntity>()
);
export const updateBillOfflineSuccess = createAction(
  UPDATE_BILL_OFFLINE_SUCCESS,
  props<{ data: BillEntity }>()
);
export const updateBillOfflineFailed = createAction(
  UPDATE_BILL_OFFLINE_FAILED,
  props<{ error: UpdateError }>()
);

// Delete Bill Online
export const deleteBillOnline = createAction(
  DELETE_BILL_ONLINE,
  props<{ _id: string }>()
);
export const deleteBillOnlineSuccess = createAction(
  DELETE_BILL_ONLINE_SUCCESS,
  props<{ _id: string }>()
);
export const deleteBillOnlineFailed = createAction(
  DELETE_BILL_ONLINE_FAILED,
  props<{ error: DeleteError }>()
);

// Delete Bill Offline
export const deleteBillOffline = createAction(
  DELETE_BILL_OFFLINE,
  props<{ data: BillEntity }>()
);
export const deleteBillOfflineSuccess = createAction(
  DELETE_BILL_OFFLINE_SUCCESS,
  props<{ _id: string }>()
);
export const deleteBillOfflineFailed = createAction(
  DELETE_BILL_OFFLINE_FAILED,
  props<{ error: DeleteError }>()
);

export const sortingBills = createAction(
  SORTING_BILLS,
  props<{ sort: BillSort }>()
);

export type BillActions =
  | ActionType<typeof getBills>
  | ActionType<typeof getBillsSuccess>
  | ActionType<typeof getBillsFailed>
  | ActionType<typeof getBillsOffline>
  | ActionType<typeof getBillsOfflineSuccess>
  | ActionType<typeof getBillsOfflineFailed>
  | ActionType<typeof getBill>
  | ActionType<typeof getBillsSuccess>
  | ActionType<typeof getBillFailed>
  | ActionType<typeof createBillOnline>
  | ActionType<typeof createBillOnlineSuccess>
  | ActionType<typeof createBillOnlineFailed>
  | ActionType<typeof createBillOffline>
  | ActionType<typeof createBillOfflineSuccess>
  | ActionType<typeof createBillOfflineFailed>
  | ActionType<typeof updateBillOnline>
  | ActionType<typeof updateBillOnlineSuccess>
  | ActionType<typeof updateBillOnlineFailed>
  | ActionType<typeof updateBillOffline>
  | ActionType<typeof updateBillOfflineSuccess>
  | ActionType<typeof updateBillOfflineFailed>
  | ActionType<typeof deleteBillOnline>
  | ActionType<typeof deleteBillOnlineSuccess>
  | ActionType<typeof deleteBillOnlineFailed>
  | ActionType<typeof deleteBillOffline>
  | ActionType<typeof deleteBillOfflineSuccess>
  | ActionType<typeof deleteBillOfflineFailed>
  | ActionType<typeof sortingBills>;

