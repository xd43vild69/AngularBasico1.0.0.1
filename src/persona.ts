import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'persona',
  template: `<h1>hello2</h1><br/><h1>{{ title }}</h1>`
  //templateUrl: 'src/template.html'
})
export class Persona implements OnInit {
  
  title = "ok";
  
  constructor() {}
  
  ngOnInit() {}
}
