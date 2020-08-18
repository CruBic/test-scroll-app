import { routerReducer } from '@ngrx/router-store';
import { Action, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { AppState } from '../state/app.state';

export const reducers: ActionReducerMap<any, Action> = {
  router: routerReducer
};

export const selectRouter = createFeatureSelector<
  AppState,
  fromRouter.RouterReducerState<any>
  >('router');

const {
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(selectRouter);

export const selectRouteId = selectRouteParam('id');
export const getUrl = selectUrl;

export const getCurrentUrl = createSelector(
  selectRouter,
  selectRouteId,
  (state: fromRouter.RouterReducerState) => state.state && state.state.url
);

export const getUrlId = createSelector(
  selectRouter,
  selectRouteId,
  (state: fromRouter.RouterReducerState, urlId) => urlId
);
