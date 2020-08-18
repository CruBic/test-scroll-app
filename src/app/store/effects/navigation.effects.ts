import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { filter, map, tap, withLatestFrom } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NavigationActions } from '@store/actions/navigation.actions';
import { ViewportScroller } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '@store/state/app.state';
import { selectCurrentElementSymbol } from '@store/selectors/element.selectors';

@Injectable()
export class NavigationEffects {
  navigateToList$ = createEffect(() =>
      this.actions$.pipe(
        ofType(NavigationActions.navigateToList),
        tap(() => this.router.navigate(['list']))
      ),
    { dispatch: false }
  );
  navigateToDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NavigationActions.navigateToDetails),
      tap((action: any) => this.router.navigate(['details', action.payload])),
      map((action: any) => ({ type: NavigationActions.setCurrentElementSymbol, payload: action.payload }))
)
  );
  scrollToElement$ = createEffect(() =>
      this.actions$.pipe(
        ofType(NavigationActions.scrollToElement),
        withLatestFrom(this.store.select(selectCurrentElementSymbol)),
        filter(([action, symbol]) => !!symbol),
        tap(([action, symbol]) => this.viewportScroller.scrollToAnchor(`row_${symbol}`))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private viewportScroller: ViewportScroller,
    private router: Router,
    private store: Store<AppState>
  ) {}
}
