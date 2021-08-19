import {createSelector} from '@ngrx/store';
import {Pokemon} from '../../models/Pokemon';
import {AppState} from '../app.state';

export const selectCart = createSelector(
  (state: AppState) => {
    return state.hasOwnProperty('cart') ? state.cart : '';
  },
  (cart: [Pokemon]) => cart,
);
