import {IMovies} from "./IMovies";
import {IGenres} from "./IGenres";
import {IProductionCountries} from "./IProductionCountries";
import {IProductionCompanies} from "./IProductionCompanies";

export interface IMovie extends IMovies {
  vote_count: number;
  release_date: number;
  popularity: number;
  runtime: number;
  genres: IGenres[];
  production_countries: IProductionCountries[];
  production_companies: IProductionCompanies[];
}
