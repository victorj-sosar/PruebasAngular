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
      console.log("OnInit ejecutado");
   }
   ngDoCheck(){
      console.log("DoCheck ejecutado");
      
   }
   ngOnDestroy(){
      console.log("OnDestroy ejecutado");
      
   }
   cambiarTitulo(){
      this.titulo = "Nuevo titulo";
   }
}