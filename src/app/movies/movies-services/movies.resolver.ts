import { Injectable } from '@angular/core';
import {
   Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {MoviesDataService} from "./movies-data.service";

@Injectable({
  providedIn: 'root'
})
export class MoviesResolver implements Resolve<any> {


  constructor(private moviesDataService : MoviesDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any{
    return this.moviesDataService.getMovies(1);
  }
}
