import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../GlobalConstants';
import { WeatherMapService } from '../weather-map.service'
import { ClimateComponent } from '../climate/climate.component';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  public description: string;
  constructor(private weatherMapService: WeatherMapService, private climateComponent: ClimateComponent) { }

  ngOnInit(): void {  }

  getMusic() {
    console.log(this.climateComponent.locale)
    // this.weatherMapService.getWeatherByLocation(this.climateComponent.locale)
    // .subscribe(response => {
    //   this.description = response.weather[0].description;
    //   console.log(this.description);
    // })
			switch(this.description) {
				case 'overcast clouds':
				GlobalConstants.genre = 1010;
				break;
				case 'broken clouds':
          GlobalConstants.genre = 1147;
				break;
				case 'scattered clouds':
          GlobalConstants.genre = 1209;
				break;
				case 'few clouds':
          GlobalConstants.genre = 1112;
				break;
				case 'mist':
          GlobalConstants.genre = 1027;
				break;
				case 'haze':
          GlobalConstants.genre = 1114;
				break;
				case 'drizzle':
          GlobalConstants.genre = 1128;
				break;
				case 'fog':
          GlobalConstants.genre = 1142;
				break;
				case 'clear sky':
          GlobalConstants.genre = 1192;
				break;
				case 'heavy intensity  rain':
          GlobalConstants.genre = 1143;
				break;
				case 'moderate rain':
          GlobalConstants.genre = 1003;
				break;
				case 'light rain':
          GlobalConstants.genre = 1043;
				break;
				case 'heavy snow':
          GlobalConstants.genre = 1082;
				break;
				case 'moderate snow':
          GlobalConstants.genre = 1082;
				break;
				case 'light snow':
          GlobalConstants.genre = 1211;
				break;
			};
      console.log(GlobalConstants.genre);
      console.log(this.description);
			GlobalConstants.iTunesUrl = 'https://itunes.apple.com/us/rss/topsongs/genre=' + GlobalConstants.genre + '/json';
  }
}