import {createReducer, on} from '@ngrx/store';
import {Pokemon} from '../../../models/Pokemon';
import {addPokemonToCart, removePokemonFromCart, retrieveCartPokemon} from './panier.action';

export const initialState: Pokemon[] = [];

export const panierReducer = createReducer(
  initialState,
  on(addPokemonToCart, (state, {Pokemon}) => {
    return [...state, Pokemon];
  }),
  on(removePokemonFromCart, (state, {pokemonId}) => {
    if (state.indexOf(pokemonId) > -1) {
      const foundIndex = state.findIndex(({id}) => id === pokemonId);
      return state.filter((_, index) => index !== foundIndex);
    }
  }),
  on(retrieveCartPokemon, (state) => {
    return state;
  }),
);
