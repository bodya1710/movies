import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from "./movies-component/movies/movies.component";
import {MovieDetailComponent} from "./movies-component/movie-detail/movie-detail.component";
import {MoviesResolver} from "./movies-services/movies.resolver";
import {MovieDetailResolver} from "./movies-services/movie-detail.resolver";

const routes: Routes = [
  {
    path: '', component: MoviesComponent,
    resolve: {moviesData: MoviesResolver}
  },
  {
    path: 'movie-detail/:id', component: MovieDetailComponent,
    resolve: {movieData: MovieDetailResolver}
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
