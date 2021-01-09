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

  private coords = new BehaviorSubject("0,0") ;
  currentCoord = this.coords.asObservable()


  constructor(private http: HttpClient) { }
  getLocation(url: string):Observable<ILocation> {
      return this.http.get<ILocation>(url);
    }
    getWeather(lat: string, lng: string):Observable<OpenWeather> {
      return this.http.get<OpenWeather>(this.openWeatherUrl + lat + '&lon=' + lng + 
      '&appid=' + this.weatherApiKey);
    }
    setCoord(coordinates:string) {
      this.coords.next(coordinates);
    }
}
