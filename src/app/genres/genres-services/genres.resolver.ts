import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {GenresDataService} from "./genres-data.service";

@Injectable({
  providedIn: 'root'
})
export class GenresResolver implements Resolve<boolean> {

  constructor(private genresDataService: GenresDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.genresDataService.getGenrs();
  }
}
