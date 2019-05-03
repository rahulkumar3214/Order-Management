import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _cookieService:CookieService){}
 
  getCookie(key: string){
    return this._cookieService.get(key);
  }
  title = 'order';
}
