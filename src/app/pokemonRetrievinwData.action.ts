import {createAction, props} from '@ngrx/store';

export const retrievedPokemonList = createAction(
  '[Pokemon.ts List/API] Retrieve Pokemon.ts Success',
  props<{ Pokemon }>(),
);

export const searchPokemonByName = createAction(
  '[Pokemon.ts SEARCH/API] Search Pokemon.ts Success',
  props<{ Pokemon }>(),
);
