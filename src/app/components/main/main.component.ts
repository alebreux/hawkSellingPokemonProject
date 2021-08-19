import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {PokemonApiService} from '../../../service/pokemon-api.service';
import {retrievedPokemonList} from './pokemonRetrievinwData.action';
import {selectPokemons} from '../../state/pokemons.selector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  pokemons$ = this.store.pipe(select(selectPokemons));
  updatedCart = false;

  constructor(
    private pokemonService: PokemonApiService,
    private store: Store,
  ) {
  }

  ngOnInit() {
    this.pokemonService.getPokemons()
      .subscribe((Pokemon) => {
        this.store.dispatch(retrievedPokemonList({Pokemon}));
      });
  }

  launchSearchCall(event) {
    if ((/\s/.test(event))) {
      this.pokemonService.searchPokemonsExact(event)
        .subscribe((Pokemon) => {
          this.store.dispatch(retrievedPokemonList({Pokemon}));
        });
    } else {
      this.pokemonService.searchPokemonsAllusive(event)
        .subscribe((Pokemon) => {
          this.store.dispatch(retrievedPokemonList({Pokemon}));
        });
    }
  }

  changeUpdateValue(event) {
    this.updatedCart = event;
  }

}
