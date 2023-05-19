export class Pizza {
  id?:string;
  nombre: string;
  ingredientes: string;
  precio: number;
  peso: number;

  constructor(nombre = '', ingredientes = '', precio = 0, peso = 500, id = '') {
    this.id = id;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
    this.peso = peso;
  }
}