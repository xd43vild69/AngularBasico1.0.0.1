import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Hijo } from './hijo'

@Component({
  selector: 'persona',
  template: `<h1>hello2</h1><br/><h1>{{ title }}</h1><hijo></hijo>`,
  //directives:[hijo]
  //templateUrl: 'src/template.html'
})
export class Persona implements OnInit {
  
  title = "Padre";
  
  constructor() {}
  
  ngOnInit() {}
}

/*
@NgModule({
  declarations: [ App, Hijo],
  bootstrap: [ App ]
})
export class AppModule {}
*/
