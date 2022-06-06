import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {MoviesComponent} from './movies-component/movies/movies.component';
import {MovieComponent} from './movies-component/movie/movie.component';
import {MovieDetailComponent} from './movies-component/movie-detail/movie-detail.component';
import {MoviesRoutingModule} from "./movies-routing.module";
import {MoviesDataService} from "./movies-services/movies-data.service";
import {MoviesResolver} from "./movies-services/movies.resolver";
import {MovieDetailResolver} from "./movies-services/movie-detail.resolver";


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MoviesRoutingModule
  ],
  exports: [
    MovieComponent
  ],
  providers: [MoviesDataService, MoviesResolver, MovieDetailResolver]
})
export class MoviesModule {
}
