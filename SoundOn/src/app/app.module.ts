import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppComponent } from './app.component';
import { ClimateComponent } from './climate/climate.component';
import { MapComponent } from './map/map.component';
import { MusicComponent } from './music/music.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ClimateComponent,
    MapComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      "backgroundPadding": 7,
      "radius": 91,
      "space": -1,
      "toFixed": 1,
      "maxPercent": 120,
      "outerStrokeWidth": 9,
      "imageHeight": 134,
      "showUnits": false,
      "responsive": true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
