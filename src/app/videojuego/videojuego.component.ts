import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
@Component({
   selector: 'videojuego',
   templateUrl: './videojuego.component.html'
})
export class videojuego implements OnInit, DoCheck, OnDestroy{
   public titulo: string;
   public listado: string;
   constructor() {
      this.titulo= "Componente de video juegos";
      this. listado="Listado de juegos mas populares";
   }
   ngOnInit(){

   }
   ngDoCheck(){

   }
   ngOnDestroy(){
      
   }
   cambiarTitulo(){
      this.titulo = "Nuevo titulo";
   }
}