import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { ElementState } from '../state/element.state';
import { selectRouteId } from '@store/reducers/router.reducers';
import { PeriodicElement } from '../models/element';

export const selectContentState = (state: AppState) => state.elements;

export const selectElements = createSelector(selectContentState, (state: ElementState) => state);
export const selectCurrentElementSymbol = createSelector(selectContentState, (state: ElementState) => state.currentElementSymbol);
export const selectCurrentElement = createSelector(
  selectContentState,
  selectRouteId,
  (state: ElementState, routeId) => state.list.find((item: PeriodicElement) => routeId === item.symbol)
);
