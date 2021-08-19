import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApiResponse} from '../models/apiResponse';
import {Pokemon} from '../models/Pokemon';

const apiUrl = 'https://api.pokemontcg.io/v2/cards';

@Injectable({providedIn: 'root'})
export class PokemonApiService {
  constructor(private http: HttpClient) {
  }

  getPokemons(): Observable<Pokemon[]> {
    const headers = new HttpHeaders();
    headers.append('X-Api-Key', '0842902b-b2c4-4029-ad33-a5e106284250');
    headers.append('Content-Type', 'application/json');

    return this.http
      .get(
        'https://api.pokemontcg.io/v2/cards', {headers},
      )
      .pipe(map((pokemons: ApiResponse) => {
        return pokemons.data || [];
      }));
  }

  searchPokemonsAllusive(inputSearch): Observable<Pokemon[]> {
    const headers = new HttpHeaders();
    headers.append('X-Api-Key', '0842902b-b2c4-4029-ad33-a5e106284250');
    headers.append('Content-Type', 'application/json');

    return this.http
      .get(
        apiUrl + '?q=name:' + '*' + inputSearch + '*', {headers},
      )
      .pipe(map((pokemons: ApiResponse) => pokemons.data || []));
  }

  searchPokemonsExact(inputSearch): Observable<Pokemon[]> {
    const headers = new HttpHeaders();
    headers.append('X-Api-Key', '0842902b-b2c4-4029-ad33-a5e106284250');
    headers.append('Content-Type', 'application/json');

    return this.http
      .get(
        apiUrl + '?q=name:' + '"' + inputSearch + '"', {headers},
      )
      .pipe(map((pokemons: ApiResponse) => pokemons.data || []));
  }
}
