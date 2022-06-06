import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {MoviesDataService} from "./movies-data.service";
import {IMovies} from "../../modules/IMovies";

@Injectable({
  providedIn: 'root'
})
export class MoviesResolver implements Resolve<IMovies[]> {


  constructor(private moviesDataService: MoviesDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovies[]> | Promise<IMovies[]> | IMovies[] {
    return this.moviesDataService.getMovies(1);
  }
}
