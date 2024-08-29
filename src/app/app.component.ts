import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  weatherData: any = [];
  title = 'angular-project';
  url = "http://localhost:5001/api/WeatherForecast/GetWeather";

  constructor(private http: HttpClient){

  }
  getWeather() {
    let options = {
      
    }
    this.http.get(this.url).subscribe((data: any) => {
      this.weatherData = data;
    });
  }
  ngOnInit(): void {
  }
}
