// import {Injectable} from '@angular/core';
// import {Actions, createEffect, ofType} from '@ngrx/effects';
// import {EMPTY} from 'rxjs';
// import {catchError, map, mergeMap} from 'rxjs/operators';
// import {MoviesService} from './movies.service';
//
// @Injectable()
// export class PokemonRetrievingDataEffect {
//
//   loadMovies$ = createEffect(() => this.actions$.pipe(
//       ofType('[Movies Page] Load Movies'),
//       mergeMap(() => this.moviesService.getAll()
//         .pipe(
//           map(movies => ({type: '[Movies API] Movies Loaded Success', payload: movies})),
//           catchError(() => EMPTY)
//         ))
//     )
//   );
//
//   constructor(
//     private actions$: Actions,
//     private moviesService: MoviesService
//   ) {
//   }
// }
