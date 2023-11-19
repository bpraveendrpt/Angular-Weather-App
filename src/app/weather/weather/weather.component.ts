import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { 

  }
  weatherData?: WeatherData;
  cityName: string= 'chicago';

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
   // this.cityName= '';
  }
  
  public onSubmit(){

    console.log("praveen");
    

    this.getWeatherData(this.cityName);
    this.cityName= '';
  }
  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (respose) => {
        this.weatherData = respose;
        console.log(respose);
      }
    });
  }
}
