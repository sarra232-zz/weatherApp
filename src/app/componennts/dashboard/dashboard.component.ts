import { WeatherService } from './../../service/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  urlImage = 'https://img.pngio.com/weather-targeting-weather-png-350_350.jpg';
  city = '';
  wheatherCity: any;
  loading = false;
  error = '';
  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getWeather(): void {
    this.loading = true;
    this._weatherService.getWeather(this.city).subscribe(data => {
      this.wheatherCity = data;
      this.loading = false;
    }, error => {
      this.loading = false;
      this.error = error;
      this.errorReset();
    } );
  }

  errorReset(): void {
    setTimeout(() => {
      this.city = '';
      this.error = '';
    }, 3000
    );
  }
}
