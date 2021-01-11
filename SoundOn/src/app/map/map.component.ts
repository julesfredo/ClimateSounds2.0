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
  // private coordinates:google.maps.LatLng = {  };
  
  ngOnInit(): void {
    this.weatherMapService.currentLat.subscribe(coords => this.lat = coords);
    this.weatherMapService.currentLng.subscribe(coords => this.lng = coords);
    const loader = new Loader({
      apiKey: "AIzaSyDkBNtGqS7Szdp11nxG11xKhJfaiofbvG0",
      version: "weekly"
    });
    let map1: google.maps.Map;
    
    setTimeout(()=>loader.load().then(() => {
    let coordinates: google.maps.LatLng = new google.maps.LatLng( this.lat, this.lng);;
    map1 = new google.maps.Map(document.getElementById("map1") as HTMLElement, {
      center: coordinates,
      zoom: 8,
    });
  }), 1500  )
    
  }
}
