import {createAction, props} from '@ngrx/store';

export const addPokemonToCart = createAction(
  '[Pokemon.ts List] Add Pokemon To Card',
  props<{ Pokemon }>(),
);

export const removePokemonFromCart = createAction(
  '[Pokemon.ts SEARCH/API] Search Pokemon.ts Success',
  props<{ pokemonId }>(),
);
export const retrieveCartPokemon = createAction(
  '[Pokemon.ts SEARCH/API] Search Pokemon.ts Success',
);
