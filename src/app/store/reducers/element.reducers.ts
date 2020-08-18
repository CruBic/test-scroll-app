import { Action, createReducer, on } from '@ngrx/store';
import { setElements, setPager } from '../actions/element.actions';
import { ElementState, getInitialElementState } from '../state/element.state';
import { setCurrentElementSymbol } from '@store/actions/navigation.actions';

export const featureKey = 'elements';

const indexReducer = createReducer(
  getInitialElementState(),
  on(setElements, (state, { payload }) => ({...state, list: payload})),
  on(setPager, (state, { payload }) => ({...state, pager: payload})),
  on(setCurrentElementSymbol, (state, { payload }) => ({...state, currentElementSymbol: payload})),
);

export function elementReducers(state: ElementState | undefined, action: Action): any {
  return indexReducer(state, action);
}
