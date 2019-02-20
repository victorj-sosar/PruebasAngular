import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "./../models/zapatilla";

@Component({
   selector: 'zapatillas',
   templateUrl: './zapatilla.component.html'
})

export class zapatillas implements OnInit{
   public titulo: string;
   public listado: string;
   public zapatilla: Array<Zapatilla>;
   constructor(){
      this.titulo = "Componente de zapatillas"
      this.zapatilla = [
         new Zapatilla('Airmax',2500, 'Nike', 'Negro/Amarillo', true),
         new Zapatilla('Yezzy', 300, 'Adidas', 'Negro', true),
         new Zapatilla('Electron', 1500, 'New Balance', 'Amarillo', false),
         new Zapatilla('Air-toog', 2200, 'Nike', 'jaspe', true)
      ];
   }
   ngOnInit(){
      console.log(this.zapatilla);
   }
}