import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { SafePipe } from 'src/app/moviedetails/safe.pipe';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
})
export class MoviedetailsComponent implements OnInit {
  title = '';
  description = '';
  url = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.title = params['title'];
      this.description = params['description'];
      this.url = params['url'];
    });
  }
}
