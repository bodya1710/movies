import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IMovies} from "../../../modules/IMovies";


@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit {

  genresList: IMovies[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({geenresListData}) => this.genresList = geenresListData.results);
  }

}
