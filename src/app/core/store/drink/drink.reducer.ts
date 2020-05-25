import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';

import * as drinkActions from './drink.actions';
import { DrinkState, DrinkStatus } from './drink.state';
import { DrinkEntity } from '../..';

const drinkAdapter = createEntityAdapter<DrinkEntity>();

const initialState: DrinkState = drinkAdapter.getInitialState({
  ids: [],
  entities: {},
  currentEntity: null,
  status: DrinkStatus.IDLE, 
  error: '',
  sort: null,
});

export const drinkReducer = createReducer(
  initialState,

  // GetAll Actions

  on(drinkActions.getDrinks, (state) => ({ ...state, status: DrinkStatus.LOADING })),
  on(drinkActions.getDrinksSuccess, (state, { data }) => {
    return drinkAdapter.addAll(data, { ...state, status: DrinkStatus.IDLE });
  }),
  on(drinkActions.getDrinksFailed, (state, { error }) => ({
    ...state,
    error: error.message,
    status: DrinkStatus.ERROR,
  })),

  // Get Actions

  on(drinkActions.getDrink, (state) => ({ ...state, status: DrinkStatus.LOADING })),
  on(
    drinkActions.getDrinkSuccess,
    (state, { data }): DrinkState => ({
      ...state,
      currentEntity: data as DrinkEntity,
      status: DrinkStatus.IDLE,
    })
  ),
  on(drinkActions.getDrinkFailed, (state, { error }) => ({
    ...state,
    status: DrinkStatus.ERROR,
    error: error.message,
  })),

  //   Creating Actions

  on(drinkActions.createDrink, (state) => ({ ...state, status: DrinkStatus.LOADING })),
  on(drinkActions.createDrinkSuccess, (state, { data }) =>
    drinkAdapter.addOne(data, { ...state, loading: DrinkStatus.IDLE })
  ),
  on(drinkActions.createDrinkFailed, (state, { error }) => ({
    ...state,
    status: DrinkStatus.ERROR,
    error: error.message,
  })),

  // Updating Actions

  on(drinkActions.updateDrink, (state) => ({ ...state, status: DrinkStatus.LOADING })),
  on(drinkActions.updateDrinkSuccess, (state, { data }) =>
    drinkAdapter.updateOne(
      {
        id: data._id,
        changes: data,
      },
      { ...state, status: DrinkStatus.IDLE }
    )
  ),
  on(drinkActions.updateDrinkFailed, (state, { error }) => ({
    ...state,
    status: DrinkStatus.ERROR,
    error: error.message,
  })),

  //   Deleting Actions

  on(drinkActions.deleteDrink, (state) => ({ ...state, status: DrinkStatus.LOADING })),
  on(drinkActions.deleteDrinkSuccess, (state, { _id }) =>
    drinkAdapter.removeOne(_id, { ...state, status: DrinkStatus.IDLE })
  ),
  on(drinkActions.deleteDrinkFailed, (state, { error }) => ({
    ...state,
    status: DrinkStatus.ERROR,
    error: error.message,
  }))
);

const {
  selectIds,
  selectAll,
  selectEntities,
  selectTotal,
} = drinkAdapter.getSelectors();

export const selectDrinkIds = selectIds;
export const selectDrinkAll = selectAll;
export const selectDrinkEntity = selectEntities;
export const selectDrinkTotal = selectTotal;
