import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {MainComponent} from './components/main/main.component';
import {SearchPageComponent} from './components/main/search-page/search-page.component';
import {pokemonsReducer} from './pokemonRetrievingData.reducer';

const routes: Routes = [
  {path: 'home', component: MainComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPageComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    StoreModule.forRoot({pokemons: pokemonsReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
