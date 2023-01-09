(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/user/Projects/ClimateSounds2.0/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _climate_climate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./climate/climate.component */ "pycU");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/map.component */ "cNoH");
/* harmony import */ var _music_music_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music/music.component */ "Y10/");





// declare var $: any;
class AppComponent {
    constructor() {
        this.num = 70;
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-climate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-music");
    } }, directives: [_climate_climate_component__WEBPACK_IMPORTED_MODULE_1__["ClimateComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"], _music_music_component__WEBPACK_IMPORTED_MODULE_3__["MusicComponent"]], styles: ["#height[_ngcontent-%COMP%] {\n  padding: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlaWdodCB7XG4gIHBhZGRpbmc6IDUwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Y10/":
/*!******************************************!*\
  !*** ./src/app/music/music.component.ts ***!
  \******************************************/
/*! exports provided: MusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicComponent", function() { return MusicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GlobalConstants */ "fT4B");
/* harmony import */ var _weather_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather-map.service */ "jPe0");
/* harmony import */ var _climate_climate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../climate/climate.component */ "pycU");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class MusicComponent {
    constructor(weatherMapService, climateComponent, http) {
        this.weatherMapService = weatherMapService;
        this.climateComponent = climateComponent;
        this.http = http;
    }
    ngOnInit() { }
    getMusic() {
        console.log(_GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].desc);
        // this.weatherMapService.getWeatherByLocation(this.climateComponent.locale)
        // .subscribe(response => {
        //   this.description = response.weather[0].description;
        //   console.log(this.description);
        // })
        switch (_GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].desc) {
            case 'overcast clouds':
                _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genre = 1010;
                break;
            case 'broken clouds':
                _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genre = 1147;
                break;
            case 'scattered clouds':
                _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genre = 1209;
                break;
            case 'few clouds':
                _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genre = 1112;
                break;
            case 'mist':
                _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genre = 1027;
                break;
            case 'haze':
                _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genre = 1114;
                break;
            case 'drizzle':
                _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genre = 1128;
                break;
            case 'fog':
                _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genre = 1142;
                break;
            case 'clear sky':
                _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genre = 1192;
                break;
            case 'heavy intensity  rain':
                _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genre = 1143;
                break;
            case 'moderate rain':
                _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genre = 1003;
                break;
            case 'light rain':
                _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genre = 1043;
                break;
            case 'heavy snow':
                _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genre = 1082;
                break;
            case 'moderate snow':
                _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genre = 1082;
                break;
            case 'light snow':
                _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genre = 1211;
                break;
        }
        ;
        _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].iTunesUrl = 'https://itunes.apple.com/us/rss/topsongs/genre=' + _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genre + '/json';
        return this.http.get(_GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].iTunesUrl).subscribe(response => { console.log(response); });
    }
    playMusic() {
    }
}
MusicComponent.ɵfac = function MusicComponent_Factory(t) { return new (t || MusicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_weather_map_service__WEBPACK_IMPORTED_MODULE_2__["WeatherMapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_climate_climate_component__WEBPACK_IMPORTED_MODULE_3__["ClimateComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MusicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MusicComponent, selectors: [["app-music"]], decls: 4, vars: 0, consts: [[1, "container"], [1, "row"], [1, "btn", "btn-success", 3, "click"]], template: function MusicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicComponent_Template_button_click_2_listener() { return ctx.getMusic(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click for Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h3[_ngcontent-%COMP%] {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11c2ljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoibXVzaWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MusicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-music',
                templateUrl: './music.component.html',
                styleUrls: ['./music.component.css']
            }]
    }], function () { return [{ type: _weather_map_service__WEBPACK_IMPORTED_MODULE_2__["WeatherMapService"] }, { type: _climate_climate_component__WEBPACK_IMPORTED_MODULE_3__["ClimateComponent"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-circle-progress */ "K1R0");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _climate_climate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./climate/climate.component */ "pycU");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/map.component */ "cNoH");
/* harmony import */ var _music_music_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music/music.component */ "Y10/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_climate_climate_component__WEBPACK_IMPORTED_MODULE_4__["ClimateComponent"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_2__["NgCircleProgressModule"].forRoot({
                "backgroundPadding": 7,
                "radius": 91,
                "space": -1,
                "toFixed": 1,
                "maxPercent": 120,
                "outerStrokeWidth": 9,
                "imageHeight": 134,
                "showUnits": false,
                "responsive": true
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _climate_climate_component__WEBPACK_IMPORTED_MODULE_4__["ClimateComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
        _music_music_component__WEBPACK_IMPORTED_MODULE_6__["MusicComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_2__["NgCircleProgressModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _climate_climate_component__WEBPACK_IMPORTED_MODULE_4__["ClimateComponent"],
                    _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
                    _music_music_component__WEBPACK_IMPORTED_MODULE_6__["MusicComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    ng_circle_progress__WEBPACK_IMPORTED_MODULE_2__["NgCircleProgressModule"].forRoot({
                        "backgroundPadding": 7,
                        "radius": 91,
                        "space": -1,
                        "toFixed": 1,
                        "maxPercent": 120,
                        "outerStrokeWidth": 9,
                        "imageHeight": 134,
                        "showUnits": false,
                        "responsive": true
                    })
                ],
                providers: [_climate_climate_component__WEBPACK_IMPORTED_MODULE_4__["ClimateComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cNoH":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @googlemaps/js-api-loader */ "QnLe");
/* harmony import */ var _weather_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather-map.service */ "jPe0");




class MapComponent {
    constructor(weatherMapService) {
        this.weatherMapService = weatherMapService;
        this.lat = 0;
        this.lng = 0;
    }
    ngOnInit() {
        // Catch the loaded coordinates
        this.weatherMapService.currentLat.subscribe(coords => this.lat = coords);
        this.weatherMapService.currentLng.subscribe(coords => this.lng = coords);
        // As soon as can be read, load map with correct coordinates as soon
        setTimeout(() => this.setMap(), 1500);
        this.weatherMapService.getSearch().subscribe(() => {
            setTimeout(() => this.setMap(), 1500);
        });
    }
    setMap() {
        // Google Maps API Setup
        const loader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_1__["Loader"]({
            apiKey: "AIzaSyDkBNtGqS7Szdp11nxG11xKhJfaiofbvG0",
            version: "weekly"
        });
        let map1;
        let map2;
        let map3;
        loader.load().then(() => {
            let coordinates = new google.maps.LatLng(this.lat, this.lng);
            map1 = new google.maps.Map(document.getElementById("map1"), {
                center: coordinates,
                zoom: 10,
            });
            map2 = new google.maps.Map(document.getElementById("map2"), {
                center: coordinates,
                zoom: 14,
            });
            map3 = new google.maps.Map(document.getElementById("map3"), {
                center: coordinates,
                zoom: 12,
            });
        });
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_weather_map_service__WEBPACK_IMPORTED_MODULE_2__["WeatherMapService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 6, vars: 0, consts: [[1, "container-fluid", "height"], [1, "row", "height"], ["id", "map1", 1, "col-lg-4"], ["id", "map2", 1, "col-lg-4"], ["id", "map3", 1, "col-lg-4"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#map[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n.height[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n\tborder: 5px solid #D1CBC7;\n    margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7Q0FDZCx5QkFBeUI7SUFDdEIsY0FBYztBQUNsQiIsImZpbGUiOiJtYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5oZWlnaHQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcblx0Ym9yZGVyOiA1cHggc29saWQgI0QxQ0JDNztcbiAgICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css']
            }]
    }], function () { return [{ type: _weather_map_service__WEBPACK_IMPORTED_MODULE_2__["WeatherMapService"] }]; }, null); })();


