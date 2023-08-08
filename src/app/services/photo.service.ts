import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// export interface Photo {
//   albumId: number;
//   id: number;
//   title: string;
//   url: string;
//   thumbnailUrl: string;
// }

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private http: HttpClient) { }
//   getData() { return this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(response);
//    console.log(response);}
     getPhotos(){
       return this.http.get('https://jsonplaceholder.typicode.com/photos');
       }
}
