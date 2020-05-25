import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import * as drinkActions from './drink.actions';
import { DrinkService } from '../../services';
import { DrinkEntity } from '../..';

@Injectable()
export class drinkEffects {
  @Effect() loadDrinks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(drinkActions.getDrinks),
      mergeMap(() => this.drinkService.getAll()),
      map(({data}) => drinkActions.getDrinksSuccess({ data: data as DrinkEntity[] })),
      catchError((error) => of(drinkActions.getDrinksFailed({ error })))
    )
  );

  loadDrink$ = createEffect(() =>
    this.actions$.pipe(
      ofType(drinkActions.getDrink),
      mergeMap(({ id }) => this.drinkService.get(id)),
      map(({data}) => drinkActions.getDrinkSuccess({ data: data as DrinkEntity })),
      catchError((error) => of(drinkActions.getDrinkFailed({ error })))
    )
  );

  createDrink$ = createEffect(() =>
    this.actions$.pipe(
      ofType(drinkActions.createDrink),
      mergeMap((drink) => this.drinkService.create(drink)),
      map(({data}) => drinkActions.createDrinkSuccess({ data: data })),
      catchError((error) => of(drinkActions.createDrinkFailed({ error })))
    )
  );

  updateDrink$ = createEffect(() =>
    this.actions$.pipe(
      ofType(drinkActions.updateDrink),
      mergeMap((drink) => this.drinkService.update(drink._id, drink)),
      map(({data}) => drinkActions.updateDrinkSuccess({data: data as DrinkEntity})),
      catchError((error) => of(drinkActions.updateDrinkFailed({ error })))
    )
  );

  deleteDrink$ = createEffect(() =>
    this.actions$.pipe(
      ofType(drinkActions.deleteDrink),
      mergeMap((drink) => this.drinkService.delete(drink._id)),
      map(({_id}: any) => drinkActions.deleteDrinkSuccess({_id})),
      catchError((error) => of(drinkActions.updateDrinkFailed({ error })))
    )
  );

  constructor(private actions$: Actions, private drinkService: DrinkService) {}
}
