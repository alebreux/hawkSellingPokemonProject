import {createSelector} from '@ngrx/store';
import {Pokemon} from '../../models/Pokemon';
import {AppState} from '../app.state';

export const selectPokemons = createSelector(
  (state: AppState) => state.pokemons,
  (pokemons: [Pokemon]) => pokemons,
);
