import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IMovie} from "../../../modules/IMovie";
import {UrlImgsService} from "../../../urls/url-imgs.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movieDetail: IMovie;
  img: any;

  constructor(private ativatedRoute: ActivatedRoute,
              private urlImgsService: UrlImgsService) {
  }

  ngOnInit(): void {
    this.img = this.urlImgsService.urlImg;
    this.ativatedRoute.data.subscribe(({movieData}) => this.movieDetail = movieData);
  }

}
