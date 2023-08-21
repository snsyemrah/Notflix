import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css'],
})
export class AddmovieComponent {
  movieName = '';
  description = '';
  imageUrl = '';
  genre = '';
  movieUrl = '';
  constructor(private service: MovieService) {}
  addMovie() {
    const movie = {
      movieName: this.movieName,
      description: this.description,
      imageUrl: this.imageUrl,
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
  }
}
  // addMovie(): void {
  //   const filmVerileri = {
  //     movieName: this.movieName,
  //     description: this.description,
  //     imageUrl: this.imageUrl
  //   };

  //   this.service.addMovie(movie);
  // }
