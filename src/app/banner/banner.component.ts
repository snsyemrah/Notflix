import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  constructor(private service: MovieService) {}
  movies: any;
  ngOnInit(): void {
    this.service.getMovies().subscribe(result => {
      console.log(result, 'getMovies#');
      this.movies = result;
    });
  }
}
