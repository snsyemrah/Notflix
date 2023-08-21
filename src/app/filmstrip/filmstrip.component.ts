import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-filmstrip',
  templateUrl: './filmstrip.component.html',
  styleUrls: ['./filmstrip.component.css'],
})
export class FilmstripComponent implements OnInit {
  constructor(private service: MovieService) {}
  movies: any;
  ngOnInit(): void {
    this.service.getMovies().subscribe(result => {
      this.movies = result;
    });
  }
}
