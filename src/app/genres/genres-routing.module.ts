import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GenresComponent} from "./genres-component/genres/genres.component";
import {GenresResolver} from "./genres-services/genres.resolver";
import {GenresListComponent} from "./genres-component/genres-list/genres-list.component";
import {GenresListResolver} from "./genres-services/genres-list.resolver";

const routes: Routes = [
  {
    path: '', component: GenresComponent,
    resolve: {genresData: GenresResolver},
    children: [
      {
        path: ':id', component: GenresListComponent,
        resolve: {geenresListData: GenresListResolver}
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule {
}
