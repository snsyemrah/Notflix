import { Component } from '@angular/core';

@Component({
  selector: 'app-filmstrip',
  templateUrl: './filmstrip.component.html',
  styleUrls: ['./filmstrip.component.css']
})
export class FilmstripComponent {
  posters: any = [
    'assets/dune.webp',
    'assets/lifeisbeautiful.jpg',
    'assets/interstellar.jpg',
    'assets/spiritedaway.jpg',
    'assets/3idiots.jpg'
  ];

  ngOnInit() {
    this.posters.forEach((item: any) => console.log(item));
  }

}
