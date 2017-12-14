import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  getWeatherInfo(city, callback) {
    this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d8163c356c7a65734a074fbadcf4e6c0`).subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => { 
        console.log('Something went wrong');
        console.log(err);
    });
  }
}
