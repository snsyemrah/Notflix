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
  ngOnInit(): void {
    
    this.service.getMovies().subscribe(result => {
      console.log(result);
      this.movies = result;
    });
  }
}
