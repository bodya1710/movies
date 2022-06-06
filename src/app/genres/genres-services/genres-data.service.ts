import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGenres} from "../../modules/IGenres";
import {IMovies} from "../../modules/IMovies";

@Injectable({
  providedIn: 'root'
})
export class GenresDataService {

  private _url = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {
  }

  getGenrs(): Observable<IGenres[]> {
    return this.http.get<IGenres[]>(`${this._url}/genre/movie/list?api_key=8606d3bcebacc307fd3773f3fb19be89`)
  }

  getGenr(id: number, page: number): Observable<IMovies[]> {
    return this.http.get<IMovies[]>(`${this._url}/discover/movie?api_key=9d0492a7c445cae0ed65774bb928dc58&with_genres=${id}&page=${page}`)
  }
}
