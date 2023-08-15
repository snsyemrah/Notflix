import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  bannerImage: string = 'path-to-your-image.jpg';
  bannerTitle: string = 'Featured Title';
  bannerDescription: string = 'Description of the featured content...';
}
