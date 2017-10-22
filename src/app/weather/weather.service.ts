import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from "./weather";

@Injectable()
export class WeatherService {

    weather : Weather;

    constructor(private _http : HttpClient) { 
        _http.get('http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1')
        .subscribe(response => {
            console.log('response weather ---->'+JSON.stringify(response));
            this.weather = response as Weather;
            console.log('object ---->'+this.weather.name);
            console.log('coor ---->'+this.weather.coor.main);
        });
    }
}