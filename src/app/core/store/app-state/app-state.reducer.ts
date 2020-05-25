import { createReducer, on } from '@ngrx/store';
import { initialAppState } from './app-state.state';

import * as appActions from './app-state.actions';

export const appStateReducer = createReducer(
  initialAppState,
  on(appActions.connectionToUp, (state) => ({
    connection: true,
  })),
  on(appActions.connectionToDown, (state) => ({
    connection: false,
  }))
);
