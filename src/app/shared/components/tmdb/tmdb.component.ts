import { Component, OnInit } from '@angular/core';
import { movieArray } from '../../const/tmdb';

@Component({
  selector: 'app-tmdb',
  templateUrl: './tmdb.component.html',
  styleUrls: ['./tmdb.component.scss']
})
export class TmdbComponent implements OnInit {
  movieArr = movieArray;
  constructor() { }

  ngOnInit(): void {
  }

}
