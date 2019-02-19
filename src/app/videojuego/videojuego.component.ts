import { Component, OnInit, DoCheck } from "@angular/core";
@Component({
   selector: 'videojuego',
   templateUrl: './videojuego.component.html'
})
export class videojuego implements OnInit, DoCheck{
   public titulo: string;
   public listado: string;
   constructor() {
      this.titulo= "Componente de video juegos";
      this. listado="Listado de juegos mas populares";
   }
   ngOnInit(){
      console.log("OnInit ejecutado");
   }
   ngDoCheck(){
      console.log("DoCheck ejecutado");
      
   }
   cambiarTitulo(){
      this.titulo = "Nuevo titulo";
   }
}