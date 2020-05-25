import { createAction, ActionType, props } from '@ngrx/store';
import {
  GetAllError,
  GetError,
  CreateError,
  UpdateError,
  DeleteError,
} from '../../types';
import { DrinkSort } from './drink.state';
import { DrinkEntity } from '../..';

export const GET_DRINKS = '@Drink/GetAll';
export const GET_DRINKS_SUCCESS = '@Drink/GetAllSuccess';
export const GET_DRINKS_FAILED = '@Drink/GetAllFailed';

export const GET_DRINK = '@Drink/Get';
export const GET_DRINK_SUCCESS = '@Drink/GetSuccess';
export const GET_DRINK_FAILED = '@Drink/GetFailed';

export const UPDATE_DRINK = '@Drink/Update';
export const UPDATE_DRINK_SUCCESS = '@Drink/UpdateSuccess';
export const UPDATE_DRINK_FAILED = '@Drink/UpdateFailed';

export const CREATE_DRINK = '@Drink/Create';
export const CREATE_DRINK_SUCCESS = '@Drink/CreateSuccess';
export const CREATE_DRINK_FAILED = '@Drink/CreateFailed';

export const DELETE_DRINK = '@Drink/Delete';
export const DELETE_DRINK_SUCCESS = '@Drink/DeleteSuccess';
export const DELETE_DRINK_FAILED = '@Drink/DeleteFailed';

export const SORTING_DRINKS = '@Drink/Sorting';

export const getDrinks = createAction(GET_DRINKS);
export const getDrinksSuccess = createAction(
  GET_DRINKS_SUCCESS,
  props<{ data: DrinkEntity[] }>()
);
export const getDrinksFailed = createAction(
  GET_DRINKS_FAILED,
  props<{ error: GetAllError }>()
);

export const getDrink = createAction(GET_DRINK, props<{ id: string }>());
export const getDrinkSuccess = createAction(
  GET_DRINK_SUCCESS,
  props<{ data: DrinkEntity }>()
);
export const getDrinkFailed = createAction(
  GET_DRINK_FAILED,
  props<{ error: GetError }>()
);

export const createDrink = createAction(CREATE_DRINK, props<DrinkEntity>());
export const createDrinkSuccess = createAction(
  CREATE_DRINK_SUCCESS,
  props<{ data: DrinkEntity }>()
);
export const createDrinkFailed = createAction(
  CREATE_DRINK_FAILED,
  props<{ error: CreateError }>()
);

export const updateDrink = createAction(UPDATE_DRINK, props<DrinkEntity>());
export const updateDrinkSuccess = createAction(
  UPDATE_DRINK_SUCCESS,
  props<{ data: DrinkEntity }>()
);
export const updateDrinkFailed = createAction(
  UPDATE_DRINK_FAILED,
  props<{ error: UpdateError }>()
);

export const deleteDrink = createAction(DELETE_DRINK, props<{_id: string}>());
export const deleteDrinkSuccess = createAction(
  DELETE_DRINK_SUCCESS,
  props<{_id: string}>()
);
export const deleteDrinkFailed = createAction(
  DELETE_DRINK_FAILED,
  props<{ error: DeleteError }>()
);

export const sortingDrinks = createAction(
  SORTING_DRINKS,
  props<{ sort: DrinkSort }>()
);

export type DrinkActions =
  | ActionType<typeof getDrinks>
  | ActionType<typeof getDrinksSuccess>
  | ActionType<typeof getDrinksFailed>
  | ActionType<typeof getDrink>
  | ActionType<typeof getDrinksSuccess>
  | ActionType<typeof getDrinkFailed>
  | ActionType<typeof createDrink>
  | ActionType<typeof createDrinkSuccess>
  | ActionType<typeof createDrinkFailed>
  | ActionType<typeof updateDrink>
  | ActionType<typeof updateDrinkSuccess>
  | ActionType<typeof updateDrinkFailed>
  | ActionType<typeof deleteDrink>
  | ActionType<typeof deleteDrinkSuccess>
  | ActionType<typeof deleteDrinkFailed>
  | ActionType<typeof sortingDrinks>;
