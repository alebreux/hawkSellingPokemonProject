import {Component, DoCheck, EventEmitter, Input, Output} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectCart} from '../../state/cart.selector';
import {addPokemonToCart, removePokemonFromCart, retrieveCartPokemon} from './panier.action';
import {Pokemon} from '../../../models/Pokemon';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss'],
})
export class PanierComponent implements DoCheck {
  @Input() updateCart = false;
  @Output() cartUpdated = new EventEmitter();
  cart$ = this.store.pipe(select(selectCart));

  constructor(
    private store: Store,
  ) {
  }

  onAdd(pokemon: Pokemon) {
    this.store.dispatch(addPokemonToCart({Pokemon: pokemon}));
  }

  onRemove(pokemonId) {
    this.store.dispatch(removePokemonFromCart({pokemonId}));
  }

  ngDoCheck() {
    if (this.updateCart) {
      this.store.dispatch(retrieveCartPokemon());
      // j'ai un ERROR TypeError: n is undefined qui me bloque dans la récupération des données, je ne comprend pas d'ou il viens


      this.updateCart = false;
      this.cartUpdated.emit(false);
    }
  }
}