/***/ }),

/***/ "fT4B":
/*!************************************!*\
  !*** ./src/app/GlobalConstants.ts ***!
  \************************************/
/*! exports provided: GlobalConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConstants", function() { return GlobalConstants; });
class GlobalConstants {
}
GlobalConstants.iTunesUrl = '';
GlobalConstants.genre = 0;
GlobalConstants.desc = '';


/***/ }),

/***/ "jPe0":
/*!****************************************!*\
  !*** ./src/app/weather-map.service.ts ***!
  \****************************************/
/*! exports provided: WeatherMapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherMapService", function() { return WeatherMapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class WeatherMapService {
    constructor(http) {
        this.http = http;
        this.weatherApiKey = '67d4ac0e95120bc42f358dbe5cce49e8';
        this.openWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=';
        this.openWeatherUrlLocale = 'http://api.openweathermap.org/data/2.5/weather?q=';
        this.lat = 0;
        this.lng = 0;
        this.search = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.coord1 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.lat);
        this.coord2 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.lng);
        this.currentLat = this.coord1.asObservable();
        this.currentLng = this.coord2.asObservable();
    }
    getLocation(url) {
        return this.http.get(url);
    }
    getWeather(lat, lng) {
        return this.http.get(this.openWeatherUrl + lat + '&lon=' + lng +
            '&appid=' + this.weatherApiKey);
    }
    setCoord(lat, lng) {
        this.coord1.next(lat);
        this.coord2.next(lng);
    }
    getWeatherByLocation(locale) {
        return this.http.get(this.openWeatherUrlLocale + locale +
            '&appid=' + this.weatherApiKey);
    }
    sendSearch() {
        console.log("search sent");
        this.search.next();
    }
    getSearch() {
        console.log("search recieved service");
        return this.search.asObservable();
    }
}
WeatherMapService.ɵfac = function WeatherMapService_Factory(t) { return new (t || WeatherMapService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
WeatherMapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WeatherMapService, factory: WeatherMapService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherMapService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "pycU":
/*!**********************************************!*\
  !*** ./src/app/climate/climate.component.ts ***!
  \**********************************************/
