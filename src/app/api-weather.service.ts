import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ApiWeatherService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', responseType: 'text' })
  };
  
  apiURL: string = 'https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=';
  apiKey: string ='PASTE HERE API KEY FROM OPENWEATHER';

  constructor(private httpClient: HttpClient) { }

  public obtainWeather(cityName:string): Observable<any>{
    return this.httpClient.get(`${this.apiURL+cityName+'&units=metric&appid='+this.apiKey}`, this.httpOptions);
  }
  
}
