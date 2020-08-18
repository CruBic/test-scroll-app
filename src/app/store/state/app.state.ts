import { RouterReducerState } from '@ngrx/router-store';
import { ElementState, getInitialElementState } from './element.state';

export interface AppState {
  router?: RouterReducerState;
  elements: ElementState;
}

export const initialAppState: AppState = {
  elements: getInitialElementState()
};

export function getInitialState(): AppState {
  return initialAppState;
}
