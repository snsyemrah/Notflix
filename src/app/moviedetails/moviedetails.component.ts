import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafePipe } from 'src/app/moviedetails/safe.pipe';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
})
export class MoviedetailsComponent implements OnInit {
  title = '';
  description = '';
  url = '';

  constructor(
    private router: ActivatedRoute,
    private service: MovieService
  ) {}
  getMovieDetailResult: any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');

    if (getParamId !== null) {
      // Check if getParamId is not null
      let numericId = parseInt(getParamId, 10); // The second argument is the base (10 for decimal)

      if (!isNaN(numericId)) {
        // Check if the conversion was successful
        this.getMovie(numericId);
      } else {
        // Handle the case where the conversion failed
        console.log('Invalid ID');
      }
    } else {
      // Handle the case where getParamId is null
      console.log('ID is null');
    }
  }

  getMovie(id: number) {
    this.service.getMovieById(id).subscribe(async result => {
      console.log(result, 'getmoviedetails#');
      this.getMovieDetailResult = await result;
      this.title = result?.title || '';
      this.description = result?.overview || '';
      this.url = result?.url || '';
    });
  }
}
