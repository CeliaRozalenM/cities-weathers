import { Component } from '@angular/core';
import { City } from './city';
import { ApiWeatherService } from './api-weather.service'
import { Weather } from './weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'weather-cities';

  public myCities: Array<City> = [];
  public weatherTemp: any;

  constructor(private apiTemp: ApiWeatherService) { }

 async addCity(cityNameInput: string) {
    await this.apiTemp.obtainWeather(cityNameInput).subscribe(
      (weatherApi) => {
        this.weatherTemp = weatherApi.main.temp;
        console.log(this.weatherTemp);
        this.myCities.push({ cityName: cityNameInput, weather: { value: Math.round(this.weatherTemp) } });
      }
      );
  }

}

