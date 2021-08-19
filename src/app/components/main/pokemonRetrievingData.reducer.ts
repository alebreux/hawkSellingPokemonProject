import {createReducer, on} from '@ngrx/store';
import {Pokemon} from '../../../models/Pokemon';
import {retrievedPokemonList, searchPokemonByName} from './pokemonRetrievinwData.action';

export const initialState: ReadonlyArray<Pokemon> = [];

export const pokemonsReducer = createReducer(
  initialState,
  on(retrievedPokemonList, (state, {Pokemon}) => [...Pokemon]),
  on(searchPokemonByName, (state, {Pokemon}) => [...Pokemon]),
);
