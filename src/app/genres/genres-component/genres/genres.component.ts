import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IGenres} from "../../../modules/IGenres";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: IGenres[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({genresData}) => this.genres = genresData.genres);
  }

}
