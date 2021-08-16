import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Pokemon} from '../models/Pokemon';
import {ApiResponse} from '../models/apiResponse';

@Injectable({providedIn: 'root'})
export class PokemonApiService {
  constructor(private http: HttpClient) {
  }

  getPokemons(): Observable<Array<Pokemon>> {
    const headers = new HttpHeaders();
    headers.append('X-Api-Key', '0842902b-b2c4-4029-ad33-a5e106284250');
    headers.append('Content-Type', 'application/json');

    return this.http
      .get(
        'https://api.pokemontcg.io/v2/cards?q=name:Pikachu', {headers},
      )
      .pipe(map((pokemons: ApiResponse) => {
        console.log('coucou', pokemons);
        return pokemons.data || [];
      }));
  }
}
