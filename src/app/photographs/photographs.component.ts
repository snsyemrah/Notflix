import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photographs',
  templateUrl: './photographs.component.html',
  styleUrls: ['./photographs.component.css']
})
export class PhotographsComponent{

  constructor(private photo:PhotoService) { }
    reachPhotos(){
    this.photo.getPhotos().subscribe(response=>{
         console.log(response)
    })
    }
  }
