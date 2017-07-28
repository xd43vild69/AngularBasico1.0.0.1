
import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Hijo } from './hijo'

@Component({
  selector: 'persona',
  template: `<h1>hello2</h1>
             <br/>
             <hijo></hijo>
             `
  //,directives: [Hijo],
  //templateUrl: 'src/template.html'
})
export class Persona implements OnInit {
  
  title = "ok";
  
  constructor() {}
  
  ngOnInit() {}
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App , Hijo ],
  bootstrap: [ App ]
})


/*
export class AppComponent {
  componentName : string = 'AppComponent';
}
bootstrap(AppComponent)
*/