/*! exports provided: ClimateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClimateComponent", function() { return ClimateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GlobalConstants */ "fT4B");
/* harmony import */ var _weather_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather-map.service */ "jPe0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-circle-progress */ "K1R0");






const _c0 = ["stickyMenu"];
class ClimateComponent {
    constructor(weatherMapService) {
        this.weatherMapService = weatherMapService;
        this.title = 'ClimateSounds';
        this.resp = {};
        this.lat = 0;
        this.lng = 0;
        this.apiKey = '6fc7fbfa50e84e79bdcf4f6b6f1f1527';
        this.fields = 'city,latitude,longitude';
        this.geoLocationUrl = 'https://api.ipgeolocation.io/ipgeo?apiKey='
            + this.apiKey + '&fields=' + this.fields;
        this.city = "";
        this.description = "";
        this.temp = 0;
        this.tempF = "";
        this.tempC = "";
        this.wind = "";
        this.weather = "";
        this.locale = "";
        this.far = "Fahrenheit";
        this.cel = "Celsius";
        this.sticky = false;
    }
    ngOnInit() {
        this.weatherMapService.currentLat.subscribe(coord => this.lat = coord);
        this.weatherMapService.currentLng.subscribe(coord => this.lng = coord);
        this.weatherMapService.getLocation(this.geoLocationUrl)
            .subscribe(data => {
            this.lat = data.latitude;
            this.lng = data.longitude;
        });
        setTimeout(() => {
            this.weatherMapService.getWeather(this.lat, this.lng)
                .subscribe(response => {
                this.description = response.weather[0].description;
                _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].desc = response.weather[0].description;
                this.temp = 1.8 * (response.main.temp - 273) + 32;
                this.tempF = (this.temp).toFixed(1);
                this.tempC = ((response.main.temp) - 273.15).toFixed(1);
                this.wind = (response.wind.speed).toFixed(1) + " mph";
                this.city = response.name;
                this.lat = response.coord.lat;
                this.lng = response.coord.lon;
            });
        }, 1900);
        setInterval(() => this.changeCoords(), 1500);
    }
    onSubmit() {
        this.weatherMapService.getWeatherByLocation(this.locale)
            .subscribe(response => {
            this.description = response.weather[0].description;
            _GlobalConstants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].desc = response.weather[0].description;
            this.temp = 1.8 * (response.main.temp - 273) + 32;
            this.tempF = (this.temp).toFixed(1);
            this.tempC = ((response.main.temp) - 273.15).toFixed(1);
            this.wind = (response.wind.speed).toFixed(1) + " mph";
            this.city = response.name;
            this.lat = response.coord.lat;
            this.lng = response.coord.lon;
        });
        this.changeCoords();
        console.log(this.description);
        this.weatherMapService.sendSearch();
    }
    ngAfterViewInit() {
        this.elementPosition = this.menuElement.nativeElement.offsetTop;
    }
    handleScroll() {
        const windowScroll = window.pageYOffset;
        if (windowScroll >= 45) {
            this.sticky = true;
        }
        else {
            this.sticky = false;
        }
    }
    changeCoords() {
        this.weatherMapService.setCoord(this.lat, this.lng);
    }
}
ClimateComponent.ɵfac = function ClimateComponent_Factory(t) { return new (t || ClimateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_weather_map_service__WEBPACK_IMPORTED_MODULE_2__["WeatherMapService"])); };
ClimateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClimateComponent, selectors: [["app-climate"]], viewQuery: function ClimateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menuElement = _t.first);
    } }, hostBindings: function ClimateComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ClimateComponent_scroll_HostBindingHandler($event) { return ctx.handleScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 24, vars: 28, consts: [[1, "container-fluid"], [1, "tabs", "is-centered", "height", "is-fullwidth"], [1, "input-group"], [3, "ngSubmit"], ["heroForm", "ngForm"], ["type", "search", "id", "city-searchbar", "placeholder", "What're you searching for?", "aria-describedby", "button-addon1", "required", "", "name", "locale", 1, "form-control", "border-0", "bg-light", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success"], ["stickyMenu", ""], [1, "row"], [1, "col-lg-6"], ["align", "center", 2, "margin-top", "10%"], [3, "title", "subtitle", "percent", "space", "radius", "outerStrokeWidth", "innerStrokeWidth", "outerStrokeColor", "innerStrokeColor", "animation", "animationDuration"]], template: function ClimateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ClimateComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClimateComponent_Template_input_ngModelChange_7_listener($event) { return ctx.locale = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "circle-progress", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "circle-progress", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.locale);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("sticky", ctx.sticky);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.tempF)("subtitle", ctx.far)("percent", ctx.tempF)("space", -10)("radius", 50)("outerStrokeWidth", 10)("innerStrokeWidth", 10)("outerStrokeColor", "#4882c2")("innerStrokeColor", "#e7e8ea")("animation", true)("animationDuration", 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.tempC)("subtitle", ctx.cel)("percent", ctx.tempF)("space", -10)("radius", 50)("outerStrokeWidth", 10)("innerStrokeWidth", 10)("outerStrokeColor", "#4882c2")("innerStrokeColor", "#e7e8ea")("animation", true)("animationDuration", 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_4__["CircleProgressComponent"]], styles: ["div[_ngcontent-%COMP%] {\n  text-align: center;\n}     \nh3[_ngcontent-%COMP%] {\n  text-align: center;\n}     \n.height[_ngcontent-%COMP%] {\n  padding: 50px;\n}     \n.sticky[_ngcontent-%COMP%]{\n  position: fixed;\n  top: 0;\n  overflow: hidden;\n  z-index: 10;\n  width: 100%;\n}     \n     \nform[_ngcontent-%COMP%]{\n  width: 80%;\n  margin: 0 auto;\n  \n}     \n#city-searchbar[_ngcontent-%COMP%]{\n  margin: 0 auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaW1hdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFDQSxjQUFjO0FBQ2Q7RUFDRSxVQUFVO0VBQ1YsY0FBYzs7QUFFaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEIiLCJmaWxlIjoiY2xpbWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSAgICAgXG5oMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5oZWlnaHQge1xuICBwYWRkaW5nOiA1MHB4O1xufVxuLnN0aWNreXtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDEwO1xuICB3aWR0aDogMTAwJTtcbn1cbi8qIHNlYXJjaGJhciAqL1xuZm9ybXtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIFxufVxuI2NpdHktc2VhcmNoYmFye1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClimateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-climate',
                templateUrl: './climate.component.html',
                styleUrls: ['./climate.component.css']
            }]
    }], function () { return [{ type: _weather_map_service__WEBPACK_IMPORTED_MODULE_2__["WeatherMapService"] }]; }, { menuElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stickyMenu']
        }], handleScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map