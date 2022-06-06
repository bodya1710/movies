import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMovie} from "../../modules/IMovie";
import {IMovies} from "../../modules/IMovies";


@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  private _url = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {
  }

  getMovies(page: number): Observable<IMovies[]> {
    return this.http.get<any>(`${this._url}/discover/movie?api_key=8606d3bcebacc307fd3773f3fb19be89&page=${page}`)
  }

  getMovie(id: number): Observable<IMovie> {
    return this.http.get<IMovie>(`${this._url}/movie/${id}?api_key=8606d3bcebacc307fd3773f3fb19be89`)
  }
}
