import { Component } from '@angular/core';
import { City } from './city';
import {ApiWeatherService} from './api-weather.service'
import { Weather } from './weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'weather-cities';

  public cities: Array<City> = [];
  public weather: number;

  constructor(private apiTemp: ApiWeatherService) { }

  public addCity(name : string): void{
    this.weather = this.apiTemp.obtainWeather();
    this.cities.push({
      name: name,
      weather: {
        value : this.weather 
      } 
    })
  }


}

