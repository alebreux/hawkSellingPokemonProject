import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime, Subject, Subscription} from 'rxjs';
import {Pokemon} from '../../../../models/Pokemon';
import {addPokemonToCart, removePokemonFromCart} from '../../panier/panier.action';
import {select, Store} from '@ngrx/store';
import {selectCart} from '../../../state/cart.selector';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  // tslint:disable-next-line:use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None,
})
export class SearchPageComponent implements OnInit, OnDestroy {
  cart$ = this.store.pipe(select(selectCart));
  @Input() pokemons;
  @Output() searchEvent = new EventEmitter();
  @Output() updatedCart = new EventEmitter();
  form: FormGroup;
  debounceTime = 500;
  private subscription: Subscription;
  private searchChanged: Subject<string> = new Subject<string>();

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
  ) {
  }

  ngOnInit() {
    this.subscription = this.searchChanged
      .pipe(
        debounceTime(this.debounceTime),
      )
      .subscribe(() => {
        this.callSearchFunction();
      });
    this.form = this.formBuilder.group({
      searchInput: [''],
    });
  }

  callSearchFunction() {
    this.searchEvent.emit(this.form.get('searchInput').value);
  }

  searchInputChanged() {
    this.searchChanged.next('search changed');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAdd(Pokemon: Pokemon) {
    this.store.dispatch(addPokemonToCart({Pokemon}));
    this.updatedCart.emit(true);
  }

  onRemove(pokemonId) {
    this.store.dispatch(removePokemonFromCart({pokemonId}));
  }

}
