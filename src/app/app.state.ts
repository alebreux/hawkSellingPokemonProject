import {Pokemon} from '../models/Pokemon';

// tslint:disable-next-line:interface-name
export interface AppState {
  pokemons: ReadonlyArray<Pokemon>;
  cart: Pokemon[];
}
