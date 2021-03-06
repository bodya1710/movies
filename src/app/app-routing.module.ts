import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";


let routes: Routes = [
  {path: '', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)},
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: 'gender', loadChildren: () => import('./genres/genres.module').then(m => m.GenresModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
