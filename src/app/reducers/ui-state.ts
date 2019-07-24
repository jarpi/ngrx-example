import { Action, createReducer, on } from '@ngrx/store';
import { UiState } from '../models/ui-state.model';
import { loadingStart, loadingStop } from '../actions/loading.actions';

export const initialState: UiState = {
  isAppLoading : false
};

const uiStateReducer = createReducer(
  initialState,
  on(loadingStart, state => ({ ...state, isAppLoading: true })),
  on(loadingStop, state => ({ ...state, isAppLoading: false }))
);

export function reducer(state: UiState | undefined, action: Action) {
  return uiStateReducer;
}
