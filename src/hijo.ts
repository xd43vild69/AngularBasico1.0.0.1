import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'hijo',
  template: `<br/><h1>{{ title2 }}</h1>`
  //templateUrl: 'src/template.html'
})
export class Hijo implements OnInit {
  
  title2 = "hijo";
  
  constructor() {}
  
  ngOnInit() {}
}

