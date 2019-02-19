import { Component } from "@angular/core";
@Component({
   selector: 'videojuego',
   templateUrl: './videojuego.component.html'
})
export class videojuego{
   public titulo: string;
   public listado: string;
   constructor() {
      this.titulo= "Componente de video juegos";
      this. listado="Listado de juegos mas populares" 
      console.log("Se ha cargado el componente video juego")
   }
}