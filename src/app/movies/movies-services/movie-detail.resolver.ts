import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {MoviesDataService} from "./movies-data.service";
import {IMovie} from "../../modules/IMovie";

@Injectable({
  providedIn: 'root'
})
export class MovieDetailResolver implements Resolve<IMovie> {

  constructor(private moviesDataService: MoviesDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovie> | Promise<IMovie> | IMovie {
    let id = route.params['id'];
    return this.moviesDataService.getMovie(id);
  }
}
