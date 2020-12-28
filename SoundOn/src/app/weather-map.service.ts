import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILocation } from './ILocation';

@Injectable({
  providedIn: 'root'
})

export class WeatherMapService {
  
  lat: number = 0;
  lng: number = 0;

  constructor(private http: HttpClient) { }

  // getLocation()
  // {
  //   navigator.geolocation.getCurrentPosition(resp => {
  //         this.lat = resp.coords.latitude;
  //         this.lng = resp.coords.longitude;
  //         this.climateComponent.
  //         // this.clim = this.http.get(this.openWeatherUrlCoord);
  //        },
  //       err => {
  //         console.log('error' + err);
  //       },
  //       {timeout:1000});
  //   }
    getWeather(url: string):Observable<Object>{
      return this.http.get<Object>(url);
    }
}
