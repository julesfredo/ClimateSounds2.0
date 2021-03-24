import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"
import { WeatherMapService } from "../weather-map.service";
import { google } from 'google-maps';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(private weatherMapService: WeatherMapService) { }
  lat:number = 0;
  lng:number = 0;

  ngOnInit(): void {
  // Catch the loaded coordinates
    this.weatherMapService.currentLat.subscribe(coords => this.lat = coords);
    this.weatherMapService.currentLng.subscribe(coords => this.lng = coords);
  // As soon as can be read, load map with correct coordinates as soon
    setTimeout(() => this.setMap(), 1400);
  }
  
  
  setMap() {
  // Google Maps API Setup
    const loader = new Loader({
    apiKey: "AIzaSyDkBNtGqS7Szdp11nxG11xKhJfaiofbvG0",
    version: "weekly"
    });
    let map1: google.maps.Map;
    let map2: google.maps.Map;
    let map3: google.maps.Map;
  
    loader.load().then(() => {
      let coordinates: google.maps.LatLng = new google.maps.LatLng( this.lat, this.lng);
      map1 = new google.maps.Map(document.getElementById("map1") as HTMLElement, {
        center: coordinates,
        zoom: 10,
      });
      map2 = new google.maps.Map(document.getElementById("map2") as HTMLElement, {
        center: coordinates,
        zoom: 14,
      });
      map3 = new google.maps.Map(document.getElementById("map3") as HTMLElement, {
        center: coordinates,
        zoom: 12,
      });
    })
  }
}
