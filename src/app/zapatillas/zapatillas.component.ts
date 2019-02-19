import { Component } from "@angular/core";

@Component({
   selector: 'zapatillas',
   templateUrl: './zapatilla.component.html'
})

export class zapatillas{
   public titulo: string;
   public listado: string;
   constructor(){
      this.titulo = "Componente de zapatillas"
      this.listado = "Listado de las marcas mas populares en el mercado mexicano"
   }
}