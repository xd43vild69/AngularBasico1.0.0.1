import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Persona } from './persona'

@Component({
  selector: 'my-app',
  template: ` <h1>Guten Tag!</h1>
              <persona><persona>`,
  //templateUrl: 'src/template.html'
})
export class App implements OnInit {
  constructor() {}
  
  ngOnInit() {}
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App,  Persona],
  bootstrap: [ App ]
})
export class AppModule {}