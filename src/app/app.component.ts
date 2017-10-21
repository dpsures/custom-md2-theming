import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Component({
  selector: 'trainer',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  breakPoint : string;

  constructor(private _router : Router, private _breakPointObserver : BreakpointObserver){

    _breakPointObserver.observe('(max-width: 599px)')
    .subscribe(res => {
      if(res.matches){
        console.log('mobile device');
      }
    });

    _breakPointObserver.observe('(min-width: 600px) and (max-width: 1279px)')
    .subscribe(res => {
      if(res.matches){
        console.log('tablet device');
      }
    });

    _breakPointObserver.observe('(min-width: 1280px)')
    .subscribe(res => {
      if(res.matches){
        console.log('web desktop device');
      }
    });
  }

  ngOnInit() {
    this._router.navigate(['/trainers/home']);
  }
}
