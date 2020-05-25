import { createReducer, on } from '@ngrx/store';
import * as drinkActions from './drink.actions'
import { DrinkState } from './drink.state';
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

  on(drinkActions.getDrinks, (state) => ({ ...state, status: 'loading' })),
  on(drinkActions.getDrinksSuccess, (state, { data }) => ({
    ...state,
    items: data,
  })),
  on(drinkActions.getDrinksFailed, (state, { error }) => ({
    ...state,
    error: error.message,
    status: 'error',
  })),

  // Get Actions

  on(drinkActions.getDrink, (state) => ({ ...state, status: 'loading' })),
  on(drinkActions.getDrinkSuccess, (state, { data }) => ({
    ...state,
    currentItem: data,
    status: 'idle',
  })),
  on(drinkActions.getDrinkFailed, (state, { error }) => ({
    ...state,
    status: 'error',
    error: error.message,
  })),

  //   Creating Actions

  on(drinkActions.createDrink, (state) => ({ ...state, status: 'loading' })),
  on(drinkActions.createDrinkSuccess, (state, { data }) => ({
    ...state,
    items: [...state.items, data],
    status: 'idle',
  })),
  on(drinkActions.createDrinkFailed, (state, { error }) => ({
    ...state,
    status: 'error',
    error: error.message,
  })),

  // Updating Actions

  on(drinkActions.updateDrink, (state) => ({ ...state, status: 'loading' })),
  on(drinkActions.updateDrinkSuccess, (state, { data }) => {
    const items = [...state.items];

    items[data._id] = data;

    return {
      ...state,
      items,
      status: 'idle',
    };
  }),
  on(drinkActions.updateDrinkFailed, (state, { error }) => ({
    ...state,
    status: 'error',
    error: error.message,
  })),

  //   Deleting Actions

  on(drinkActions.deleteDrink, (state) => ({ ...state, status: 'loading' })),
  on(drinkActions.deleteDrinkSuccess, (state, { _id }) => {
    const items = [...state.items];

    const index = items.findIndex((todo) => todo._id == _id);

    items.splice(index, 1);

    return {
      ...state,
      items,
      status: 'idle',
    };
  }),
  on(drinkActions.deleteDrinkFailed, (state, { error }) => ({
    ...state,
    status: 'error',
    error: error.message,
  }))
);
