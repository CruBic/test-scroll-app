import { createAction, props } from '@ngrx/store';
import { PeriodicElement } from '@store/models/element';

export enum ElementActions {
  loadElements = '[Content] Load Elements',
  setElements = '[Content] Set Elements',
  setPager = '[Content] Set Pager',
}

export const loadElements = createAction(ElementActions.loadElements);

export const setElements = createAction(
  ElementActions.setElements,
  props<{ payload: PeriodicElement[] }>()
);

export const setPager = createAction(
  ElementActions.setPager,
  props<{ payload: number }>()
);
