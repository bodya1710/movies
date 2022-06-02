import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlImgsService {

  constructor() { }

  urlImg = 'https://image.tmdb.org/t/p/w300';
  urlImgBc = 'https://image.tmdb.org/t/p/w1280';
}
