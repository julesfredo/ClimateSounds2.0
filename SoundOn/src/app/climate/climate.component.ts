import { Component, OnInit } from '@angular/core';
import { ILocation } from '../ILocation';
import { WeatherMapService } from '../weather-map.service';
@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.css']
})
export class ClimateComponent implements OnInit {

  public resp: Object = {}
  public lat: string = "0"
  public lng: string = "0"
  public apiKey: string = '6fc7fbfa50e84e79bdcf4f6b6f1f1527';
  public fields: string = 'city,latitude,longitude';
  public geoLocationUrl: string = 
	'https://api.ipgeolocation.io/ipgeo?apiKey='
  + this.apiKey + '&fields=' + this.fields;

  public city: string= ""
  public description: string= ""
  public temp: number = 0
  public tempF: string = ""
  public tempC: string = ""
  public wind: string= ""
  public weather: string= ""
 
  constructor(private weatherMapService: WeatherMapService) {}
 
  ngOnInit(): void {
      this.weatherMapService.getLocation(this.geoLocationUrl)
      .subscribe(data => {
        console.log(data)
        this.lat = data.latitude;
        this.lng = data.longitude;
      });
      setTimeout(()=>{this.weatherMapService.getWeather(this.lat, this.lng)
      .subscribe(response => {
        console.log(response);
        this.description = response.weather[0].description;
        this.temp = 1.8*(response.main.temp-273) + 32;
        this.tempF = (this.temp).toFixed(1);
        this.tempC = ((response.main.temp)-273.15).toFixed(1);
        this.wind = (response.wind.speed).toFixed(1) + " mph";
        this.city = response.name;
    
      })
    }, 1000);
  }
}