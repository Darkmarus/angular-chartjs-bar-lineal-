import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BarLinealComponent } from './bar-lineal/bar-lineal.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,BarLinealComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
