import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {GenresResolver} from "./genres-services/genres.resolver";
import {GenresComponent} from './genres-component/genres/genres.component';
import {GenresDataService} from "./genres-services/genres-data.service";
import {GenresRoutingModule} from "./genres-routing.module";
import {GenresListComponent} from './genres-component/genres-list/genres-list.component';
import {GenresListResolver} from "./genres-services/genres-list.resolver";
import {MoviesModule} from "../movies/movies.module";


@NgModule({
  declarations: [
    GenresComponent,
    GenresListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GenresRoutingModule,
    MoviesModule
  ],
  providers: [GenresResolver, GenresDataService, GenresListResolver]
})
export class GenresModule {
}
