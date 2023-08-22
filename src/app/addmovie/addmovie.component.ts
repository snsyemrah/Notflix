import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css'],
})
export class AddmovieComponent {
  title = '';
  overview = '';
  poster_path = '';
  genres = '';
  url = '';
  constructor(private service: MovieService) {}
  addMovie() {
    const movie = {
      title: this.title,
      overview: this.overview,
      poster_path: this.poster_path,
      genres: [this.genres],
      url: this.url,
    };

    this.service.addMovie(movie).subscribe(
      response => {
        // Film eklendiğinde yapılacak işlemler
        console.log('Film eklendi:', response);
        // İlgili yönlendirmeyi burada yapabilirsiniz
      },
      error => {
        console.error('Film eklenirken hata oluştu:', error);
      }
    );
    this.title = '';
    this.overview = '';
    this.poster_path = '';
    this.genres = '';
    this.url = '';
  }
}