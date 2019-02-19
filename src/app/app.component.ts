import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App on Angular JS';
  mostrar_videojuegos: boolean = true;
  OcultarVideojuegos(valor){
    this.mostrar_videojuegos = valor;
  }
}
