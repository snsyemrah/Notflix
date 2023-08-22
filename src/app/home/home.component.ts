import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieService) {}
  movies: any;
  selectedGenre: any;

  ngOnInit(): void {
    this.service.getSelectedGenre().subscribe(value => {
      console.log(`getSelectedGenre: ${value}`);
      this.selectedGenre = value;
    });
    this.service.getMovies().subscribe(result => {
      this.movies = result;
    });
  }
}
