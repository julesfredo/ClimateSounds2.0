import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"
import { WeatherMapService } from "../weather-map.service"
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(private weatherMapService: WeatherMapService) { }
  private coordinates:string = "";

  ngOnInit(): void {
  this.weatherMapService.currentCoord.subscribe(coords => this.coordinates = coords);
    setTimeout(()=>console.log(this.coordinates), 2000)
    let map1: google.maps.Map;
  const loader = new Loader({
      apiKey: "AIzaSyDkBNtGqS7Szdp11nxG11xKhJfaiofbvG0",
      version: "weekly"
    });
    
    loader.load().then(() => {
      map1 = new google.maps.Map(document.getElementById("map1") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  }
}
