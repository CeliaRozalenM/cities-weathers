import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ApiWeatherService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', responseType: 'text' })
  };
  weatherNumber: number;
  apiURL: string = '';
  
  constructor(private httpClient: HttpClient) {}

  public obtainWeather(){
    this.httpClient.get(`${this.apiURL}`, this.httpOptions).subscribe(weatherApi => {console.log(weatherApi);this.weatherNumber = weatherApi[0].woeid});
      return this.weatherNumber ;
  }
}
