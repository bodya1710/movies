import {Component, OnInit} from '@angular/core';
import {MoviesDataService} from "../../movies-services/movies-data.service";
import {ActivatedRoute} from "@angular/router";
import {IMovies} from "../../../modules/IMovies";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IMovies[];

  constructor(private moviesDataService: MoviesDataService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({moviesData}) => this.movies = moviesData.results);
  }

}
