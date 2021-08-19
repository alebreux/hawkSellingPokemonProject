import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router';

import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {pokemonsReducer} from './components/main/pokemonRetrievingData.reducer';
import {PokemonCardComponent} from './components/main/search-page/pokemon-card/pokemon-card.component';
import {SearchPageComponent} from './components/main/search-page/search-page.component';
import {ContentComponent} from './components/panier/content/content.component';
import {PanierComponent} from './components/panier/panier.component';
import {panierReducer} from './components/panier/panier.reducer';

const routes: Routes = [
  {path: 'home', component: MainComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

const rootReducer = {
  pokemons: pokemonsReducer,
  cartReducer: panierReducer,
};

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    MainComponent,
    PokemonCardComponent,
    PanierComponent,
    ContentComponent,
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
