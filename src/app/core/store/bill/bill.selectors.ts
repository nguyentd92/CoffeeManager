import { createSelector } from '@ngrx/store';
import { BillState } from './bill.state';

export const selectBillState = (state) => state.billState;

export const selectBills = createSelector(selectBillState, (state: BillState) =>
  Object.keys(state.entities).map((key) => ({...state.entities[key], _id: key})).filter(b => !b.isDeleted)
);
