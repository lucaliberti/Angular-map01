import { Component } from '@angular/core';
import { Point } from './point.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Le mie mappe';
  lat: number =  45.506512;
  lng: number = 9.191138;
  myZoom:number=12;

  lat1: number = 45.506512;
  lng1: number =9.191138;

  private icon = {
    url: './assets/img/cat_acrobat.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };


  triangle: Array<Point> = 
  [
    {lng:9.1, lat:45.5},
    {lng:9.0, lat:45.6},
    {lng:9.0, lat:45.4}
  ]




}
