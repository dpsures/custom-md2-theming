import { Component, OnInit } from '@angular/core';
import { WeatherService } from "./weather.service";

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private _weather_service : WeatherService) { }

  ngOnInit() {

  }

}
