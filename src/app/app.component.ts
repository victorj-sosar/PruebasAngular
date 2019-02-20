import { Component } from '@angular/core';
import { configuracion } from "./models/configuracion";
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App on Angular JS';
  descripcion: string;
  mostrar_videojuegos: boolean = true;
  constructor(){
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
  }
  OcultarVideojuegos(valor){
    this.mostrar_videojuegos = valor;
  }
}
