import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app-state';
import { drinkReducer, DrinkState, DrinkEffects } from './drink';
import { billReducer, BillState, BillEffects } from './bill';
import { appStateReducer } from './app-state';

export * from './drink';
export * from './app-state';
export * from './bill';
export * from './entity-metadata'

interface State {
  appState: AppState;
  billState: BillState;
  drinkState: DrinkState;
}

export const reducers: ActionReducerMap<State> = {
  appState: appStateReducer,
  billState: billReducer,
  drinkState: drinkReducer,
};

export const effects = [
  DrinkEffects,
  BillEffects
]