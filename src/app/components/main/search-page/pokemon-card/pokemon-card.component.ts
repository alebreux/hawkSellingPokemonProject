import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pokemon} from '../../../../../models/Pokemon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input() pokemon: Pokemon;
  @Output() pokemonAdded = new EventEmitter<Pokemon>();


  constructor(private router: Router) {
  }

  addToCart(pokemon: Pokemon) {
    this.pokemonAdded.emit(pokemon);
  }

}
