import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Capability } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  key = '167ae4c1a56c9d839a0b56bf7bc81008';
  urlWeather = 'http://api.openweathermap.org/data/2.5/weather?';
  constructor(
    private http: HttpClient
  ) { }

  getWeather(city: string): Observable<any> {
    const URL = this.urlWeather + 'q=' + city + '&appid=' + this.key ;
    return this.http.get(URL);
  }
}
