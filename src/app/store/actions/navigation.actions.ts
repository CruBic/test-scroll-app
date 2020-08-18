import { createAction, props } from '@ngrx/store';

export enum NavigationActions {
  navigateToList = '[Navigation] List',
  navigateToDetails = '[Navigation] Details',
  scrollToElement = '[Navigation] Scroll To Element',
  setCurrentElementSymbol = '[Navigation] Set Current Element Symbol',
}

export const navigateToList = createAction(
  NavigationActions.navigateToList,
  props<{ payload: string }>()
);

export const setCurrentElementSymbol = createAction(
  NavigationActions.setCurrentElementSymbol,
  props<{ payload: string }>()
);

export const navigateToDetails = createAction(
  NavigationActions.navigateToDetails,
  props<{ payload: string }>()
);

export const scrollToElement = createAction(NavigationActions.scrollToElement);
