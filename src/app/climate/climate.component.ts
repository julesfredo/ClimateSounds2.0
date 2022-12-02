import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { WeatherMapService } from '../weather-map.service';
import { GlobalConstants } from '../GlobalConstants'
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.css']
})
export class ClimateComponent implements OnInit {
  public title: string = 'ClimateSounds';

  public resp: Object = {}
  public lat:number = 0;
  public lng: number = 0;
  public coordinates:google.maps.LatLng;
  public apiKey: string = '6fc7fbfa50e84e79bdcf4f6b6f1f1527';
  public fields: string = 'city,latitude,longitude';
  public geoLocationUrl: string = 
	'https://api.ipgeolocation.io/ipgeo?apiKey='
  + this.apiKey + '&fields=' + this.fields;

  public city: string = ""
  public description: string = "";
  public temp: number = 0
  public tempF: string = ""
  public tempC: string = ""
  public wind: string= ""
  public weather: string= ""
  
  public locale: string= ""
  public far: string= "Fahrenheit"
  public cel: string= "Celsius"

  constructor(private weatherMapService: WeatherMapService) {}
 
  ngOnInit(): void {
    this.weatherMapService.currentLat.subscribe(coord => this.lat = coord);
    this.weatherMapService.currentLng.subscribe(coord => this.lng = coord);
    this.weatherMapService.getLocation(this.geoLocationUrl)
      .subscribe(data => {
        this.lat = data.latitude;
        this.lng = data.longitude;
      });
      
      setTimeout(()=>{this.weatherMapService.getWeather(this.lat, this.lng)
      .subscribe(response => {
        this.description = response.weather[0].description;
        this.temp = 1.8*(response.main.temp-273) + 32;
        this.tempF = (this.temp).toFixed(1);
        this.tempC = ((response.main.temp)-273.15).toFixed(1);
        this.wind = (response.wind.speed).toFixed(1) + " mph";
        this.city = response.name;
        this.lat = response.coord.lat;
        this.lng = response.coord.lon;
      })
    }, 1900);
    setInterval(() => this.changeCoords(), 1500);
  }

  setGenre(description) {
			switch(description) {
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
      console.log(GlobalConstants.genre)
			GlobalConstants.iTunesUrl = 'https://itunes.apple.com/us/rss/topsongs/genre=' + GlobalConstants.genre + '/json';


  }

  onSubmit() {
    this.weatherMapService.getWeatherByLocation(this.locale)
    .subscribe(response => {
      this.description = response.weather[0].description;
      this.temp = 1.8*(response.main.temp-273) + 32;
      this.tempF = (this.temp).toFixed(1);
      this.tempC = ((response.main.temp)-273.15).toFixed(1);
      this.wind = (response.wind.speed).toFixed(1) + " mph";
      this.city = response.name;
      this.lat = response.coord.lat;
      this.lng = response.coord.lon;
    });
    this.changeCoords();
    console.log(this.description);
    this.weatherMapService.sendSearch();
  }
  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= 45){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
  changeCoords() {
    this.weatherMapService.setCoord(this.lat, this.lng);
  }
}