import {Component, Input, OnInit} from '@angular/core';
import {IMovies} from "../../../modules/IMovies";
import {UrlImgsService} from "../../../urls/url-imgs.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private urlImgsService:UrlImgsService) { }

  @Input()
  movie: IMovies;
  img: any;


  ngOnInit(): void {
    this.img = this.urlImgsService.urlImg;
  }

}
