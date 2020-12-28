import { Component, OnInit } from '@angular/core';
import { WeatherMapService } from '../weather-map.service';
@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.css']
})
export class ClimateComponent implements OnInit {

  public resp: Object = {}
  public lat: number= 0
  public lng: number= 0
  public apiKey: string = '67d4ac0e95120bc42f358dbe5cce49e8';
  public openWeatherUrl: string = 
	'http://api.openweathermap.org/data/2.5/weather?lat='
	+ this.lat + '&lon=' + this.lng +
  '&appid=' + this.apiKey;
  
  public city: string=""
  public temp: string=""
  public wind: string=""
  public weather: string=""
 
  constructor(private weatherMapService: WeatherMapService) {}
 
  getLocation()
  {
    navigator.geolocation.getCurrentPosition(resp => {
          this.lat = resp.coords.latitude;
          this.lng = resp.coords.latitude;
        },
        err => {
          console.log('error' + err.code);
        },
        {timeout:2000});
    }
  
    ngOnInit(): void {
      this.getLocation();
      setTimeout(()=>{console.log(this.resp)}, 2000)
      // setTimeout(()=>console.log(this.weatherMapService.openWeatherUrlCoord), 2000);
}}