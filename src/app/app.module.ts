import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { videojuego } from "./videojuego/videojuego.component";

import { AppComponent } from './app.component';
import { zapatillas } from './zapatillas/zapatillas.component';

@NgModule({
  declarations: [
    AppComponent,
    videojuego,
    zapatillas
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
