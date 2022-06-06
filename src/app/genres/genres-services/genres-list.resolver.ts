import {Injectable} from '@angular/core';
import {
   Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {GenresDataService} from "./genres-data.service";
import {IMovies} from "../../modules/IMovies";

@Injectable({
  providedIn: 'root'
})
export class GenresListResolver implements Resolve<IMovies[]> {


  constructor(private genresDataService: GenresDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovies[]> | Promise<IMovies[]> {
    let id = route.params['id'];
    return this.genresDataService.getGenr(id, 1);
  }
}
