import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILocation } from './ILocation';
import { OpenWeather } from './OpenWeather';

@Injectable({
  providedIn: 'root'
})

export class WeatherMapService {
  
  weatherApiKey: string = '67d4ac0e95120bc42f358dbe5cce49e8';
  openWeatherUrl: string = 'http://api.openweathermap.org/data/2.5/weather?lat=';
  lat: number = 0;
  lng: number = 0;

  private coord1 = new BehaviorSubject(this.lat) ;
  private coord2 = new BehaviorSubject(this.lng) ;
  currentLat = this.coord1.asObservable();
  currentLng = this.coord2.asObservable();

  constructor(private http: HttpClient) { }
  getLocation(url: string):Observable<ILocation> {
      return this.http.get<ILocation>(url);
    }
    getWeather(lat: number, lng: number):Observable<OpenWeather> {
      return this.http.get<OpenWeather>(this.openWeatherUrl + lat + '&lon=' + lng + 
      '&appid=' + this.weatherApiKey);
    }
    setCoord(lat:number, lng:number) {  
      this.coord1.next(lat);
      this.coord2.next(lng);
    }
}
