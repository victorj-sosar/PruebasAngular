export class Zapatilla {
   constructor(
      public nombre: string,
      public precio: number,
      public marca: string,
      public color: string,
      public stock: boolean) {
      this.nombre = nombre;
      this.precio = precio;
      this.marca = marca;
      this.color = color;
      this.stock = stock;
   }
}