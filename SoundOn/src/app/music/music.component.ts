import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../GlobalConstants';
import { WeatherMapService } from '../weather-map.service'
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  genre: String = '';
  tracks: Track[] = [];

  constructor(private weatherMapService: WeatherMapService) { }

  ngOnInit(): void {
    this.weatherMapService.getMusic(GlobalConstants.iTunesUrl);
  }
}

class Track {
    constructor(parameters) {
      title: String
    }
  }
