import { createSelector } from '@ngrx/store';
import { AppState } from './app-state.state';

export const selectAppState = (state) => state.appState;

export const selectConnection = createSelector(
  selectAppState,
  (state: AppState) => state.connection
);
